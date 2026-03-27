---
title: "FS N9510 / N9550 / N8610 Series (Broadcom Tomahawk 4)"
layout: page.njk
description: "Buffer notes for FS switches based on Broadcom Tomahawk 4 (BCM56990 / BCM56993)"
---

FS produces four Tomahawk 4-based platforms covering high-density 400G spine and AI/ML fabric deployments. Three models use the full BCM56990 (25.6 Tbps, 64-port); one uses the half-capacity BCM56993 (12.8 Tbps, 32-port).

## Models

| Model | ASIC | Ports | Capacity | Buffer |
|-------|------|-------|----------|--------|
| N9510-64D | BCM56990 (Tomahawk 4) | 64x 400G QSFP-DD | 25.6 Tbps | 113.66 MB |
| N9550-64D | BCM56990 (Tomahawk 4) | 64x 400G QSFP-DD, 2x 10G SFP+ | 25.6 Tbps | 113.66 MB |
| N8610-64D | BCM56990 (Tomahawk 4) | 64x 400G QSFP-DD | 25.6 Tbps | 113.66 MB |
| N8610-32D | BCM56993 (Tomahawk 4) | 32x 400G QSFP-DD, 2x 10G SFP+ | 12.8 Tbps | 56.83 MB |

The N9510-64D and N9550-64D are 1U platforms; the N8610 is a 2U platform offering different airflow and cabling configurations. All BCM56990 models carry exactly 113.66 MB of buffer — the precise on-die SRAM figure that vendors round to "~114 MB" in marketing materials.

## Buffer Architecture

### BCM56990 models (N9510-64D, N9550-64D, N8610-64D)

The BCM56990 carries **113.66 MB of on-chip SRAM** presented as a fully shared packet buffer. Broadcom describes this as providing "up to 10x burst absorption versus alternatives." All 64 400G ports share access to the entire pool simultaneously; no bandwidth is stranded in idle pipeline slices.

The 113.66 MB figure is confirmed from the FS N9510-64D official product page and is consistent across all BCM56990-based platforms.

### BCM56993 model (N8610-32D)

The BCM56993 is the half-bandwidth variant of the Tomahawk 4 family, carrying **56.83 MB of on-chip SRAM** — exactly half of the BCM56990's 113.66 MB, consistent with the proportional reduction in bandwidth (12.8 Tbps vs. 25.6 Tbps). The buffer architecture is identical: fully shared, unified pool accessible to all 32 400G ports.

### Key features across all models

- 8 traffic classes (queues) per port
- Fully shared buffer with MMU-controlled dynamic thresholding
- Native 400G support (8 lanes × 50G PAM4) without external gearboxes
- IP routing and tunneling support (new capability introduced with Tomahawk 4 vs. earlier Tomahawk generations)
- ~75% lower power per gigabit versus prior Tomahawk generations

## References

- [FS N9510-64D Product Page](https://www.fs.com/products/149853.html) — buffer figure (113.66 MB) confirmed here
- [FS N9550-64D Product Page](https://www.fs.com/products/184231.html)
- [FS N8610-64D Product Page](https://www.fs.com/products/309789.html)
- [FS N8610-32D Product Page](https://www.fs.com/products/309787.html)

## See Also

- [Broadcom Tomahawk 4 Architecture](/concepts/broadcom-tomahawk4/) — ASIC-level buffer details and BCM56990 vs. BCM56993 comparison
- [Back to the main buffer table](/)
