---
title: "Nokia 7210 SAS"
layout: page.njk
description: "Buffer notes for the Nokia 7210 SAS access and demarcation router"
---

The Nokia 7210 SAS (Service Access Switch) is built on **merchant Ethernet switching silicon**, giving it a fundamentally different buffer profile from Nokia's FP-based platforms.

| Field | Value |
|-------|-------|
| Total Buffer | 64–512 MB (variant-dependent) |
| Buffer Model | Shared ingress/egress |
| Silicon | Merchant Ethernet switching ASIC |
| RX Queues | Hierarchical QoS; per-service policing and shaping |
| Target Role | Access edge, demarcation, cell-site router |

## Buffer Characteristics

- **64 MB** on lower-end variants; **512 MB** on high-end variants (e.g., 7210 SAS-K ETR)
- Buffer is shared across ingress and egress — no dedicated per-direction pool
- **Ingress-dominant** buffering model
- Provides "deep buffering" relative to access-layer devices, but not comparable to FP-based core systems

## What It Handles Well

- Short bursts from access loop congestion
- Hierarchical QoS with per-service policing and shaping
- Speed mismatches at access demarcation points

## Limitations

- Not designed for large-scale oversubscription
- Not suitable for high fan-in aggregation scenarios
- Smaller buffer depth than FP-based Nokia platforms (7750 SR, 7730 SXR)

See the [Nokia Access/Aggregation architecture page](/concepts/nokia-access-agg/) for cross-platform comparison.

[← Back to the main buffer table](/)
