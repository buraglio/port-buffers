---
title: "Cisco NCS 560 Series"
layout: page.njk
description: "Buffer notes for the Cisco NCS 560 Series platform"
---

The Cisco NCS 560 Series (e.g., NCS 560-4) is a modular router platform serving access and aggregation roles capable of profound scale. Depending on the line cards, it leverages **Broadcom Qumran** and **Jericho** ASIC subsets.

## Buffer Architecture

| Field | Value |
|-------|-------|
| Total Buffer | Line card dependent (Deep Buffer) |
| Buffer Model | Virtual Output Queueing (VOQ) |
| System Control | 32 GB RAM on Route Switch Processors (RSP) |
| Target Role | High-density aggregation |
| Forwarding ASIC | Broadcom Qumran / Jericho based |

## Key Architectural Points
- Provides a fully modular, scalable deep-buffer architecture utilizing similar merchant silicon to the fixed NCS 540/5500 routers.
- The Route Switch Processors (RSPs) offload control-plane and data-plane scheduling, while the interface modules provide the packet buffering pools.
- **Virtual Output Queueing (VOQ)** handles advanced traffic management across the chassis fabric.

See the [Broadcom Qumran](/concepts/broadcom-qumran/) and [Broadcom Jericho](/concepts/broadcom-jericho/) architecture pages for ASIC specifics.

## References
- [Cisco Network Convergence System 560 Modular Routers](https://www.cisco.com/c/en/us/products/routers/network-convergence-system-500-series-routers/index.html)

[← Back to the main buffer table](/)
