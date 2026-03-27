---
title: "Aruba CX 8360 Series"
layout: page.njk
description: "Buffer notes for the Aruba CX 8360 series (Broadcom Trident 3)"
---

The Aruba CX 8360 series is powered by the **Broadcom Trident 3** ASIC. It is tailored to offer scalable and intelligent network switching for enterprise campus core and data center connectivity.

| Field | Value |
|-------|-------|
| Ports | Various: 32x 100G, 48x 25G, 48x 10G |
| Total Buffer | 32 MB |
| QoS Pools | Single fixed pool |

## Buffer Architecture

Consistent with Trident 3 silicon, the CX 8360 provides a 32 MB shared packet buffer. In contrast to the CX 8325, the CX 8360 maintains a **single fixed QoS pool** rather than three configurable pools. The shared buffer efficiently handles general traffic patterns and microbursts, allowing it to perform well as a top-of-rack or aggregation switch.

## References

- [Aruba CX 8360 Datasheet](https://www.arubanetworks.com/assets/ds/DS_8360Series.pdf)

## See Also

- [Broadcom Trident 3 Architecture](/concepts/broadcom-trident3/) — ASIC-level buffer details
- [Back to the main buffer table](/)
