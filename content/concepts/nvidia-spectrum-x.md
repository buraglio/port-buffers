---
title: "NVIDIA Spectrum-X Architecture"
layout: page.njk
description: "NVIDIA Spectrum-X Ethernet platform – Spectrum ASIC evolution, AI fabric optimization, and buffer architecture"
---

## NVIDIA Spectrum-X – AI/Ethernet Fabric

**NVIDIA Spectrum-X** is an accelerated Ethernet platform designed for AI/ML workloads and high-performance datacenter networking. It builds on the Mellanox Spectrum legacy with significant enhancements.

### Architecture Evolution

| Generation | ASIC | Max Throughput | Key Features |
|------------|------|----------------|--------------|
| Spectrum-1 | SX1000 | 3.2 Tbps | Original Mellanox design |
| Spectrum-2 | SN2000 | 4 Tbps | RoCE v2 optimization |
| Spectrum-3 | SN3000 | 6.4 Tbps | SHARP in-network computing |
| Spectrum-4 | SN4000 | 51.2 Tbps | AI fabric, 800G Ethernet |
| Spectrum-X GS | GS4000 | 51.2 Tbps | GPUDirect, AI optimization |

### Buffer Architecture

Spectrum-X features a **shared buffer** architecture optimized for RDMA and AI traffic:

- **Total Buffer**: 12-64 MB (generation dependent)
- **Memory Model**: Fully shared with dynamic allocation
- **Queue Structure**: 12-16 queues per port
- **Special Features**: RoCE buffer optimization, adaptive routing

### Key Characteristics

**AI/ML Optimization:**
- GPUDirect RDMA support
- In-network aggregation (Spectrum-X GS)
- Collective communication acceleration
- Deterministic latency

**RoCE Enhancement:**
- Advanced congestion control (DCQCN)
- Adaptive routing for load balancing
- Lossless fabric support (PFC, ECN)
- Buffer isolation for RoCE traffic

**Performance:**
- Ultra-low latency (<400ns)
- High port density (up to 128x 400G)
- 800G Ethernet support (Spectrum-4)

### Spectrum-X GS (AI Fabric)

The **Spectrum-X GS** variant is specifically designed for AI clusters:

| Feature | Spectrum-4 | Spectrum-X GS |
|---------|------------|---------------|
| Total Buffer | 32 MB | 64 MB |
| Queue Count | 12 per port | 16 per port |
| AI Optimization | Basic | Advanced |
| GPUDirect | Yes | Enhanced |
| In-Network Aggregation | No | Yes |

### Buffer Management

Spectrum-X buffer features:

1. **Dynamic Allocation**: Traffic-adaptive buffer sharing
2. **RoCE Buffer Pools**: Dedicated buffers for RDMA traffic
3. **Congestion Control**: Multi-level ECN, PFC
4. **Adaptive Routing**: Load-aware path selection

### Use Cases

**AI/ML Clusters:**
- GPU interconnect fabrics
- Distributed training workloads
- High-bandwidth, low-latency requirements

**Cloud Datacenters:**
- RoCE-based storage networks
- High-performance compute clusters
- Multi-tenant cloud infrastructure

**Enterprise:**
- Converged Ethernet/Storage
- High-performance computing
- Real-time analytics

### Platforms Using Spectrum-X

| Vendor | Platform | Spectrum Gen | Ports | Buffer |
|--------|----------|--------------|-------|--------|
| NVIDIA | SN2010 | Spectrum-2 | 40x 100G | 12 MB |
| NVIDIA | SN3700 | Spectrum-3 | 64x 100G | 16 MB |
| NVIDIA | SN4600C | Spectrum-4 | 64x 400G | 32 MB |
| NVIDIA | BlueField-3 | Spectrum-3 | 2x 100G/200G | 8 MB |
| NVIDIA | Spectrum-X GS | GS4000 | 64x 400G | 64 MB |

### Comparison with Competitors

| Feature | Spectrum-4 | Tomahawk 4 | Silicon One G200 |
|---------|------------|------------|------------------|
| Max Throughput | 51.2 Tbps | 25.6 Tbps | 25.6 Tbps |
| Buffer Size | 32 MB | 132 MB | 64 MB |
| RoCE Optimization | Advanced | Basic | Basic |
| AI Features | Yes | No | Limited |

### BlueField DPU Integration

**BlueField-3 DPU** combines Spectrum ASIC with ARM processors:

- **Switch Fabric**: Spectrum-3 based
- **Compute**: ARM Cortex-A78 cores
- **Memory**: 32 GB DDR4
- **Use Case**: SmartNIC, DPU, infrastructure offload

### References

- [NVIDIA Spectrum-4](https://www.nvidia.com/en-us/networking/spectrum-4-ethernet-switch-silicon/)
- [NVIDIA Spectrum-X Platform](https://www.nvidia.com/en-us/networking/spectrum-x-ethernet-platform/)
- [NVIDIA BlueField-3 DPU](https://www.nvidia.com/en-us/networking/products/bluefield-dpu/)
- [Spectrum-3 Datasheet](https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/documents/datasheet-spectrum-3-ethernet-switch-silicon.pdf)

## See Also

- [Buffer Fundamentals](/concepts/buffer-fundamentals/)
- [Microburst Handling](/concepts/microburst/)

[← Back to the main buffer table](/)
