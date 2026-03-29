---
title: "Intel Tofino Architecture"
layout: page.njk
description: "Intel Tofino P4-programmable Ethernet switch ASIC family – architecture, buffer behavior, and programming model"
---

## Intel Tofino – Programmable P4 Pipeline

The **Intel Tofino** series represents a fundamentally different approach to switching: **P4-programmable** data planes that allow network operators to define custom packet processing behavior.

### Architecture Overview

| Generation | Max Throughput | Process Node | Key Features |
|------------|----------------|--------------|--------------|
| Tofino 1 | 6.5 Tbps | 28nm | First programmable switch ASIC |
| Tofino 2 | 12.8 Tbps | 16nm | Improved performance, INT support |
| Tofino 3 | 25.6 Tbps | 7nm | 800G support, enhanced telemetry |

### Buffer Architecture

Unlike fixed-function ASICs, Tofino's buffer architecture is **programmable**:

- **Total Buffer**: 16-32 MB on-chip (generation dependent)
- **Allocation**: Defined via P4 primitives and architecture configuration
- **Queue Structure**: Programmable number of queues per port
- **Memory Model**: Shared buffer pool with configurable partitioning

### Key Characteristics

**Programmability:**
- Full P4_16 support for data plane programming
- Custom packet parsing, matching, and action execution
- Runtime reprogrammability without hardware changes

**Telemetry:**
- In-band Network Telemetry (INT) native support
- Real-time buffer occupancy monitoring
- Per-packet latency measurement

**Buffer Behavior:**
- Flexible queue assignment via P4
- Dynamic buffer allocation based on traffic patterns
- Support for lossless fabrics (PFC, ECN)

### Buffer Management

Tofino's buffer is managed through the **Traffic Manager (TM)**:

1. **Ingress Buffering**: Packets buffered before P4 processing
2. **Egress Buffering**: Packets buffered after P4 processing
3. **Queue Mapping**: P4 determines queue assignment
4. **Congestion Management**: Programmable ECN, WRED, tail-drop

### Use Cases

**Datacenter:**
- Custom load balancing algorithms
- Advanced telemetry and monitoring
- Protocol-independent switching

**Cloud Providers:**
- Proprietary protocol support
- Rapid feature deployment
- Multi-tenant isolation

**Research:**
- Novel queueing disciplines
- Experimental congestion control
- Network protocol innovation

### Platforms Using Tofino

| Vendor | Platform | Tofino Gen | Ports |
|--------|----------|------------|-------|
| Arista | 7170T4 | Tofino 2 | 32x 100G |
| Arista | 7170B5 | Tofino 3 | 64x 200G |
| Edgecore | Wedge 100BF-32X | Tofino 2 | 32x 100G |
| Dell | Z9432F-ON | Tofino 2 | 32x 100G |

### Programming Model

```p4
// Example: Simple buffer threshold check
action set_queue_threshold(bit<16> threshold) {
    // Configure queue depth threshold for ECN marking
    // Actual implementation depends on architecture
}
```

### Limitations

- **Buffer Size**: Smaller than dedicated deep-buffer ASICs (Jericho, Qumran)
- **Complexity**: Requires P4 expertise
- **Performance**: Some features impact throughput
- **Toolchain**: Dependent on Intel SDE and P4 compiler

### References

- [Intel Tofino 2 Product Brief](https://www.intel.com/content/www/us/en/products/docs/network-and-edge/tofino-2/tofino-2-brief.html)
- [P4 Language Specification](https://p4.org/p4-spec/docs/P4-16-v1.2.4.html)
- [Arista 7170T Series](https://www.arista.com/en/products/7170t-series)
- [In-band Network Telemetry (INT)](https://p4.org/int/)

## See Also

- [Buffer Fundamentals](/concepts/buffer-fundamentals/)
- [Microburst Handling](/concepts/microburst/)

[← Back to the main buffer table](/)
