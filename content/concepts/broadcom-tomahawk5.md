---
title: "Broadcom Tomahawk 5 Architecture"
layout: page.njk
description: "ASIC-level buffer details for the Broadcom Tomahawk 5 (BCM78900 / BCM78902)"
---

The **Broadcom Tomahawk 5** (BCM78900 / BCM78902) is the fifth generation of Broadcom's Tomahawk merchant silicon line, targeting 800G-era hyperscale spine and AI/ML fabric deployments. It represents the shift from 400G QSFP-DD to 800G OSFP as the dominant high-density port format.

## Variants

| Chip | Capacity | Ports | Buffer | Process |
|------|----------|-------|--------|---------|
| BCM78900 | 51.2 Tbps | 64x 800G (OSFP) | 165.2 MB | TSMC N5 |
| BCM78902 | 25.6 Tbps | 32x 800G (OSFP) | ~83 MB (inferred) | TSMC N5 |

The BCM78902 is the half-bandwidth Tomahawk 5 variant. Its buffer capacity has not been confirmed from an official Broadcom datasheet; the ~83 MB figure is inferred from the established proportional relationship between the full and half-bandwidth variants in prior generations (BCM56990 = 113.66 MB; BCM56993 = exactly 56.83 MB).

## Buffer Architecture

Tomahawk 5 continues the **fully unified shared-buffer** model introduced with Tomahawk 2. All 165.2 MB of on-chip SRAM in the BCM78900 is accessible as a single pool across all 64 800G ports simultaneously. There is no per-port or per-pipeline partitioning — the Memory Management Unit (MMU) dynamically allocates the entire pool based on instantaneous demand using a WRED/dynamic thresholding scheme.

The 165.2 MB on-chip figure represents approximately a **46% increase** over the Tomahawk 4's 113.66 MB, enabled by process node advancement from TSMC 7 nm (N7HPC) to TSMC 5 nm (N5). No HBM or external DRAM is used — the entire buffer is embedded on-die.

### Comparison to prior Tomahawk generations

| Generation | ASIC | Capacity | Buffer | Process |
|------------|------|----------|--------|---------|
| Tomahawk | BCM56960 | 6.4 Tbps | 16 MB (4 × 4 MB, isolated pipes) | 16 nm |
| Tomahawk 2 | BCM56970 | 6.4 Tbps | 42 MB (unified) | 16 nm |
| Tomahawk 3 | BCM56980 | 12.8 Tbps | 64 MB (unified) | 7 nm |
| Tomahawk 4 | BCM56990 | 25.6 Tbps | 113.66 MB (unified) | 7 nm |
| **Tomahawk 5** | **BCM78900** | **51.2 Tbps** | **165.2 MB (unified)** | **5 nm** |

## Port Architecture

The Tomahawk 5 introduces **OSFP** (Octal Small Form-factor Pluggable) as the primary 800G port format, replacing QSFP-DD from Tomahawk 4. OSFP supports 800G via:

- 8 lanes × 100G PAM4 (800G native), or
- 2 lanes × 400G PAM4 (breakout to 2x 400G)

This enables single-port 800G connectivity without external gearboxes when paired with 800G SR8/DR8/FR8 or 2x 400G optics.

## Queue Model

Like Tomahawk 4, Tomahawk 5 provides 8 traffic classes (queues) per port with MMU-controlled dynamic thresholding. The unified pool architecture means a port with 8 active queues can draw from the full 165.2 MB if all other ports are idle, providing maximum burst absorption capacity.

## Forwarding Capabilities

Tomahawk 5 extends the routing capabilities introduced in Tomahawk 4 (which added L3 IP unicast/multicast), adding enhanced support for:

- VXLAN encap/decap
- SR-MPLS
- Enhanced ECMP and weighted ECMP
- BroadView Gen5 telemetry and in-band telemetry (INT)

## Known Deployments

- FS N9600-64OD (BCM78900, 165.2 MB confirmed from FS.com blog)
- FS N8650-32OD (BCM78902, buffer inferred)

## References

- [FS Blog — Tomahawk 5 Switch Launch](https://www.fs.com/uk/blog/fs-unveils-512t-400g-and-800g-ethernet-switches-powered-by-broadcom-tomahawk-5-10109.html)
- [FS N9600-64OD Product Page](https://www.fs.com/products/250955.html)

## See Also

- [Broadcom Tomahawk 4 Architecture](/concepts/broadcom-tomahawk4/) — predecessor generation
- [FS Tomahawk 5 Switches](/switches/fs-tomahawk5/) — N9600-64OD and N8650-32OD
- [Back to the main buffer table](/)
