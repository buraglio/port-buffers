---
title: "Marvell Teralynx Architecture"
layout: page.njk
description: "Marvell Teralynx Ethernet switch silicon family – architecture, buffer design, and deployment scenarios"
---

## Marvell Teralynx – Ethernet Switch Silicon

**Marvell Teralynx** is a family of high-performance Ethernet switch ASICs designed for datacenter, enterprise, and service provider applications. Teralynx provides an alternative to Broadcom's merchant silicon dominance.

### Architecture Overview

| Generation | Max Throughput | Process Node | Key Features |
|------------|----------------|--------------|--------------|
| Teralynx 5 | 1.6 Tbps | 28nm | First generation |
| Teralynx 6 | 3.2 Tbps | 16nm | Improved power efficiency |
| Teralynx 7 | 6.4 Tbps | 7nm | Deep buffer, advanced QoS |
| Teralynx 8 | 12.8 Tbps | 5nm | 800G support, AI/ML optimized |

### Buffer Architecture

Teralynx features a **unified shared buffer** architecture:

- **Total Buffer**: 16-32 MB on-chip (generation dependent)
- **Memory Model**: Fully shared across all ports
- **Queue Structure**: 8-12 queues per port
- **Allocation**: Dynamic based on traffic patterns

### Key Characteristics

**Performance:**
- Ultra-low latency (<500ns cut-through)
- High port density (up to 128x 100G)
- Flexible speed support (1G to 800G)

**Buffer Management:**
- Dynamic buffer allocation
- Per-port and per-queue thresholds
- Advanced congestion management (ECN, PFC)

**Quality of Service:**
- Hierarchical QoS (8+ levels)
- Strict priority + weighted scheduling
- Per-flow buffering options

### Teralynx 7/8 Deep Buffer

The latest generations feature enhanced buffer capabilities:

| Feature | Teralynx 7 | Teralynx 8 |
|---------|------------|------------|
| Total Buffer | 24 MB | 32 MB |
| Max per-port | 2 MB | 4 MB |
| Queue Count | 8 per port | 12 per port |
| ECN Support | Yes | Enhanced |
| PFC Support | Yes | Yes |

### Use Cases

**Cloud Datacenters:**
- High-density 100G/400G leaf-spine
- Cost-effective alternative to Broadcom
- SONiC compatibility

**Enterprise:**
- Campus core/aggregation
- Datacenter edge
- High-performance computing

**Service Providers:**
- Metro Ethernet
- Network function virtualization
- Multi-tenant platforms

### Platforms Using Teralynx

| Vendor | Platform | Teralynx Gen | Ports | Buffer |
|--------|----------|--------------|-------|--------|
| FS | N8560-32C | Teralynx 7 | 32x 100G | 16 MB |
| Edgecore | AS7326-56X | Teralynx 8 | 48x 25G + 8x 100G | 24 MB |
| Celestica | Seastone 3 | Teralynx 8 | 32x 100G | 32 MB |
| UfiSpace | S9300-32D | Teralynx 7 | 32x 100G | 16 MB |

### Comparison with Competitors

| Feature | Teralynx 8 | Tomahawk 4 | Silicon One G200 |
|---------|------------|------------|------------------|
| Max Throughput | 12.8 Tbps | 25.6 Tbps | 25.6 Tbps |
| Buffer Size | 32 MB | ~113.66 MB | 64 MB |
| Process Node | 5nm | 7nm | 7nm |
| Power Efficiency | High | Medium | High |

### References

- [Marvell Teralynx 8](https://www.marvell.com/products/switching-silicon/teralynx-8.html)
- [Marvell Teralynx 7 Product Brief](https://www.marvell.com/content/dam/marvell/en/public-collateral/switching-silicon/marvell-teralynx-7-product-brief.pdf)
- [OCP Accepted Solutions](https://www.opencompute.org/projects/networking)

## See Also

- [Buffer Fundamentals](/concepts/buffer-fundamentals/)
- [Trident 4 Architecture](/concepts/broadcom-trident4/)

[← Back to the main buffer table](/)
