---
title: "Arista 7170T Series"
layout: page.njk
description: "Buffer notes for Arista 7170T series – Intel Tofino 2 programmable switching platform"
---

## Arista 7170T Series – Intel Tofino 2

The **Arista 7170T** series is built on the **Intel Tofino 2** programmable ASIC, offering P4-programmable data planes with flexible buffer management.

### Buffer Architecture

| Field | Value |
|-------|-------|
| ASIC | Intel Tofino 2 T20S1 |
| Ports | 32x 100G QSFP28 or 64x 50G SFP56 |
| RX Queues | Programmable (via P4) |
| TX Queues | Programmable (via P4) |
| Total Buffer | 16 MB shared |
| Buffer Model | Programmable allocation |

### Key Features

**Programmability:**
- Full P4_16 support
- Runtime reprogrammability
- Custom packet processing pipelines

**Buffer Management:**
- Flexible queue configuration via P4
- Dynamic buffer allocation
- Support for lossless fabrics (PFC, ECN)

**Telemetry:**
- In-band Network Telemetry (INT)
- Real-time buffer monitoring
- Per-flow statistics

### Use Cases

- Custom load balancing algorithms
- Advanced network telemetry
- Research and development
- Multi-tenant cloud platforms

### Models

| Model | Ports | Buffer | Notes |
|-------|-------|--------|-------|
| 7170T4 | 32x 100G | 16 MB | Standard configuration |
| 7170T8 | 64x 50G | 16 MB | Higher density |

## See Also

- [Intel Tofino Architecture](/concepts/intel-tofino/)
- [Buffer Fundamentals](/concepts/buffer-fundamentals/)

[← Back to the main buffer table](/)
