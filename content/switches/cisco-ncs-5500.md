---
title: "Cisco NCS 5500 Series"
layout: page.njk
description: "Buffer notes for the Cisco NCS 5500 Series platform"
---

The Cisco NCS 5500 Series is a high-density core/edge routing platform constructed using **Broadcom Jericho** and **Jericho+** ASICs, known for their massive port density combined with deep external buffering.

## Buffer Architecture

| Field | Value |
|-------|-------|
| Total Buffer | 16 MB On-chip + 4 GB to 8 GB Off-chip per ASIC |
| Buffer Model | Virtual Output Queueing (VOQ) |
| Off-chip Memory | GDDR5 deep buffers |
| Target Role | Core / Edge / Peering |
| Forwarding ASIC | Broadcom Jericho / Jericho+ |

## Key Architectural Points
- The architecture merges a very fast but small **16 MB on-chip memory** with a massive, somewhat slower **GDDR5 off-chip memory pool** (usually 4 GB or 8 GB depending on the line card).
- Uses **Virtual Output Queueing (VOQ)** exclusively. Packets are buffered at the ingress side before being requested over the fabric, eliminating head-of-line blocking.
- Allows for 50ms+ of packet memory even under extreme network congestion.

See the [Broadcom Jericho Platform architecture](/concepts/broadcom-jericho/) page for deeper details on Jericho routing capabilities.

## References
- [Cisco NCS 5500 Platform Architecture White Paper](https://www.cisco.com/c/en/us/products/collateral/routers/network-convergence-system-5500-series/white-paper-c11-736257.html)
- [Broadcom StrataDNX Jericho Packet Processors](https://www.broadcom.com/products/ethernet-connectivity/switching/stradadnxa)

[← Back to the main buffer table](/)
