---
title: "FS Trident 3 Series (N5570 / N5850 / N8550 / N8560)"
layout: page.njk
description: "Buffer notes for FS switches based on Broadcom Trident 3 (BCM56870 / BCM56873 / BCM56771)"
---

FS produces six Trident 3-based switch platforms covering access (10G/25G ToR) through spine (100G) deployments. All share the **32 MB unified shared buffer** of the Broadcom Trident 3 ASIC.

## Models

| Model | ASIC | Ports | Capacity | Buffer |
|-------|------|-------|----------|--------|
| N5570-48S6C | BCM56771 (Trident 3 X5) | 48x 10G SFP+, 6x 100G QSFP28 | 1.08 Tbps | 32 MB |
| N5850-48X6C | BCM56771 (Trident 3 X5) | 48x 10G RJ45, 6x 100G QSFP28 | 1.08 Tbps | 32 MB |
| N8550-32C | BCM56870 (Trident 3 X7) | 32x 100G QSFP28, 2x 10G SFP+ | 3.2 Tbps | 32 MB |
| N8550-48B8C | BCM56873 (Trident 3) | 48x 25G SFP28, 8x 100G QSFP28, 2x 10G SFP+ | 2.0 Tbps | 32 MB |
| N8560-32C | BCM56870 (Trident 3 X7) | 32x 100G QSFP28, 2x 10G SFP+ | 3.2 Tbps | 32 MB |
| N8560-48BC | BCM56873 (Trident 3) | 48x 25G SFP28, 8x 100G QSFP28, 2x 10G SFP+ | 2.0 Tbps | 32 MB |

The N8550 and N8560 lines target the same roles (spine/leaf at 100G and 25G) but the N8560 is a newer platform generation with updated hardware design.

## Buffer Architecture

All six switches use Broadcom's **32 MB unified on-chip SRAM** introduced with Trident 3. Unlike the segmented per-pipe buffer of the original Tomahawk, the entire 32 MB pool is accessible to all ports simultaneously under the control of a centralized MMU. Dynamic thresholding allows congested ports and queues to claim memory from the shared pool up to configurable maximums.

The X5-tier chips (BCM56771, used in N5570/N5850 access platforms) carry the same 32 MB buffer as the X7-tier BCM56870 — the difference is switching bandwidth (2.0 Tbps vs. 3.2 Tbps), not buffer capacity.

8 traffic classes (queues) are supported per port. The FleXGS programmable pipeline supports P4-influenced custom forwarding, and BroadView Gen3 telemetry enables real-time microburst visibility.

## References

- [FS N5570-48S6C Product Page](https://www.fs.com/products/169133.html)
- [FS N8550-32C Product Page](https://www.fs.com/products/205269.html)
- [FS N8550-48B8C Product Page](https://www.fs.com/products/205267.html)
- [FS N8560-32C Product Page](https://www.fs.com/products/190908.html)
- [FS N8560-48BC Product Page](https://www.fs.com/products/191807.html)

## See Also

- [Broadcom Trident 3 Architecture](/concepts/broadcom-trident3/) — ASIC-level buffer details
- [Back to the main buffer table](/)
