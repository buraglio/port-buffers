---
title: "Arista 7280R3 / 7800R3 Series"
layout: page.njk
description: "Buffer notes for the Arista 7280R3 and 7800R3 series (Broadcom Jericho2)"
---

The Arista 7280R3 and modular 7800R3 series stand among the deepest-buffered merchant silicon platforms available. Leveraging **Broadcom Jericho2** architecture, they are positioned for IP storage, global WAN transit, and content delivery networks where absolute lossless delivery is necessary.

| Field | Value |
|-------|-------|
| Ports | 10G/25G through 400G scale |
| Minimum Fast Buffer | 32 MB on-chip per ASIC |
| Deep Buffer (HBM) | Up to 24 GB / 32 GB off-chip per chassis subsystem |

## Buffer Architecture

The 7280R3 utilizes an ultra-deep buffer structure enabled by **Virtual Output Queuing (VOQ)** and High Bandwidth Memory (HBM) integration natively with Jericho2.  

The platform separates traffic dynamically:
1. Short-lived flows use the **32 MB on-chip fast memory**.
2. Large microburst flows and congestion events are seamlessly shunted into the **off-chip HBM pool (ranging from 16 GB to 32 GB depending on model scale)**.

This mechanism inherently averts head-of-line blocking while maintaining nearly 100% capacity transmission on outbound links without packet degradation. Because congestion is localized and buffered *before* crossing internal fabrics or facing congested outgoing ports, applications experience pure deterministic routing.

## References

- [Arista 7280R3 Series Datasheet](https://www.arista.com/assets/data/pdf/Datasheets/7280R3-Datasheet.pdf)

[← Back to the main buffer table](/)
