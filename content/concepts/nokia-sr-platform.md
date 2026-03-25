---
title: "Nokia SR Platform: FP4 and FP5 Buffering"
layout: page.njk
description: "Deep-dive into Nokia 7750 SR buffering architecture across FP4 and FP5 forwarding plane generations"
---

Nokia's FP (Forwarding Plane) architecture in the 7750 SR platform uses a **fully buffered design** — packet buffering is deeply integrated into both ingress and egress pipelines across all generations.

Both FP4 and FP5:

- Use **shared packet memory pools** dynamically allocated across ports, queues, and services
- Implement a **pre-buffer stage** that absorbs bursts before traffic classification
- Maintain **QoS-aware scheduling tied to buffer state**
- Support **dynamic queue reallocation without changing buffer pool size**

---

## FP4 Buffering

### Buffer Size and Structure

- Up to **~64 GB packet buffer per line card**
- Fully shared between ingress and egress
- Buffer is not statically assigned to ports

### Pre-buffer (front-end buffering)

- Multi-million packet capacity (varies by implementation)
- Used for microburst absorption, pre-classification staging, and QoS protection

### Queue Model

- Default: **128k ingress + 128k egress queues**
- Reallocation supported in **8k increments**

### Interface-Level Behavior

FP4 buffering enables:

- High fan-in aggregation (many 10G/100G feeding fewer uplinks)
- Absorption of speed mismatches and traffic bursts
- Deterministic QoS enforcement under congestion

FP4 introduced **"intelligent aggregation"**: buffering allows oversubscription while maintaining SLA guarantees.

---

## FP5 Buffering

### Buffer Size and Pre-buffer

- **32 GB to 64 GB packet buffer per line card**
- Pre-buffer capacity: **~10.8M to 21.6M packets** (64-byte units)
  - Example configurations: 32 GB + 10.8M packets, or 64 GB + 21.6M packets

### Architectural Enhancements over FP4

**Improved buffer efficiency** — better utilization of shared memory, reduced head-of-line blocking, more effective burst absorption at high speeds.

**Tighter pre-buffer integration** — closer coupling between pre-buffer, forwarding pipeline, and QoS scheduler.

**Higher scale queueing** — queue reallocation increments doubled to **16k** (vs 8k in FP4).

**Higher throughput** — FP5 approximately doubles forwarding capacity over FP4: ~3 Tbps to ~6 Tbps per NPU generation.

### Interface-Level Behavior

FP5 is optimized for:

- 400G / 800G interfaces
- High-density edge and core aggregation
- Deep burst absorption at very high line rates
- More stable QoS under heavy load

FP5 does not significantly increase raw buffer size over FP4, but delivers **higher effective buffer utilization**, **greater aggregation scale**, and **improved latency consistency under congestion**.

---

## FP4 vs FP5 Comparison

| Feature | FP4 | FP5 |
|---------|-----|-----|
| Buffer size | ~64 GB/LC | 32–64 GB/LC |
| Pre-buffer | Multi-million packets | ~10.8M–21.6M packets |
| Buffer model | Fully shared | Fully shared (enhanced) |
| Queue realloc increment | 8k | 16k |
| Default queues | 128k ingress / 128k egress | 128k ingress / 128k egress |
| Pipeline integration | Pre-buffer + forwarding | Tighter integration |
| Throughput class | ~3 Tbps | ~6 Tbps |
| Target interfaces | up to 400G | 400G / 800G |
| Key strength | Deterministic buffering | Efficiency + scale |

---

## Core Architectural Concepts

### Shared Buffer Pools

Memory is dynamically allocated across ports, queues, and services. This maximizes utilization under mixed workloads — a port with no traffic does not waste buffer that a congested port could use.

### Pre-buffering

The first stage of packet handling absorbs bursts before classification. This protects high-priority traffic flows from drops during transient congestion spikes, even before QoS scheduling has acted.

### QoS-Coupled Buffering

Buffers are tightly linked to queue scheduling and congestion avoidance (e.g., WRED). This enables deterministic forwarding behavior: the system can make drop decisions based on queue depth with high precision.

### Queue Flexibility

Queues can be reallocated between ingress and egress. This does not impact total buffer pool size — it only changes how queue resources are divided.

---

## See Also

- [Nokia 7750 SR detail page](/switches/nokia-7750-sr/) — buffer specs by FP generation
- [Nokia 7730 SXR detail page](/switches/nokia-7730-sxr/) — FP5 in a core/DCI platform
- [Nokia Access/Aggregation platforms](/concepts/nokia-access-agg/) — merchant silicon and SAR ASIC comparison
- [Back to the main buffer table](/)

---

## References

- Nokia SR OS QoS Guide (FP resource and queue behavior): [documentation.nokia.com](https://documentation.nokia.com/sr/24-3/7750-sr/books/qos/fp-qos-configuration.html)
- Nokia Partner Training (FP5 hardware, buffer and pre-buffer values): Scribd document 934362600
- Nokia FP4 vs FP5 architecture overview: Scribd document 931308604
