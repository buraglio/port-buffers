---
title: "Edgecore AS7726-32X (DCS204)"
layout: page.njk
description: "Buffer notes for the Edgecore AS7726-32X (Broadcom Trident 3)"
---

The Edgecore AS7726-32X (also marketed as DCS204) is a pure enterprise and data center bare-metal top-of-rack (ToR) and spine switch. It is certified for several NOS platforms, notably including **IP Infusion OcNOS**.

| Field | Value |
|-------|-------|
| Ports | 32x 100G QSFP28 |
| ASIC | **Broadcom Trident 3** (BCM56870) |
| Total Buffer | **32 MB** |
| Architecture | Fully Shared On-Chip |

## Buffer Architecture

Unlike the deep-buffered Qumran family tailored for carrier routing, the AS7726-32X uses the datacenter-optimized **Broadcom Trident 3** ASIC. It features a fully shared **32 MB on-chip packet buffer**.

While much shallower than a router, the 32 MB pool is dynamically allocated across all active ports via a shared-memory threshold mechanism. This is optimized for east-west traffic flow within data centers where latency is prioritized over absorbing massive internet-scale TCP bursts.

## References
- [Edgecore AS7726-32X Overview](https://www.edge-core.com)

## See Also
- [Broadcom Trident 3 Architecture](/concepts/broadcom-trident3/) — ASIC-level buffer details

[← Back to the main buffer table](/)
