---
title: "FS N9600-64OD / N8650-32OD (Broadcom Tomahawk 5)"
layout: page.njk
description: "Buffer notes for the FS N9600-64OD and N8650-32OD (Broadcom Tomahawk 5)"
---

The FS **N9600-64OD** and **N8650-32OD** are 800G-era bare-metal switches built on the **Broadcom Tomahawk 5** ASIC (BCM78900 / BCM78902), targeting 51.2 Tbps and 25.6 Tbps AI/ML fabric and hyperscale spine deployments. Both use the **OSFP** (Octal Small Form-factor Pluggable) transceiver form factor for 800G optics.

## Models

| Model | ASIC | Ports | Capacity | Buffer |
|-------|------|-------|----------|--------|
| N9600-64OD | BCM78900 (Tomahawk 5) | 64x 800G OSFP, 2x 25G SFP28 | 51.2 Tbps | 165.2 MB |
| N8650-32OD | BCM78902 (Tomahawk 5) | 32x 800G OSFP, 2x 25G SFP28 | 25.6 Tbps | ~83 MB (inferred) |

**Data quality note:** The N9600-64OD buffer figure (165.2 MB) is sourced from an FS.com blog publication. The N8650-32OD buffer is inferred by analogy — BCM78902 is the half-capacity Tomahawk 5 variant, and if the same proportional relationship holds as between BCM56990 (113.66 MB) and BCM56993 (56.83 MB), then BCM78902 carries approximately half of 165.2 MB (~82–83 MB). This figure has not been confirmed from an official product datasheet.

## Buffer Architecture

The Tomahawk 5 family continues Broadcom's unified shared-buffer architecture. The BCM78900 carries **165.2 MB of on-chip SRAM** as a single fully shared pool accessible to all 64 800G ports simultaneously. This represents approximately a 46% increase over the Tomahawk 4's 113.66 MB.

The OSFP form factor supports 800G via 8 lanes of 100G PAM4 or 2 lanes of 400G PAM4, enabling native 800G without external gearboxes when paired with appropriate optics.

The BCM78902 (N8650-32OD) is the half-bandwidth variant, targeting deployments requiring 32-port 800G density at 25.6 Tbps.

## References

- [FS N9600-64OD Product Page](https://www.fs.com/products/250955.html)
- [FS N8650-32OD Product Page](https://www.fs.com/products/309785.html)
- [FS Blog — Tomahawk 5 Switch Launch](https://www.fs.com/uk/blog/fs-unveils-512t-400g-and-800g-ethernet-switches-powered-by-broadcom-tomahawk-5-10109.html)

## See Also

- [Broadcom Tomahawk 5 Architecture](/concepts/broadcom-tomahawk5/) — ASIC-level buffer and architecture details
- [Broadcom Tomahawk 4 Architecture](/concepts/broadcom-tomahawk4/) — predecessor generation
- [Back to the main buffer table](/)
