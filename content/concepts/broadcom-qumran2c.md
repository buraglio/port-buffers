---
title: "Broadcom Qumran2c Architecture"
layout: page.njk
description: "Overview of the Broadcom Qumran2c (BCM88820) deep buffer routing architecture"
---

The **Broadcom Qumran2c** (BCM88820) is a member of the Jericho2 routing silicon family. It is optimized for access, aggregation, and edge routing deployments where deep packet buffering and advanced carrier-grade feature sets (like MPLS, segment routing, and massive fib scale) are required without the footprint of a modular Jericho2 chassis.

## Deep Packet Buffering & HBM

The most distinguishing feature of Qumran2c compared to legacy merchant routing silicon is its integration of **High Bandwidth Memory (HBM)**. 

Older "deep buffer" systems (like early Qumran-AX/MX or original Jericho) relied on external GDDR5 or standard DRAM modules placed on the motherboard. This approach consumed significant physical space and power, and created latency bottlenecks between the ASIC and the memory chips.

With Qumran2c, Broadcom packages **4 GB of HBM** directly alongside the routing die. This offers:
*   **Massive Capacity:** 4 GB provides hundreds of milliseconds of buffering per port even at dense 400G and 100G utilization.
*   **Reduced Power:** Integrated HBM drastically cuts the power footprint compared to driving signals to external memory DIMMs.
*   **Zero Head-of-Line Blocking:** Because it utilizes a **Virtual Output Queuing (VOQ)** mechanism, traffic is queued at the ingress port until the exact destination port is ready to transmit it, fully preventing congestion drops caused by separate saturated links.

## Platforms Using This Architecture

- [UfiSpace S9600-72XC](/switches/ufispace-s9600/)

## See Also

- [Broadcom Jericho/Jericho2 Architecture](/concepts/broadcom-jericho/) 
- [Back to the main buffer table](/)
