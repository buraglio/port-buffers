---
title: "Arista 7050X3 Series"
layout: page.njk
description: "Buffer notes for the Arista 7050X3 series (Broadcom Trident 3)"
---

The Arista 7050X3 series leverages the **Broadcom Trident 3** ASIC to deliver high-performance fixed-configuration switching for data center leaf/spine deployments. It was introduced around 2018.

| Field | Value |
|-------|-------|
| Ports | Various edge/aggregation configurations |
| Total Buffer | 32 MB |
| Strategy | Fully shared memory |

## Buffer Architecture

The 7050X3 contains a **32 MB fully shared packet buffer**. Using a flexible packet processor, this pool is dynamically allocated to any port experiencing congestion. Microbursts are handled smoothly, and Arista's EOS allows comprehensive visibility into buffer utilization metrics.

## References

- [Arista 7050X3 Series Datasheet](https://www.arista.com/assets/data/pdf/Datasheets/7050X3-Datasheet.pdf)

[← Back to the main buffer table](/)
