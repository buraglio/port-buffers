---
title: "Broadcom Tomahawk 3 Architecture"
layout: page.njk
description: "ASIC-level buffer details for the Broadcom Tomahawk 3 (BCM56980) family"
---

The **Broadcom Tomahawk 3** (BCM56980) is the third generation of Broadcom's hyperscale-optimized Tomahawk data center switching ASICs. Focused on bringing 400GbE to volume production, it maintains the family's hallmark shallow-buffered, low-latency, and high-throughput design philosophy.

## Overview

Tomahawk 3 doubled the capacity of the previous generation, achieving a total switching capacity of 12.8 Tbps. This allowed for the industry's early mass transitions to dense 400G routing and switching.

| Field | Value |
|-------|-------|
| ASIC | BCM56980 (Tomahawk 3) |
| Capacity | 12.8 Tbps full-duplex per NPU |
| On-Chip Buffer (OCB) | 64 MB |
| Off-Chip Buffer | None |
| Buffer Model | Shared Memory (SmartBuffer) |
| Process Node | 16 nm |
| Interface Support | 400G, 200G, 100G, 50G, 25G, 10G |

**Data quality note:** The 64 MB on-chip buffer is an architectural constant for the baseline BCM56980. Effective buffer usability per port or per flow heavily depends on the vendor's Network Operating System (NOS) thresholds and shared pool configurations.

## Buffer Architecture

### Shared Pool Scaling for 400G

Tomahawk 3 continues the monolithic on-chip buffer model without any external HBM capabilities. 

1. **On-Chip Buffer (OCB):** Features a 64 MB completely integrated shared-buffer. This bump from the 42 MB in Tomahawk 2 was necessary to handle the vastly increased pipeline bandwidth (256 individual 56G-PAM4 SerDes lanes) and the burst dynamics of 400GbE ports.
2. **RoCEv2 and RDMA Focus:** Despite being "shallow buffered," the Tomahawk 3's memory management was extensively tuned to support lossless Ethernet use cases (like RDMA over Converged Ethernet or RoCEv2) for machine learning clusters and NVMe-oF storage fabrics, relying aggressively on Priority Flow Control (PFC) and Explicit Congestion Notification (ECN).

### Trade-offs

By capping the buffer at 64 MB, Tomahawk 3 maximizes thermal efficiency and density (delivering 12.8 Tbps in a single 1U form factor) but completely sacrifices the ability to absorb profound network bursts. Compared to a deep-buffer router like Jericho 2 (which has 8 GB of HBM and a similar release timeframe), Tomahawk 3 is strictly an aggregation, leaf, or spine switch that mandates sophisticated host networking to prevent traffic drops.

## Comparison to Previous Generation

| Feature | Tomahawk 2 (BCM56970) | Tomahawk 3 (BCM56980) |
|---------|-----------------------|-----------------------|
| Capacity | 6.4 Tbps FD | 12.8 Tbps FD |
| OCB | 42 MB | 64 MB |
| SerDes | 25G NRZ | 50G PAM4 |
| High-Density Ports | 64 x 100G | 32 x 400G (or 128 x 100G) |
| Process | 16 nm | 16 nm |

## Known Deployments

Tomahawk 3 was the anchor for the industry's first wave of 400G fixed-configuration switches:

- Arista 7060X4 Series (e.g., 7060DX4-32 for QSFP-DD, 7060PX4-32 for OSFP)
- Celestica Seastone 2 / Edgecore bare-metal switches

## See Also

- [Broadcom Tomahawk 2 Architecture](/concepts/broadcom-tomahawk2/) — Previous generation
- [Broadcom Tomahawk 4 Architecture](/concepts/broadcom-tomahawk4/) — Next generation (25.6 Tbps)
- [Back to the main buffer table](/)
