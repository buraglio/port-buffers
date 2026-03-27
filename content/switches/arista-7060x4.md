---
title: "Arista 7060X4 Series"
layout: page.njk
description: "Buffer notes for the Arista 7060X4 series (Broadcom Tomahawk 3)"
---

The Arista 7060X4 series is anchored by the **Broadcom Tomahawk 3** ASIC, tailored explicitly for ultra-high-bandwidth scale-out architectures utilizing 100G and 400G deployments.

| Field | Value |
|-------|-------|
| Ports | 32x 400G or dense 100G setups |
| Total Buffer | 64 MB |
| Architecture | Dynamically Shared Pool |

## Buffer Architecture

The 7060X4 series features a dynamically shared **64 MB packet buffer** (though some specific derivative models, like the DCS-7060PX4-32-F, utilize 32 MB). Compared to legacy structures, the larger shared pool combined with improved algorithmic burst absorption allows these switches to absorb heavy congestion events smoothly across ultra-high-speed ports.

## References

- [Arista 7060X4 Series Datasheet](https://www.arista.com/assets/data/pdf/Datasheets/7060X4-Datasheet.pdf)

[← Back to the main buffer table](/)
