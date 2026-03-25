---
title: "Nokia 7730 SXR"
layout: page.njk
description: "Buffer notes for the Nokia 7730 SXR core and DCI router (FP5-based)"
---

The Nokia 7730 SXR is built on the **FP5 network processor**, the same silicon generation as the 7750 SR FP5 line cards. It delivers core-class buffering and QoS scale in a platform targeted at core and data center interconnect (DCI) roles.

| Field | Value |
|-------|-------|
| Total Buffer | Multi-GB (FP5-class, comparable to 7750 SR FP5) |
| Buffer Model | Fully shared |
| Silicon | Nokia FP5 |
| Queues | ~256k (FP5-scale) |
| Target Interfaces | High-density (400G+) |
| Target Role | Core, peering, DCI |

## Buffer Characteristics

- **Fully shared buffer architecture** — no static per-port allocation
- Deep packet memory in the multi-GB range, consistent with FP5 line cards in the 7750 SR
- Integrated pre-buffer, main buffer, and QoS scheduler in a tightly coupled pipeline
- Deterministic buffering and line-rate memory access

## What It Handles Well

- High oversubscription ratios
- Large-scale traffic aggregation for core and peering
- Deterministic QoS enforcement under sustained congestion
- Microbursts at 400G+ line rates

## Relationship to the 7750 SR FP5

The 7730 SXR uses the same FP5 silicon as 7750 SR FP5 line cards, so buffering behavior is comparable:
- Same fully shared memory model
- Same pre-buffer + forwarding pipeline integration
- Same queue scale (~256k queues, FP5-class)

See the [Nokia SR Platform architecture page](/concepts/nokia-sr-platform/) for FP4/FP5 detail, and the [Nokia Access/Aggregation page](/concepts/nokia-access-agg/) for the broader platform comparison.

[← Back to the main buffer table](/)
