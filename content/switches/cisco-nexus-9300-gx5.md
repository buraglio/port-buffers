---
title: "Cisco Nexus 9300-GX5"
layout: page.njk
description: "Buffer notes for Cisco Nexus 9300-GX5 – Silicon One G200 9th generation switching platform"
---

## Cisco Nexus 9300-GX5 – Silicon One G200

The **Cisco Nexus 9300-GX5** is a 9th generation Nexus 9000 switch built on Cisco's **Silicon One G200** ASIC, delivering 3.2 Tbps throughput with unified buffer architecture.

### Buffer Architecture

| Field | Value |
|-------|-------|
| ASIC | Cisco Silicon One G200 |
| Ports | 48x 25G SFP28, 8x 100G QSFP28 |
| RX Queues | 8Q |
| TX Queues | 8Q |
| Total Buffer | 24 MB shared |
| Buffer Model | Unified shared buffer |

### Key Features

**Performance:**
- 3.2 Tbps total throughput
- Ultra-low latency (<600ns)
- Wire-rate on all ports

**Buffer Management:**
- Unified buffer architecture
- Dynamic allocation across ports
- Deep buffer mode support
- Advanced ECN marking

**Quality of Service:**
- 8 queues per port
- Strict priority + DWRR
- Hierarchical QoS
- Per-flow buffering options

### Use Cases

- Datacenter leaf switches
- High-density 25G server connectivity
- AI/ML cluster networking
- Enterprise aggregation

### Comparison with GX4

| Feature | GX4 (G100) | GX5 (G200) |
|---------|------------|------------|
| ASIC | Silicon One G100 | Silicon One G200 |
| Throughput | 2.4 Tbps | 3.2 Tbps |
| Buffer | 16 MB | 24 MB |
| Generation | 8th | 9th |

## See Also

- [Cisco Silicon One Architecture](/concepts/cisco-silicon-one/)
- [Buffer Fundamentals](/concepts/buffer-fundamentals/)

[← Back to the main buffer table](/)
