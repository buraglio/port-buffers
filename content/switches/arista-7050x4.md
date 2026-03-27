---
title: "Arista 7050X4 Series"
layout: page.njk
description: "Buffer notes for the Arista 7050X4 series (Broadcom Trident 4)"
---

The Arista 7050X4 series is built on the **Broadcom Trident 4** ASIC, providing high-capacity, low-latency, routing and switching for data center tops-of-rack and enterprise spines.

| Field | Value |
|-------|-------|
| Ports | Dense 10G/25G and 100G configurations |
| Total Buffer | Up to 132 MB |
| Architecture | Fully shared memory |

## Buffer Architecture

Leveraging the advanced memory architecture of the Trident 4 silicon, the Arista 7050X4 series offers a significantly increased shared packet buffer of **up to 132 MB** (varies slightly by specific derivative switch model). By employing intelligent dynamic thresholds, the switch allocates buffer space intelligently mapped to traffic classes and specific quality of service policies, mitigating packet loss natively.

## References

- [Arista 7050X4 Series Datasheet](https://www.arista.com/assets/data/pdf/Datasheets/7050X4-Datasheet.pdf)

## See Also

- [Broadcom Trident 4 Architecture](/concepts/broadcom-trident4/) — ASIC-level buffer details
- [Back to the main buffer table](/)
