---
title: "Broadcom Tomahawk 5 Architecture"
layout: page.njk
description: "Broadcom Tomahawk 5 (BCM56995) – 51.2 Tbps ultra-high density switching for 800G Ethernet"
---

## Broadcom Tomahawk 5 – 51.2 Tbps Ultra-High Density

**Broadcom Tomahawk 5** (BCM78900 / BCM78902) is the fifth generation of Broadcom's Tomahawk merchant silicon line, targeting 800G-era hyperscale spine and AI/ML fabric deployments.

### Variants

| Chip | Capacity | Ports | Buffer | Process |
|------|----------|-------|--------|---------|
| BCM78900 | 51.2 Tbps | 64x 800G (OSFP) | 165.2 MB | TSMC N5 |
| BCM78902 | 25.6 Tbps | 32x 800G (OSFP) | ~83 MB (inferred) | TSMC N5 |

The BCM78902 is the half-bandwidth variant; its buffer capacity is inferred from the proportional relationship established across prior Tomahawk generations.

### Buffer Architecture

Tomahawk 5 continues the **fully unified shared-buffer** model. All 165.2 MB of on-chip SRAM in the BCM78900 is accessible as a single pool across all 64 800G ports simultaneously. There is no per-port or per-pipeline partitioning — the MMU dynamically allocates the entire pool based on instantaneous demand using WRED/dynamic thresholding. No HBM or external DRAM is used.

- **Total Buffer (BCM78900)**: 165.2 MB on-chip SRAM
- **Memory Model**: Fully unified shared pool
- **Queue Structure**: 8 queues per port
- **Allocation**: Dynamic with WRED/threshold control

### Key Characteristics

**Performance:**
- Ultra-low latency (<500ns)
- Highest port density (64x 800G OSFP)
- Flexible speed support (10G to 800G)

**Buffer Management:**
- ~46% larger buffer vs. Tomahawk 4 (113.66 MB → 165.2 MB)
- Dynamic buffer allocation
- Advanced congestion management (ECN, PFC, DCQCN)
- BroadView Gen5 telemetry and in-band telemetry (INT)

**AI/ML Optimization:**
- Optimized for AI cluster traffic patterns
- Support for collective communication
- Low-latency RDMA (RoCE v2)
- Adaptive routing for load balancing

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
