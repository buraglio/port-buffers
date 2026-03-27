---
title: "Broadcom Jericho 4 Architecture"
layout: page.njk
description: "ASIC-level buffer details for the Broadcom Jericho 4 StrataDNX family"
---

The **Broadcom Jericho 4** is the fourth generation of Broadcom's StrataDNX deep-buffer carrier routing ASIC family. It targets next-generation IP core, provider edge, and AI/ML back-end fabric deployments at 400G–1.6T per port, extending the two-tier OCB + HBM buffer model of the Jericho line into the 1+ Tbps per NPU era.

**Data quality note:** As of mid-2025, Jericho 4 had been referenced in Broadcom roadmap communications and some vendor announcements, but detailed silicon specifications (exact OCB size, HBM generation and capacity, exact per-NPU capacity) had not been confirmed in a public, citable Broadcom datasheet. The figures below reflect what has been disclosed in public Broadcom and vendor communications; figures marked as inferred are based on the generational scaling pattern of the Jericho family.

## Overview

| Field | Value |
|-------|-------|
| ASIC | TBD (Jericho 4 / BCM8xxxx) |
| Target Capacity | ~6.4 Tbps full-duplex per NPU (inferred) |
| On-Chip Buffer (OCB) | Not publicly confirmed |
| Off-Chip Buffer | HBM3e or HBM4 (generation not confirmed); capacity not confirmed |
| Buffer Model | VOQ (Virtual Output Queueing) |
| Process Node | TSMC 3 nm or N3E (not confirmed) |
| Interface Support | 800G, 1.6T (targeted) |

## Architecture Continuity

Jericho 4 is expected to continue the defining architectural characteristics of the StrataDNX line:

### Two-Tier Buffer (OCB + HBM)

Every Jericho generation has shipped with:
- A small, fast **on-chip SRAM buffer (OCB)** handling non-congested traffic at full line rate
- A large **off-chip HBM pool** absorbing sustained congestion bursts

The pattern across generations:

| Generation | OCB | HBM | Capacity |
|------------|-----|-----|----------|
| Jericho (BCM88670) | ~16 MB | GDDR5 (~4–8 GB) | 0.8 Tbps FD |
| Jericho 2 (BCM88690) | ~32 MB | 8 GB HBM2/2e | 1.6 Tbps FD |
| Jericho 3 (BCM88830) | ~48 MB | Up to 32 GB HBM3 | 3.2 Tbps FD |
| Jericho 4 | TBD | TBD (HBM3e/HBM4) | ~6.4 Tbps FD (inferred) |

If the OCB growth tracks roughly with the doubling of capacity per generation, a Jericho 4 OCB in the range of 64–96 MB would be consistent with the pattern, though this is speculative until Broadcom publishes confirmed figures.

### Virtual Output Queueing (VOQ)

VOQ scheduling is a defining characteristic of the StrataDNX family and is expected to be retained in Jericho 4. See the [Jericho architecture overview](/concepts/broadcom-jericho/) for VOQ mechanics.

## Why Jericho Matters Alongside Tomahawk

The Tomahawk and Jericho families address fundamentally different use cases:

| | Tomahawk 5 (BCM78900) | Jericho 3 (BCM88830) |
|-|----------------------|----------------------|
| Target | Hyperscale spine, AI fabric | Carrier IP core, provider edge |
| Buffer type | On-chip SRAM only | OCB + HBM (two tiers) |
| Max buffer | 165.2 MB | ~32 GB (HBM) |
| Buffer model | Shared pool | VOQ (per-egress queues at ingress) |
| HBM | None | Yes |
| Routing | Limited L3 | Full carrier-grade IP/MPLS |
| Use case | Lossless AI fabric | Large-scale IP core transit |

Jericho 4 extends the lead in total buffer capacity, sustained congestion absorption, and carrier-grade routing depth, at the cost of additional latency and complexity compared to Tomahawk's simpler shared-memory model.

## References

- [Broadcom StrataDNX Family Overview](https://www.broadcom.com/products/ethernet-connectivity/switching/stradadnxa)
- [Broadcom Jericho Architecture](/concepts/broadcom-jericho/) — Jericho and Jericho 2 details
- [Broadcom Jericho 3 Architecture](/concepts/broadcom-jericho3/) — confirmed J3 specifications

## See Also

- [Broadcom Jericho 3 Architecture](/concepts/broadcom-jericho3/) — predecessor with confirmed figures
- [Back to the main buffer table](/)
