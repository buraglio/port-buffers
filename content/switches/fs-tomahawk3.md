---
title: "FS N9500-32D / N9550-32D (Broadcom Tomahawk 3)"
layout: page.njk
description: "Buffer notes for the FS N9500-32D and N9550-32D (Broadcom Tomahawk 3, BCM56980)"
---

The FS **N9500-32D** and **N9550-32D** are 1RU bare-metal switches built on the **Broadcom BCM56980 (Tomahawk 3)** ASIC, targeting 400G spine and AI/ML fabric deployments at 12.8 Tbps.

| Field | Value |
|-------|-------|
| ASIC | Broadcom BCM56980 (Tomahawk 3) |
| Switching Capacity | 12.8 Tbps |
| Total Buffer | 64 MB |
| Architecture | Unified shared memory (on-chip SRAM) |
| TX Queues | 8 per port |

## Models

| Model | Ports | Notes |
|-------|-------|-------|
| N9500-32D | 32x 400G QSFP-DD | Bare-metal ToS platform |
| N9550-32D | 32x 400G QSFP-DD, 2x 10G SFP+ | Adds out-of-band management port |

## Buffer Architecture

Tomahawk 3 (BCM56980) carries a **64 MB unified shared buffer**, doubling the Tomahawk 2's 42 MB while eliminating the segmented-pipe architecture of older Tomahawk generations. Broadcom describes this as providing "3x to 5x higher incast absorption" compared to prior architectures.

The centralized MMU provides dynamic thresholding across all 32 400G ports. Unlike the first-generation Tomahawk's four isolated 4 MB slices, any port can access the full 64 MB pool when its neighbors are idle, making the chip well-suited for the bursty all-to-all traffic patterns of GPU cluster interconnects.

The N9500-32D and N9550-32D are functionally identical in terms of switching capacity and buffer; the N9550 adds dedicated out-of-band management connectivity.

## References

- [FS N9500-32D Product Page](https://www.fs.com/products/166505.html)
- [FS N9550-32D Product Page](https://www.fs.com/products/184230.html)

## See Also

- [Broadcom Tomahawk 4 Architecture](/concepts/broadcom-tomahawk4/) — successor at 25.6 Tbps with ~114 MB buffer
- [Back to the main buffer table](/)
