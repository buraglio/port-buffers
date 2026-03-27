---
title: "Juniper QFX10002 Series"
layout: page.njk
description: "Buffer notes for the Juniper QFX10002 series (Juniper Q5 ASIC)"
---

Unlike merchant-silicon platforms, the **Juniper QFX10002** fixed-configuration switches are built around custom **Juniper Q5** ASICs. With deep application buffers, it targets core, spine, and DCI (Data Center Interconnect) roles where absorbing extreme macrobursts without dropping traffic is critical.

| Field | Value |
|-------|-------|
| Ports | 36x 100G or 72x 40G |
| Total Buffer | Very Deep (Hybrid Memory Cube) |
| Time to Absorb | Up to 100 ms per port at wire-speed |

## Buffer Architecture

To achieve massive scale without latency spikes, the Q5 relies on off-chip **Hybrid Memory Cube (HMC)** modules.

HMC allows the switch to provide truly dense buffering for Virtual Output Queuing (VOQ) structures. By providing up to **100 milliseconds** of buffering per port at maximum utilization, the QFX10002 can process tremendous microbursts seamlessly. It avoids head-of-line blocking natively by storing traffic in dedicated VOQs before attempting egress.

## References

- [Juniper QFX10002 Architecture](https://www.juniper.net/us/en/products/switches/qfx-series/qfx10000-line-of-ethernet-switches.html)

[← Back to the main buffer table](/)
