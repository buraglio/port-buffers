---
title: "Nokia Access and Aggregation Platform Buffering"
layout: page.njk
description: "Buffer architecture comparison for Nokia 7210 SAS, 7250 IXR, 7705 SAR, and 7730 SXR platforms"
---

Unlike the Nokia 7750 SR — which uses Nokia's own FP ASICs throughout — the access and aggregation router portfolio uses **different silicon strategies** matched to their deployment roles.

| Platform | Silicon | Role |
|----------|---------|------|
| 7210 SAS | Merchant Ethernet | Access / demarcation |
| 7250 IXR | Merchant (Jericho/Qumran) | Aggregation / DC edge |
| 7705 SAR | SAR ASIC (Nokia) | Mobile backhaul / TDM transport |
| 7730 SXR | Nokia FP5 | Core / DCI |

This distinction is critical: **buffering behavior is fundamentally tied to silicon design**.

---

## Nokia 7210 SAS

The 7210 SAS is built on **merchant Ethernet switching silicon**.

### Buffer Size

- **64 MB** (lower-end variants)
- **512 MB** (high-end variants, e.g., 7210 SAS-K ETR)

### Architecture

- Shared across ingress and egress
- Ingress-dominant buffering model
- Supports hierarchical QoS, per-service policing and shaping
- "Deep" relative to access-layer devices, but not core-class

### Target Use

Access edge, demarcation, cell-site routers. Designed to absorb short bursts and access loop congestion. Not optimized for high fan-in aggregation or sustained oversubscription.

---

## Nokia 7250 IXR

The 7250 IXR uses **Broadcom Jericho/Qumran family merchant silicon**.

### Buffer Model

- **Shared pool + VOQ (Virtual Output Queues)**
- Distributed across pipeline stages

### VOQ Architecture

Packets are queued per egress destination. This reduces head-of-line blocking: a slow or congested output cannot stall traffic bound for healthy ports.

### Depth Profile

Shallow-to-moderate. The 7250 IXR is designed for **high throughput and low latency**, not extreme burst absorption. The buffer pool is smaller than FP-based systems but used efficiently through statistical multiplexing.

### Target Use

100G / 400G aggregation and data center edge. Handles microbursts of limited duration and east-west DC traffic patterns. Less effective under sustained congestion or heavy oversubscription.

---

## Nokia 7705 SAR

The 7705 SAR uses a **specialized SAR ASIC** with a unique fixed-segment buffer architecture.

### Buffer Size

~200–300 MB per adapter card, depending on module.

### Fixed Buffer Segments

Unlike shared-memory systems, the 7705 SAR allocates buffer in fixed units:

**512-byte mode (with chaining):** Packets are split across multiple linked segments. The first carries the header and partial payload; remaining payload is distributed across chained segments.

**2304-byte mode (no chaining):** One packet occupies one buffer. No chaining overhead.

### QoS Interaction

Each queue has an **MBS (Maximum Buffer Size)** configuration value. Queues can be configured to claim more memory than is physically available on the adapter card — buffer allocation is **not guaranteed under congestion**. Operators must size MBS values relative to actual card memory.

### Target Use

Mobile backhaul, TDM adaptation, circuit emulation. Deterministic buffer allocation per packet. Less flexible than shared-memory systems; buffer exhaustion is possible under contention.

---

## Nokia 7730 SXR

The 7730 SXR is built on Nokia's **FP5 network processor** — the same silicon family as 7750 SR FP5 line cards.

### Buffer Characteristics

- Multi-GB buffer (FP5-class)
- Fully shared buffer architecture
- Integrated pre-buffer, main buffer, and QoS scheduler
- ~256k queues

### Behavior

Designed for core and DCI roles. Handles high oversubscription, large-scale aggregation, and deterministic QoS under sustained congestion. Comparable in buffering behavior to the 7750 SR FP5.

---

## Cross-Platform Comparison

| Feature | 7210 SAS | 7250 IXR | 7705 SAR | 7730 SXR |
|---------|----------|----------|----------|----------|
| Silicon | Merchant | Merchant (Jericho/Qumran) | SAR ASIC | Nokia FP5 |
| Buffer size | 64–512 MB | Moderate (shared) | ~200–300 MB/card | Multi-GB (FP5-class) |
| Buffer model | Shared ingress/egress | Shared + VOQ | Fixed segments | Fully shared |
| Burst handling | Moderate | Moderate | Deterministic | Excellent |
| QoS scale | Moderate | High | Moderate | Very high |
| Oversubscription | Limited | Moderate | Limited | High |
| Target role | Access | Aggregation / DC edge | Mobile transport | Core / DCI |

---

## Design Trade-offs

| Goal | Platform |
|------|----------|
| Deep buffering / congestion tolerance | 7730 SXR (FP5) |
| Low latency / DC traffic | 7250 IXR |
| Cost-efficient access edge | 7210 SAS |
| Deterministic transport / TDM | 7705 SAR |

---

## See Also

- [Nokia 7210 SAS detail page](/switches/nokia-7210-sas/)
- [Nokia 7250 IXR detail page](/switches/nokia-7250-ixr/)
- [Nokia 7705 SAR detail page](/switches/nokia-7705-sar/)
- [Nokia 7730 SXR detail page](/switches/nokia-7730-sxr/)
- [Nokia SR Platform (FP4/FP5)](/concepts/nokia-sr-platform/) — for the 7750 SR core router architecture
- [Back to the main buffer table](/)

---

## References

- Nokia 7210 SAS-K ETR specifications: reboot-it.com.au
- Nokia 7705 SAR buffering and segmentation: device.report (PDF 3b5beca4)
- Nokia 7705 SAR buffer management (MBS behavior): Alcatel-Lucent Infodoc 3HE19520AAABTQZZA01
- Nokia IP routing portfolio architecture: manuals.plus
- Nokia silicon evolution (FP vs merchant): Scribd document 843322505
