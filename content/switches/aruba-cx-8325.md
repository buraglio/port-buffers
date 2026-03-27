---
title: "Aruba CX 8325 Series"
layout: page.njk
description: "Buffer notes for the Aruba CX 8325 series (Broadcom Trident 3)"
---

The Aruba CX 8325 series switches are built around the **Broadcom Trident 3** ASIC, offering an optimized architecture for next-generation data centers and campus core environments with demanding low-latency and lossless application requirements.

| Field | Value |
|-------|-------|
| Ports | 32x 100G or 48x 25G |
| Total Buffer | 32 MB |
| QoS Pools | 3 Configurable Lossless Pools |

## Buffer Architecture

The CX 8325 features a 32 MB shared packet buffer. A unique attribute of this platform's buffer memory management is its support for **three configurable lossless QoS pools**. This enables dedicated headroom capacity (up to 10 MB limit) which defaults to 3 MB, ensuring RoCEv2 and other lossless storage environments are properly handled without suffering packet drops during congestion.

## References

- [Aruba CX 8325 Datasheet](https://www.arubanetworks.com/assets/ds/DS_8325Series.pdf)

## See Also

- [Broadcom Trident 3 Architecture](/concepts/broadcom-trident3/) — ASIC-level buffer details
- [Back to the main buffer table](/)
