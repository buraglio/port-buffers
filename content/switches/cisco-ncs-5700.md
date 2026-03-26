---
title: "Cisco NCS 5700 Series"
layout: page.njk
description: "Buffer notes for the Cisco NCS 5700 Series platform"
---

The Cisco NCS 5700 Series, an evolution of the NCS 5500, leverages the **Broadcom Jericho2 (J2 / J2c)** ASIC family, offering vast bandwidth capability coupled with integrated high-bandwidth memory.

## Buffer Architecture

| Field | Value |
|-------|-------|
| Total Buffer | 32 MB On-chip + 8 GB Off-chip HBM per ASIC |
| Buffer Model | Virtual Output Queueing (VOQ) |
| Off-chip Memory | High Bandwidth Memory (HBM) |
| Target Role | Scale-out Core / Edge |
| Forwarding ASIC | Broadcom Jericho2 (J2) / Jericho2c (J2c) |

## Key Architectural Points
- The on-chip buffer increases to **32 MB** for handling immediate bursts.
- Drops the GDDR5 in favor of closely coupled **High Bandwidth Memory (HBM)**, standardizing around **8 GB** per NPU for deep VOQ queues.
- This HBM architecture ensures the deep buffers can keep pace with 400G and 800G port densities without hitting memory throughput bottlenecks.

See the [Broadcom Jericho Platform architecture](/concepts/broadcom-jericho/) page for deeper details on Jericho evolution.

[← Back to the main buffer table](/)
