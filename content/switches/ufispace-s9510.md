---
title: "UfiSpace S9510-28DC"
layout: page.njk
description: "Buffer notes for the UfiSpace S9510-28DC (Broadcom Qumran-AX)"
---

The UfiSpace S9510-28DC is a highly versatile open networking Cell Site Router (CSR) built for 5G fronthaul and backhaul networks. It is one of the most prominent bare-metal platforms certified for **IP Infusion OcNOS**.

| Field | Value |
|-------|-------|
| Ports | 24x 10/25G SFP28, 2x 100G QSFP28, 2x 40/100G QSFP28 |
| ASIC | **Broadcom Qumran-AX** |
| Total Buffer | **2 GB** (Deep Buffer) |
| Architecture | Virtual Output Queuing (VOQ) |

## Buffer Architecture

The S9510-28DC integrates the Broadcom Qumran-AX silicon alongside external RAM modules to provide **2 GB of deep packet buffering**. In service provider networks where speed mismatches (100G core down to 10G/25G antenna interfaces) cause massive buffering requirements, the S9510 uses Virtual Output Queues (VOQs) to absorb the congestion fairly.

By queueing packets at the ingress port until the egress port is confirmed ready, the switch eliminates head-of-line blocking and ensures high priority Time Sync (PTP) traffic is never dropped behind bulky TCP data streams.

## References
- [UfiSpace S9510-28DC Product Page](https://www.ufispace.com)

[← Back to the main buffer table](/)
