---
title: "Nokia 7750 SR — FP4 and FP5"
layout: page.njk
description: "Buffer notes for the Nokia 7750 SR platform with FP4 and FP5 forwarding plane ASICs"
---

The Nokia 7750 SR is a carrier-grade core/edge router built on Nokia's proprietary **FP (Forwarding Plane)** ASIC family. Both FP4 and FP5 generations use a **fully shared packet memory** architecture with a dedicated pre-buffer stage.

## FP4 Line Cards

| Field | Value |
|-------|-------|
| Total Buffer | ~64 GB per line card |
| Buffer Model | Fully shared ingress + egress |
| Pre-buffer | Multi-million packet capacity |
| Default Queues | 128k ingress / 128k egress |
| Queue Reallocation | 8k increments |
| Throughput Class | ~3 Tbps per NPU |
| Target Interfaces | Up to 400G |

## FP5 Line Cards

| Field | Value |
|-------|-------|
| Total Buffer | 32–64 GB per line card |
| Buffer Model | Fully shared ingress + egress (enhanced) |
| Pre-buffer | 10.8M–21.6M packets (64-byte units) |
| Default Queues | 128k ingress / 128k egress |
| Queue Reallocation | 16k increments |
| Throughput Class | ~6 Tbps per NPU |
| Target Interfaces | 400G / 800G |

## Key Architectural Points

- Buffer is **not statically assigned to ports** — the entire pool is shared across all interfaces on a line card
- A **pre-buffer stage** absorbs microbursts before the forwarding pipeline classifies traffic
- Queues can be reallocated between ingress and egress **without changing the total buffer pool size**
- FP5 improves efficiency and scale over FP4 without a significant raw buffer size increase

## FP4 vs FP5 Comparison

| Feature | FP4 | FP5 |
|---------|-----|-----|
| Buffer size | ~64 GB/LC | 32–64 GB/LC |
| Pre-buffer | Multi-million pkts | 10.8M–21.6M pkts |
| Queue realloc increment | 8k | 16k |
| Throughput class | ~3 Tbps | ~6 Tbps |
| Target interfaces | up to 400G | 400G / 800G |
| Key strength | Deterministic buffering | Efficiency + scale |

See the [Nokia SR Platform architecture page](/concepts/nokia-sr-platform/) for deeper detail on shared buffer pools, pre-buffering, and QoS coupling.

[← Back to the main buffer table](/)
