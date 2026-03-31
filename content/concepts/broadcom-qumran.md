---
title: "Broadcom Qumran Architecture"
layout: page.njk
description: "Overview of the Broadcom Qumran (Qumran-MX, Qumran-AX) deep buffer routing architecture"
---

The **Broadcom Qumran** family is tailored for access and aggregation routers. While it shares DNX architecture roots with Jericho, Qumran ASICs are typically deployed in fixed-form platforms and edge routing roles (carrier Ethernet, 5G mobile backhaul, broadband access).

## Deep Packet Buffering & VOQ

Standard data center ToR switches rely on shallow, fast on-chip memory (e.g., 16 MB or 32 MB) to handle clean, evenly distributed traffic. However, service provider edge networks frequently encounter massive speed mismatches—such as funneling traffic from a 100G core down to a 10G customer link or cell tower.

To prevent devastating buffer exhaustion ("tail drops") in these scenarios, Qumran architecture pairs a small integrated on-chip buffer with massive external DRAM modules (often ranging from 2 GB up to 8 GB). 

When congestion occurs, the ASIC seamlessly shunts overflowing packets into the external deep buffer. Crucially, Qumran employs **Virtual Output Queuing (VOQ)**. Rather than blindly pushing packets to an egress port buffer until it overflows, packets are queued logically at their *ingress* port until the *egress* port is ready to transmit them. This totally eliminates head-of-line blocking and ensures high priority traffic (like PTP or voice) is never dropped behind a burst of bulk data.

## Qumran-MX vs. Qumran-AX

While both share the same deep buffer and feature-rich routing DNA, they target different segments of the network edge:

*   **Qumran-MX:** Designed for high-capacity aggregation and core routing. Operating at up to 800 Gbps, these chips (like the BCM88370 series) provide dense 10G/25G/40G/100G scaling for peering points and data center interconnects (DCI).
*   **Qumran-AX:** Designed for metro-access and cell site routing (CSR). Operating at up to 300 Gbps, these chips (like the BCM88470 series) focus on high-volume, lower-density environments where deep buffering and advanced timing features are essential, but multi-terabit throughput is not.

## Platforms Using This Architecture

- [Edgecore AS5916-54XKS](/switches/edgecore-as5916/) (Qumran-MX)
- [Edgecore AS7316-26XB](/switches/edgecore-as7316/) (Qumran-AX)
- [UfiSpace S9510-28DC](/switches/ufispace-s9510/) (Qumran-AX)
- [Cisco NCS 540 Series](/switches/cisco-ncs-540/)
- [Cisco NCS 560 Series](/switches/cisco-ncs-560/)

## References
- [Broadcom StrataDNX Family Overview](https://www.broadcom.com/products/ethernet-connectivity/switching/stradadnxa)
- [Cisco Live: Deep Dive into Jericho and Qumran Architectures](https://www.ciscolive.com/c/dam/r/ciscolive/global-event/docs/2020/pdf/BRKOPT-2009.pdf)

## See Also
- [Broadcom Qumran2c Architecture](/concepts/broadcom-qumran2c/)

[← Back to the main buffer table](/)
