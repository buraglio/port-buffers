---
title: "Broadcom Jericho 3 Architecture"
layout: page.njk
description: "ASIC-level buffer details for the Broadcom Jericho 3 (BCM88830) StrataDNX family"
---

The **Broadcom Jericho 3** (BCM88830), part of the StrataDNX family, is the third generation of Broadcom's deep-buffer carrier routing ASIC line. It targets 800G-era IP core and edge routing, AI/ML interconnect fabrics, and provider edge platforms where large sustained buffers are required alongside high port density.

## Overview

Jericho 3 doubles the per-chip capacity of Jericho 2 while retaining the two-tier buffer architecture (on-chip OCB + off-chip HBM) and the VOQ scheduling model that defines the StrataDNX line.

| Field | Value |
|-------|-------|
| ASIC | BCM88830 (Jericho 3) |
| Capacity | 3.2 Tbps full-duplex per NPU |
| On-Chip Buffer (OCB) | ~48 MB |
| Off-Chip Buffer | Up to 32 GB HBM3 per ASIC |
| Buffer Model | VOQ (Virtual Output Queueing) |
| Process Node | TSMC 5 nm (N5) |
| Interface Support | 800G (OSFP), 400G (QSFP-DD), 100G/25G/10G |

**Data quality note:** The 48 MB OCB figure is derived from public Broadcom presentations and third-party silicon analysis. The HBM3 capacity (up to 32 GB) is sourced from Broadcom press material for Jericho 3 platform announcements. Exact per-deployment OCB and HBM configuration depends on the platform vendor's implementation.

## Buffer Architecture

### Two-Tier Model

Jericho 3 preserves the two-tier buffer hierarchy of the Jericho family:

1. **On-Chip Buffer (OCB):** ~48 MB of embedded SRAM — fast, low-latency storage used for all traffic not experiencing congestion. Traffic that arrives and departs without congestion never touches HBM.

2. **Off-Chip HBM3:** Up to 32 GB of High Bandwidth Memory directly stacked or closely coupled to the ASIC die. Traffic spills into HBM only under sustained congestion, providing multi-second buffering capacity at 800G line rates.

This is fundamentally different from the Tomahawk/Trident families, which use only on-chip SRAM with no external memory tier. Jericho 3's OCB is smaller relative to the total throughput — but the HBM tier makes the total buffer orders of magnitude larger than any Tomahawk or Trident switch.

### HBM3 vs. HBM Used in Jericho 2

Jericho 2 (BCM88690) uses HBM2 or HBM2e, providing up to 8 GB at ~1 TB/s bandwidth. Jericho 3 advances to **HBM3**, which provides:

- Higher bandwidth per stack (>2 TB/s)
- Improved energy efficiency per bit
- Support for larger DRAM stack depths, enabling up to 32 GB per ASIC

The bandwidth increase is necessary to service 800G line cards without the HBM bus becoming the bottleneck during deep congestion.

### Virtual Output Queueing (VOQ)

Jericho 3 retains VOQ as its core scheduling architecture. In a Jericho 3 fabric system:

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
