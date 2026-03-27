---
title: "Broadcom Tomahawk 4 (BCM56990 Series)"
layout: page.njk
description: "Architecture notes on the Broadcom Tomahawk 4 merchant silicon switch ASIC"
---

**Announced:** December 9, 2019

The **Broadcom StrataXGS Tomahawk 4** is a merchant silicon Ethernet switch ASIC targeting hyperscale data center fabrics, AI/ML backend networks, and web-scale spine deployments operating at 400G and 800G. It doubles the bandwidth of the Tomahawk 3 while significantly increasing buffer capacity and adding routing capabilities previously absent from the Tomahawk line.

## Part Numbers and Variants

| Part Number | Bandwidth | Max Ports | Buffer |
|-------------|-----------|-----------|--------|
| BCM56990 | 25.6 Tbps | 64x 400G, 128x 200G, or 256x 100G | ~113.66 MB |
| BCM56993 | 12.8 Tbps | 32x 400G or 128x 100G | ~56.83 MB |

The BCM56993 (announced December 2020 as part of a family expansion) carries exactly half the buffer of the BCM56990, consistent with it being a half-bandwidth variant of the same silicon design.

**Process node:** TSMC 7 nm FinFET — confirmed via TechInsights floorplan analysis (DFR-2202-801)
**Transistor count:** ~31 billion
**SerDes:** 512 lanes at 50G PAM4 (BCM56990)

## Buffer Architecture

The BCM56990 carries approximately **113.66 MB of on-chip SRAM** presented as a fully shared packet buffer pool. This figure is not officially published by Broadcom, but is documented in multiple vendor product specifications for switches built on BCM56990 (e.g., FS.com N9510-64D at 113.66 MB) and corroborated by independent hardware analysis. The rounded figure "up to 114 MB" appears in several vendor datasheets. This is all on-chip SRAM — no HBM, no external DRAM.

The buffer is described by Broadcom as "fully-shared packet buffers" providing "up to 10x burst absorption versus alternatives." Like Tomahawk 3, the Tomahawk 4 uses a unified pool rather than the per-slice segmented architecture found in the original Tomahawk and Tomahawk 2. All ports share access to the entire pool, with dynamic thresholding used to prevent any single port or queue from monopolizing the available memory during sustained congestion.

Broadcom does not publish the internal pipeline topology of the Tomahawk 4, but the proportional relationship between BCM56990 (113.66 MB) and BCM56993 (56.83 MB) suggests the buffer scales linearly with bandwidth capacity across variants.

## Key Features vs. Tomahawk 3

- 2x bandwidth (12.8 Tbps → 25.6 Tbps)
- ~77% larger buffer (~113 MB vs. 64 MB on-chip SRAM)
- 512 SerDes lanes at 50G PAM4 vs. 256 at 56G PAM4 in Tomahawk 3 — native support for 400G (8 lanes × 50G) without external gearboxes
- **Routing and tunneling support added** — first Tomahawk to support IP routing and tunneling natively; prior Tomahawk generations were L2/L3 only in limited ways
- ~75% lower power per gigabit versus prior Tomahawk generations
- Supports 800G configurations when combined with external gearbox retimers (two 400G ports bonded)
- "Fully-shared packet buffers" — same unified MMU model as Tomahawk 3, extended to the larger pool

## Comparison: Tomahawk 3 vs. Tomahawk 4

| Attribute | Tomahawk 3 (BCM56980) | Tomahawk 4 (BCM56990) |
|-----------|----------------------|----------------------|
| Process | 16 nm FinFET | TSMC 7 nm FinFET |
| Bandwidth | 12.8 Tbps | 25.6 Tbps |
| Buffer | 64 MB | ~113.66 MB |
| SerDes | 256 × 56G PAM4 | 512 × 50G PAM4 |
| Max 400G ports | 32 | 64 |
| Transistors | ~12.8B | ~31B |
| Routing support | Limited | Yes (added in TH4) |
| Year | 2017 | 2019 |

## Switches Using Tomahawk 4

- [Arista 7060X5 Series](/switches/arista-7060x5/) — up to 114 MB dynamically shared (BCM56990)

## See Also

- [Broadcom Trident 4](/concepts/broadcom-trident4/) — same 7 nm generation, enterprise/campus focus, 132 MB buffer
- [Summary: Buffer Sizing](/summary/)
- [Back to the main buffer table](/)
