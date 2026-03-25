---
title: "Nokia 7250 IXR"
layout: page.njk
description: "Buffer notes for the Nokia 7250 IXR aggregation and DC-edge router"
---

The Nokia 7250 IXR uses **merchant silicon from the Broadcom Jericho/Qumran family**, positioning it as a low-latency, high-throughput aggregation and data center edge platform.

| Field | Value |
|-------|-------|
| Total Buffer | Moderate (shared pool, varies by ASIC) |
| Buffer Model | Shared + VOQ (Virtual Output Queues) |
| Silicon | Broadcom Jericho/Qumran family |
| Target Interfaces | 100G / 400G |
| Target Role | Aggregation, DC edge |

## Buffer Architecture

### VOQ (Virtual Output Queue)
Packets are queued per **egress destination** rather than per ingress port. This eliminates head-of-line blocking — a slow or congested output port cannot stall traffic destined for a healthy port.

### Shared Buffer Pool
Memory is dynamically allocated across ports. The total pool is smaller than FP-based systems (Nokia 7750 SR) but is used efficiently through statistical multiplexing.

### Depth Profile
Shallow-to-moderate by design. The 7250 IXR prioritizes **low latency and high throughput** over sustained burst absorption.

## What It Handles Well

- Microbursts of limited duration
- East-west data center traffic patterns
- 100G / 400G high-density aggregation

## Limitations vs FP-based platforms

- Less effective under sustained congestion
- Reduced headroom under heavy oversubscription
- Smaller total buffer than 7750 SR or 7730 SXR line cards

See the [Nokia Access/Aggregation architecture page](/concepts/nokia-access-agg/) for cross-platform comparison.

[← Back to the main buffer table](/)
