---
title: "Broadcom Trident 3 (BCM56870 Series)"
layout: page.njk
description: "Architecture notes on the Broadcom Trident 3 merchant silicon switch ASIC"
---

**Announced:** June 14, 2017

The **Broadcom StrataXGS Trident 3** is a merchant silicon Ethernet switch ASIC family targeting data center top-of-rack and spine deployments at 25G, 50G, and 100G port speeds. It introduced a fundamentally redesigned buffer architecture compared to its predecessors, replacing the segmented per-slice memory model with a single unified shared pool.

## Part Numbers and Variants

| Variant | Part Number | Bandwidth | Max Ports |
|---------|-------------|-----------|-----------|
| X7 | BCM56870 | 3.2 Tbps | 32x 100G or 128x 25G |
| X5 | BCM56770 | 2.0 Tbps | 20x 100G or 128x 25G |

Both variants share the same 32 MB unified buffer. The BCM56870 is the primary high-density spine variant; the BCM56770 targets mid-range access/ToR deployments.

**Process node:** 16 nm FinFET

## Buffer Architecture

The Trident 3 carries **32 MB of on-chip SRAM**, organized as a single fully shared pool accessible to all ports simultaneously. This is the most significant architectural change from the Trident II, which divided its 12 MB buffer into per-pipeline slices that could not share memory across slice boundaries.

Broadcom claimed "8x higher network burst absorption" versus the prior generation at launch — a figure that reflects the combination of the larger total buffer and the elimination of per-slice fragmentation that left memory stranded in lightly loaded slices while congested slices dropped packets.

The Memory Management Unit (MMU) uses dynamic thresholding: ports do not have hard-reserved buffer allocations by default. Instead, the pool expands to serve whichever ports are congested, subject to configurable maximum thresholds per queue and per port. Vendors can partition the pool into dedicated and dynamic regions via software (e.g., Juniper's 25%/75% dedicated/dynamic split on the QFX5120), but the underlying silicon presents a flat unified memory space.

Cell size on Trident 3 is 256 bytes.

## Key Features vs. Trident II

- Unified 32 MB shared buffer (vs. segmented 12 MB with per-slice limits)
- **FleXGS programmable pipeline** — a 5-stage pipeline (3 ingress, 2 egress) with P4-influenced programmability; allows custom match-action tables without an FPGA
- **BroadView Gen3 telemetry** — real-time microburst detection, in-band and out-of-band streaming telemetry, Buffer Statistics Tracking (BST)
- Hardware tunnel offload: VXLAN, GENEVE, NSH, MPLS
- 3x ACL table scale vs. Trident II
- PCIe Gen3 ×4 host interface (5x faster than Trident II's host bus)
- Full backward compatibility with Trident II/II+ software stacks

## Switches Using Trident 3

- [Arista 7050X3 Series](/switches/arista-7050x3/) — 32 MB fully shared
- [Juniper QFX5120 Series](/switches/juniper-qfx5120/) — 32 MB, 25% dedicated / 75% dynamic split
- [Aruba CX 8325 Series](/switches/aruba-cx-8325/) — 32 MB, three configurable lossless QoS pools
- [Aruba CX 8360 Series](/switches/aruba-cx-8360/) — 32 MB, single fixed QoS pool

## See Also

- [Trident II Architecture](/concepts/trident-ii/) — the predecessor with 12 MB segmented buffer
- [Broadcom Trident 4](/concepts/broadcom-trident4/) — successor at 7 nm with 132 MB buffer
- [Summary: Buffer Sizing](/summary/)
- [Back to the main buffer table](/)
