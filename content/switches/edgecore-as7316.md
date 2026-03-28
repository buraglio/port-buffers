---
title: "Edgecore AS7316-26XB (CSR320)"
layout: page.njk
description: "Buffer notes for the Edgecore AS7316-26XB (Broadcom Qumran-AX)"
---

The Edgecore AS7316-26XB (DCS CSR320) is a ruggedized bare-metal cell site router utilized broadly in 4G/5G mobile backhaul and broadband access networks. It is a highly certified platform for software like **IP Infusion OcNOS**.

| Field | Value |
|-------|-------|
| Ports | 16x 1G/10G SFP+, 8x 10G/25G SFP28, 2x 100G QSFP28 |
| ASIC | **Broadcom Qumran-AX** (BCM88470) |
| Total Buffer | **~2 GB** (Deep Buffer via DRAM) |
| Architecture | Virtual Output Queuing (VOQ) |

## Buffer Architecture

Designed around the Broadcom Qumran-AX ASIC, the CSR320 leverages deep packet buffering crucial for mobile backhaul traffic engineering. While Broadcom does not publish the precise memory pool sizes without NDA, the system typically couples the core silicon with substantial external RAM (usually ~2 GB allocated to buffering) to provide 10s of milliseconds of buffering per port.

Using Virtual Output Queuing (VOQ), the AS7316 can absorb severe microbursts inherent in LTE/5G wireless handoffs without dropping critical timing-sensitive packets.

## References
- [Edgecore CSR320 (AS7316-26XB) Overview](https://www.edge-core.com)

[← Back to the main buffer table](/)
