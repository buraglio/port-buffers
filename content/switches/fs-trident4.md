---
title: "FS N8520-32D / N8550-24CD8D (Broadcom Trident 4)"
layout: page.njk
description: "Buffer notes for the FS N8520-32D and N8550-24CD8D (Broadcom Trident 4)"
---

FS produces two Trident 4-based platforms covering 400G enterprise spine (N8520-32D) and 200G-native AI fabric (N8550-24CD8D) deployments. The two models use different Trident 4 sub-variants with different buffer capacities.

## Models

| Model | ASIC | Ports | Capacity | Buffer |
|-------|------|-------|----------|--------|
| N8520-32D | BCM56880 (Trident 4 X11) | 32x 400G QSFP-DD | 12.8 Tbps | 132 MB |
| N8550-24CD8D | BCM56780 (Trident 4 X9) | 24x 200G QSFP56, 8x 400G QSFP-DD | ~8 Tbps | 82 MB |

## Buffer Architecture

### N8520-32D — BCM56880 (Trident 4 X11)

The flagship Trident 4 variant carries **132 MB of on-chip SRAM** in a single unified shared pool. This is not HBM or external DRAM — the entire 132 MB is embedded in the monolithic 7 nm die. The 4x increase over Trident 3's 32 MB is enabled by TSMC's N7HPC process node, which approximately quadrupled achievable on-die SRAM density versus the 16 nm node.

The N8520-32D uses this silicon for 32-port 400G deployments in enterprise data center spine and DC-edge roles.

### N8550-24CD8D — BCM56780 (Trident 4 X9)

The BCM56780 is a 200G-native variant of the Trident 4 family with **82 MB of on-chip SRAM**. The port configuration (24x 200G + 8x 400G) reflects a design optimized for AI/ML backend fabrics where 200G is the dominant port speed. This chip carries approximately 62% of the X11's buffer capacity.

The unified buffer architecture is identical in principle to the X11: all 82 MB is accessible to all ports simultaneously under MMU-controlled dynamic thresholding.

Both switches support the Trident 4's fully compiler-programmable P4-native pipeline, BroadView Gen4 telemetry, Latency-Based ECN, and Elephant Flow detection.

## References

- [FS N8520-32D Product Page](https://www.fs.com/products/309269.html)
- [FS N8550-24CD8D Product Page](https://www.fs.com/specials/200g-picos-data-center-switch-192.html)

## See Also

- [Broadcom Trident 4 Architecture](/concepts/broadcom-trident4/) — ASIC-level buffer details
- [Back to the main buffer table](/)
