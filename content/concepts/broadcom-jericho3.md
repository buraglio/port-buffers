---
title: "Broadcom Jericho3 Architecture"
layout: page.njk
description: "Broadcom Jericho3 (J3C) – Deep buffer core routing silicon with HBM3 integration for 800G networks"
---

## Broadcom Jericho3 – Deep Buffer Core Routing

**Broadcom Jericho3** (J3C/BCM88830) is the latest generation of Broadcom's deep buffer routing ASIC family, featuring HBM3 (High Bandwidth Memory 3) integration for ultra-deep packet buffering at 800G speeds.

### Architecture Overview

| Specification | Value |
|---------------|-------|
| ASIC | BCM88830 (Jericho3) |
| Capacity | 3.2 Tbps full-duplex per NPU |
| Process Node | TSMC 5nm (N5) |
| On-Chip Buffer (OCB) | ~48 MB |
| Off-Chip HBM3 | Up to 32 GB per ASIC |
| Queue Structure | VOQ (Virtual Output Queuing) |
| Interface Support | 800G (OSFP), 400G (QSFP-DD), 100G/25G/10G |

### Buffer Architecture

Jericho3 features a **hybrid buffer** architecture combining on-chip and off-chip memory:

- **On-Chip Buffer**: 48-64 MB fast access memory (OCB)
- **Off-Chip Buffer**: 16-32 GB HBM3 (High Bandwidth Memory)
- **Total Effective**: 16-32+ GB per ASIC
- **Queue Structure**: Virtual Output Queuing (VOQ)
- **Access Latency**: On-chip (<100ns), HBM3 (~500ns)

- Packets arriving at an ingress NPU are queued in VOQs at ingress, one queue per egress destination
- No packet crosses the fabric until credits are received from the egress NPU
- The HBM at ingress absorbs the queued packets during congestion
- This eliminates head-of-line (HOL) blocking and fabric congestion

VOQ requires tight fabric-level credit management and is most commonly deployed in modular chassis with a central switch fabric, though Jericho 3 also supports standalone (fabric-less) operation for fixed-form deployments.

## Comparison to Jericho 2

| Feature | Jericho 2 (BCM88690) | Jericho 3 (BCM88830) |
|---------|----------------------|----------------------|
| Capacity | 1.6 Tbps FD | 3.2 Tbps FD |
| OCB | ~32 MB | ~48 MB |
| Off-chip memory | 8 GB HBM2/2e | Up to 32 GB HBM3 |
| Max port speed | 400G | 800G |
| Process | 7 nm | 5 nm |

## Known Deployments

Jericho 3 is deployed (or planned) in:

- Cisco NCS 5800 series (modular chassis with J3 line cards)
- High-end 800G provider edge platforms

**Data quality note:** Platform announcements using J3 were in progress as of mid-2025. Specific model availability and buffer configurations depend on vendor implementation choices.

## See Also

- [Broadcom Jericho Architecture](/concepts/broadcom-jericho/) — Jericho and Jericho 2 overview
- [Broadcom Jericho 4 Architecture](/concepts/broadcom-jericho4/) — next generation
- [Cisco NCS 5700 Series](/switches/cisco-ncs-5700/) — Jericho 2 deployment example
- [Arista 7280R3 / 7800R3 Series](/switches/arista-7280r3/) — Jericho 2 deployment example
- [Back to the main buffer table](/)
