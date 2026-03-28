---
title: "UfiSpace S9600-72XC"
layout: page.njk
description: "Buffer notes for the UfiSpace S9600-72XC (Broadcom Qumran2c)"
---

The UfiSpace S9600-72XC is a massively scalable, disaggregated open core and edge router. It supports commercial network operating systems like **IP Infusion OcNOS** to act as a BNG, Provider Edge (PE), or Core router.

| Field | Value |
|-------|-------|
| Ports | 64x 25G SFP28, 8x 100G QSFP28 |
| ASIC | **Broadcom Qumran2c** (BCM88820) |
| Total Buffer | **4 GB** (High Bandwidth Memory - HBM) |
| Architecture | Virtual Output Queuing (VOQ) |

## Buffer Architecture

Powered by the **Broadcom Qumran2c** (Q2c) routing silicon, the S9600-72XC abandons traditional external DRAM methodologies in favor of on-package **High Bandwidth Memory (HBM)**. 

This enables a colossal **4 GB deep packet buffer** integrated tightly onto the ASIC substrate itself, allowing for extremely low-latency access to massive buffering scale. The architecture uses Virtual Output Queuing (VOQ) so packets buffer at the ingress port based on egress availability, fully eradicating head-of-line blocking. 

## References
- [UfiSpace S9600-72XC Product Page](https://www.ufispace.com)

## See Also
- [Broadcom Qumran2c Architecture](/concepts/broadcom-qumran2c/) — ASIC-level buffer details

[← Back to the main buffer table](/)
