---
title: "Broadcom Tomahawk 2 Architecture"
layout: page.njk
description: "ASIC-level buffer details for the Broadcom Tomahawk 2 (BCM56970) family"
---

The **Broadcom Tomahawk 2** (BCM56970) is the second generation of Broadcom's Tomahawk line of data center switching ASICs. Unlike the deep-buffered StrataDNX (Jericho) family, the Tomahawk family is designed as a shallow-buffered, high-bandwidth architecture optimized for line-rate performance and extremely low latency in leaf-spine hyperscale and enterprise datacenter networks.

## Overview

Tomahawk 2 delivers a significant leap in throughput compared to the original Tomahawk, bringing total switching capacity up to 6.4 Tbps while maintaining a completely on-chip, shared memory buffer model.

| Field | Value |
|-------|-------|
| ASIC | BCM56970 (Tomahawk 2) |
| Capacity | 6.4 Tbps full-duplex per NPU |
| On-Chip Buffer (OCB) | 42 MB |
| Off-Chip Buffer | None |
| Buffer Model | Shared Memory (SmartBuffer) |
| Process Node | 16 nm |
| Interface Support | 100G, 50G, 40G, 25G, 10G |

**Data quality note:** The 42 MB on-chip buffer figure is widely accepted in technical literature and vendor specifications for this generation. Exact buffer allocation behavior can depend on the network operating system and the implemented congestion control mechanisms (like ECN or PFC).

## Buffer Architecture

### Single-Tier Monolithic Model

Unlike the Jericho family's two-tier approach (OCB + HBM), Tomahawk 2 uses a purely single-tier buffer model:

1. **On-Chip Buffer (OCB):** 42 MB of embedded SRAM memory dynamically shared across the ports. 
2. **No External Memory:** Tomahawk 2 does not support High Bandwidth Memory (HBM) or external DRAM. Traffic that exceeds the capability of the internal buffer and active congestion control responses will result in packet drops.

This design philosophy favors lowest-possible latency and highest port density per watt, recognizing that modern datacenter fabrics typically rely on end-to-end transport protocols (like RoCEv2 or TCP) and network-level congestion control (ECN/DCTCP) rather than relying on the switches to absorb massive, sustained microbursts.

### SmartBuffer and Multi-Core Design

The Tomahawk 2 ASIC manages its 42 MB buffer through a multi-core architecture (typically a 4-core pipeline). Key characteristics of this buffer management include:

*   **Partitioning:** The buffer is not a single, truly global pool but is distributed among the internal packet processing cores. Each core has its own Memory Management Unit (MMU) handling a slice of the total OCB.
*   **Dynamic Sharing:** Despite the multi-core split, "SmartBuffer" capabilities allow dynamic sharing of memory within each core's domain, maximizing bursting capabilities for individual congested ports without starving other interfaces.
*   **Shallow-Buffer Dynamics:** The lack of deep buffers means that traffic engineering, load balancing (ECMP), and rapid flow control (like Priority Flow Control or PFC) are paramount in Tomahawk 2 deployments to avoid microburst-induced packet loss.

## Comparison to original Tomahawk

| Feature | Tomahawk (BCM56960) | Tomahawk 2 (BCM56970) |
|---------|---------------------|-----------------------|
| Capacity | 3.2 Tbps FD | 6.4 Tbps FD |
| OCB | 16 MB | 42 MB |
| Off-chip memory | None | None |
| Standard Density | 32 x 100G | 64 x 100G |
| Process | 28 nm | 16 nm |

## Known Deployments

Tomahawk 2 was historically positioned in 64x100G or high-density 25G/40G fixed top-of-rack (ToR) and spine switches:

- Arista 7260X3 Series (e.g., 7260QX-64)
- Various whitebox / OCP platforms (Edgecore, Celestica)

## See Also

- [Broadcom Jericho 3 Architecture](/concepts/broadcom-jericho3/) — Contrast with deep-buffered routing
- [Back to the main buffer table](/)
