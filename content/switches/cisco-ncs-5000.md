---
title: "Cisco NCS 5000 Series"
layout: page.njk
description: "Buffer notes for the Cisco NCS 5000 Series platform"
---

The Cisco NCS 5000 Series (such as the NCS 5001, 5002, and 5011) is a dense, access and aggregation routing platform utilizing the **Broadcom Qumran-MX** ASIC architecture.

## Buffer Architecture

| Field | Value |
|-------|-------|
| Total Buffer | 16 MB per NPU |
| Buffer Model | Fully shared on-chip packet buffer |
| VOQ Support | No deep external buffers |
| Target Role | Metro aggregation, peered access |
| Forwarding ASIC | Broadcom Qumran-MX |

Unlike the deep-buffered NCS 540 or NCS 5500, the NCS 5000 relies purely on its 16 MB of on-chip packet buffering. It is optimized for high-density 10G/100G aggregation where prolonged microbursts are less of a concern.

## Key Architectural Points
- **On-chip only:** Uses 16 MB of integrated packet buffer without external memory.
- Geared towards low-latency 10G/100G environments.

See the [Broadcom Qumran Platform architecture](/concepts/broadcom-qumran/) page for broader details on the chipset family.

[← Back to the main buffer table](/)
