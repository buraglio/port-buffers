---
title: "Nokia 7705 SAR"
layout: page.njk
description: "Buffer notes for the Nokia 7705 SAR mobile backhaul and TDM transport router"
---

The Nokia 7705 SAR (Service Aggregation Router) uses a **specialized SAR ASIC** with a unique fixed-segment buffer architecture designed for mobile backhaul and circuit emulation workloads.

| Field | Value |
|-------|-------|
| Total Buffer | ~200–300 MB per adapter card |
| Buffer Model | Fixed segments (non-shared) |
| Silicon | SAR ASIC (Nokia proprietary) |
| Buffer Unit | 512 bytes (chained) or 2304 bytes (unchained) |
| Target Role | Mobile backhaul, TDM adaptation, circuit emulation |

## Buffer Architecture

### Fixed Segment Mode — 2304-byte buffers
One packet occupies exactly one buffer segment. No chaining required. Simpler allocation, lower overhead.

### Buffer Chaining Mode — 512-byte buffers
Packets are split across multiple linked buffer segments:
- First segment carries the packet header and partial payload
- Remaining payload is distributed across chained segments

This allows the router to handle fragmented or variable-length traffic efficiently.

## QoS Interaction

- Each queue is configured with an **MBS (Maximum Buffer Size)** value
- Queues can be configured to claim more memory than physically available
- Buffer allocation is **not guaranteed under congestion** — the operator must size MBS values carefully relative to the physical memory on each adapter card

## What It Handles Well

- TDM and mobile backhaul traffic with predictable, fixed packet sizes
- Circuit emulation (CES) workloads
- Deterministic per-flow buffer allocation

## Limitations

- Less flexible than shared-memory systems — buffer exhaustion is possible under contention
- Fixed segment size creates overhead for very small or very large packets
- Not suitable for elastic packet buffering under variable congestion

See the [Nokia Access/Aggregation architecture page](/concepts/nokia-access-agg/) for cross-platform comparison.

[← Back to the main buffer table](/)
