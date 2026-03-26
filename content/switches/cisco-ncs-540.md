---
title: "Cisco NCS 540 Series"
layout: page.njk
description: "Buffer notes for the Cisco NCS 540 Series platform"
---

The Cisco NCS 540 Series routers are meant for the access and aggregation edge, utilizing the **Broadcom Qumran** family of ASICs to deliver deep buffers capable of absorbing microbursts caused by speed mismatches.

## Buffer Architecture

| Field | Value |
|-------|-------|
| Total Buffer | Up to 3 GB per ASIC |
| Buffer Model | Virtual Output Queueing (VOQ) |
| Deep Buffering | Yes |
| Target Role | 5G cell site router, access edge |
| Forwarding ASIC | Broadcom Qumran (various variants) |

## Key Architectural Points
- Designed to handle speed step-downs (e.g., 100G core down to 1G/10G access rings), requiring significant buffering to absorb temporary congestion.
- Employs **Virtual Output Queueing (VOQ)** to prevent head-of-line blocking.
- Deep packet buffers provide highly reliable Quality of Service (QoS) even during heavy microburst activity.

See the [Broadcom Qumran Platform architecture](/concepts/broadcom-qumran/) page for broader details on the chipset family.

[← Back to the main buffer table](/)
