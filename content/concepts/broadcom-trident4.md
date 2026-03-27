---
title: "Broadcom Trident 4 (BCM56880 Series)"
layout: page.njk
description: "Architecture notes on the Broadcom Trident 4 merchant silicon switch ASIC"
---

**Announced:** June 11, 2019

The **Broadcom StrataXGS Trident 4** is a merchant silicon Ethernet switch ASIC family targeting enterprise data center and campus networks at 100G and 400G port speeds. Built on TSMC's 7 nm process node, it delivers approximately 4x the bandwidth and 4x the buffer capacity of the Trident 3, while introducing a fully compiler-driven programmable pipeline.

## Part Numbers and Variants

| Variant | Bandwidth | Max Ports | Buffer |
|---------|-----------|-----------|--------|
| X11 | 12.8 Tbps | 32x 400G or 128x 100G | 132 MB |
| X9 | 8.5 Tbps | — | ~82 MB |
| X4 | 4.25 Tbps | — | not publicly confirmed |
| X2/X3 | 2.0–2.1 Tbps | — | not publicly confirmed |

All variants ship under the **BCM56880** series umbrella. Broadcom does not publicly disclose individual silicon part numbers for sub-variants. The X11 is the flagship high-density spine variant; the X9 and below target aggregation and campus-edge deployments.

**Process node:** TSMC N7HPC (7 nm) — confirmed via TechInsights floorplan analysis (DFR-2103-802)
**Transistor count:** ~21 billion

## Buffer Architecture

The Trident 4 X11 carries **132 MB of on-chip SRAM** in a single fully shared SmartBuffer pool. This is not HBM or external DRAM — the entire 132 MB is embedded in the monolithic die. The jump from Trident 3's 32 MB to 132 MB (roughly 4x) is primarily enabled by the move from 16 nm to 7 nm, which approximately quadrupled achievable on-die SRAM density.

As with Trident 3, the buffer is presented as a unified flat pool accessible to all ports simultaneously. Dynamic thresholding allows the MMU to allocate memory to whichever queues are actively congested, subject to per-queue and per-port configurable maximums. Vendors may configure static headroom reservations for lossless (PFC/RoCEv2) traffic classes on top of the dynamic pool.

The buffer figure for specific deployed switches may vary slightly by vendor configuration. The Arista 7050X4 series (X11 variant) documents "up to 132 MB."

## Key Features vs. Trident 3

- ~4x larger buffer (132 MB vs. 32 MB on-chip SRAM)
- 4x bandwidth increase (12.8 Tbps vs. 3.2 Tbps)
- **Fully compiler-programmable P4-native pipeline** — not merely P4-influenced; the forwarding pipeline is described entirely in P4 and compiled to the hardware. This enables custom protocols and match-action behaviors without FPGA or NPU co-processors
- 5x route scale — up to 620,000 IPv6 routes on-chip (vs. ~120K on Trident 3)
- 10x ACL scale
- **BroadView Gen4 telemetry** with IFA 2.0 (In-band Flow Analyzer)
- Latency-Based ECN (LBECN) — marks ECN based on queuing latency, not queue depth, for better TCP/RDMA behavior
- Elephant Flow detection and re-prioritization
- Dynamic Load Balancing, Dynamic Group Multipathing, Resilient Hashing
- Pin-compatible with Trident 3 — allows board-level drop-in upgrade for vendors

## Switches Using Trident 4

- [Arista 7050X4 Series](/switches/arista-7050x4/) — up to 132 MB fully shared (X11 variant)

## See Also

- [Broadcom Trident 3](/concepts/broadcom-trident3/) — predecessor at 16 nm with 32 MB buffer
- [Trident II Architecture](/concepts/trident-ii/) — older generation for historical context
- [Summary: Buffer Sizing](/summary/)
- [Back to the main buffer table](/)
