---
title: "Cisco Silicon One Architecture"
layout: page.njk
description: "Cisco Silicon One G100/G200 – Cisco's merchant silicon for 800G/1.6T datacenter switching"
---

## Cisco Silicon One – 800G/1.6T Switching

**Cisco Silicon One** is Cisco's family of merchant switch ASICs, designed to compete with Broadcom's Tomahawk series. The G100 and G200 generations power the latest Nexus 9000 platforms.

### Architecture Overview

| Generation | Max Throughput | Process Node | Key Features |
|------------|----------------|--------------|--------------|
| G100 | 25.6 Tbps | 7nm | First generation, 800G capable |
| G200 | 51.2 Tbps | 5nm | Enhanced performance, AI/ML optimized |

### Buffer Architecture

Silicon One features a **unified buffer** architecture:

- **Total Buffer**: 16-128 MB (platform dependent)
- **Memory Model**: Fully shared across all ports
- **Queue Structure**: 8 queues per port
- **Allocation**: Dynamic with programmable thresholds

### Key Characteristics

**Performance:**
- Ultra-low latency (<600ns)
- High port density (up to 64x 800G)
- Flexible speed support (1G to 800G)

**Buffer Management:**
- Unified buffer architecture
- Deep buffer mode options
- Advanced congestion management (ECN, PFC)
- Per-port buffer monitoring

**Quality of Service:**
- 8 queues per port
- Strict priority + DWRR scheduling
- Hierarchical QoS support
- Per-flow buffering options

### G100 vs G200

| Feature | G100 | G200 |
|---------|------|------|
| Max Throughput | 25.6 Tbps | 51.2 Tbps |
| Process Node | 7nm | 5nm |
| Buffer Size | 16-32 MB | 24-128 MB |
| Port Speeds | Up to 400G | Up to 800G |
| Power Efficiency | Good | Enhanced |

### Nexus 9000 Integration

Silicon One powers the **8th and 9th generation** Nexus 9000 switches:

**8th Gen (G100):**
- Nexus 9300-GX4: 48x 25G + 8x 100G
- Nexus 9500-GX4: Modular 400G line cards
- Nexus 3400-S32CQ: 32x 100G spine

**9th Gen (G200):**
- Nexus 9300-GX5: 48x 25G + 8x 100G
- Nexus 9500-GX5: Modular 800G line cards
- Nexus 3400-S64D: 64x 400G/800G spine

### Buffer Architecture Details

**Unified Buffer:**
- Single shared pool across all ports
- Dynamic allocation based on demand
- No fixed per-port allocations

**Deep Buffer Mode:**
- Optional configuration for burst absorption
- Increased buffer reservation per port
- Trade-off: reduced total port count

**Congestion Management:**
- Multi-level ECN marking
- Priority Flow Control (PFC)
- Weighted Random Early Detection (WRED)
- Dynamic threshold adjustment

### Use Cases

**Datacenter:**
- Leaf-spine architectures
- High-density 100G/400G/800G
- AI/ML cluster networking

**Service Provider:**
- Metro aggregation
- Network function virtualization
- Multi-tenant platforms

**Enterprise:**
- Campus core
- Datacenter edge
- High-performance computing

### Platforms Using Silicon One

| Platform | Silicon Gen | Ports | Buffer | Use Case |
|----------|-------------|-------|--------|----------|
| Nexus 9300-GX4 | G100 | 48x 25G + 8x 100G | 16 MB | Leaf |
| Nexus 9300-GX5 | G200 | 48x 25G + 8x 100G | 24 MB | Leaf |
| Nexus 9500-GX4 | G100 | Modular 400G | 32 MB/linecard | Spine |
| Nexus 9500-GX5 | G200 | Modular 800G | 64 MB/linecard | Spine |
| Nexus 3400-S32CQ | G100 | 32x 100G | 16 MB | Spine |
| Nexus 3400-S64D | G200 | 64x 400G | 128 MB | Spine |

### Comparison with Competitors

| Feature | Silicon One G200 | Tomahawk 5 | Spectrum-4 |
|---------|------------------|------------|------------|
| Max Throughput | 51.2 Tbps | 51.2 Tbps | 51.2 Tbps |
| Buffer Size | 128 MB | 128 MB | 32 MB |
| Process Node | 5nm | 5nm | 5nm |
| Cisco Integration | Native | Third-party | Third-party |

### References

- [Cisco Silicon One G200 Datasheet](https://www.cisco.com/c/en/us/products/collateral/switches/nexus-9000-series-switches/silicon-one-g200-datasheet.html)
- [Cisco Silicon One G100 Datasheet](https://www.cisco.com/c/en/us/products/collateral/switches/nexus-9000-series-switches/silicon-one-g100-datasheet.html)
- [Nexus 9300-GX5 Datasheet](https://www.cisco.com/c/en/us/products/collateral/switches/nexus-9300-gx5-switches/datasheet-c78-744892.html)
- [Cisco Live: Silicon One Architecture](https://www.cisco.com/c/dam/en/us/solutions/collateral/enterprise-networks/silicon-one-architecture-presentation.pdf)
- [Tolly Group: Nexus 9000 8th Gen](https://www.tolly.com/Results.aspx?id=219123)

## See Also

- [Buffer Fundamentals](/concepts/buffer-fundamentals/)
- [Trident 4 Architecture](/concepts/broadcom-trident4/)
- [Tomahawk 4 Architecture](/concepts/broadcom-tomahawk4/)

[← Back to the main buffer table](/)
