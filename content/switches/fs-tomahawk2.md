---
title: "FS N8550-64C / N8560-64C (Broadcom Tomahawk 2)"
layout: page.njk
description: "Buffer notes for the FS N8550-64C and N8560-64C (Broadcom Tomahawk 2, BCM56970)"
---

The FS **N8550-64C** and **N8560-64C** are 1RU bare-metal switches built on the **Broadcom BCM56970 (Tomahawk 2)** ASIC, targeting dense 100G spine/fabric deployments.

| Field | Value |
|-------|-------|
| ASIC | Broadcom BCM56970 (Tomahawk 2) |
| Ports | 64x 100G QSFP28 |
| Switching Capacity | 6.4 Tbps |
| Total Buffer | 42 MB |
| Architecture | Unified shared memory (on-chip SRAM) |
| TX Queues | 8 per port |

## Models

| Model | Notes |
|-------|-------|
| N8550-64C | First-generation platform |
| N8560-64C | Second-generation platform (same ASIC, updated hardware design) |

## Buffer Architecture

Tomahawk 2 (BCM56970) introduced a **42 MB unified shared buffer** — a significant improvement over the original Tomahawk's four separate 4 MB pipeline slices. The entire 42 MB pool is accessible to all 64 ports simultaneously, which eliminates the "stranded buffer" problem of the first-generation Tomahawk.

The Tomahawk 2 represented Broadcom's first unification of the Tomahawk buffer architecture, enabling better microburst absorption across the full port complement. This architecture was carried forward and expanded in Tomahawk 3 (64 MB) and Tomahawk 4 (~113 MB).

## References

- [FS N8550-64C Product Page](https://www.fs.com/products/72427.html)
- [FS N8560-64C Product Page](https://www.fs.com/products/190907.html)

## See Also

- [Broadcom Trident 3 Architecture](/concepts/broadcom-trident3/) — contemporary Trident-line chip at 32 MB
- [Back to the main buffer table](/)
