---
title: "Arista 7060X5 Series"
layout: page.njk
description: "Buffer notes for the Arista 7060X5 series (Broadcom Tomahawk 4)"
---

The Arista 7060X5 series operates on the **Broadcom Tomahawk 4** ASIC. It represents high-end, scale-out tier networks for web service providers, AI/ML backend infrastructures, and hyperscale environments operating at 400G and 800G.

| Field | Value |
|-------|-------|
| Ports | Dense 400G and 800G deployments |
| Total Buffer | Up to 114 MB |
| Architecture | Dynamically Shared Pool |

## Buffer Architecture

Capitalizing on the power of Tomahawk 4, the 7060X5 introduces a substantial **shared buffer of up to 114 MB**. This pool handles the immense throughput without congestion drops traversing multi-terabit fabrics. The allocation guarantees zero packet-loss handling when configured properly for high-stakes ML workflows and clustered GPU communication that rely on latency-optimized, bursty transmissions.

## References

- [Arista 7060X5 Series Datasheet](https://www.arista.com/assets/data/pdf/Datasheets/7060X5-Datasheet.pdf)

## See Also

- [Broadcom Tomahawk 4 Architecture](/concepts/broadcom-tomahawk4/) — ASIC-level buffer details
- [Back to the main buffer table](/)
