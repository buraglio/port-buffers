---
title: "MikroTik CRS317-1G-16S+RM"
layout: page.njk
description: "Buffer notes for the MikroTik CRS317-1G-16S+RM (Marvell 98DX8216)"
---

The MikroTik CRS317-1G-16S+RM is a rack-mountable manageable switch powered by a **Marvell Prestera 98DX8216** switch chip. Due to the high port density and price-to-performance ratio, understanding its buffer capacity is critical when dealing with speed mismatches (like 10Gb to 1Gb traffic).

> [!WARNING]
> **Data Quality Warning:** MikroTik and Marvell do not publicly document the exact hardware buffer sizes on their datasheets for these chips. The values below are **approximations** based on community inspection of the switch chip's memory allocation pool via the RouterOS command line.

| Field | Value |
|-------|-------|
| Ports | 16x 10G SFP+, 1x 1G RJ45 |
| Total Buffer | **~4 MB** (Estimated) |
| Architecture | Dynamically Shared |

## Approximating the Buffer via CLI
The approximated value of **~4 MB** (or roughly 32 Mbits) is observed by running a RouterOS CLI command on the device to query the Quality of Service hardware offload capability:

```bash
/interface ethernet switch qos monitor
```

Depending on the RouterOS version (especially v7+ with hardware offloading enabled), this command outputs a `total-byte-cap` and `total-packet-cap` variable representing the total memory allocated dynamically across the switch chip. 

## Architectural Note
Because the CRS317 uses a shared buffer, traffic burst handling relies heavily on enabling **Flow Control (802.3x)** to prevent instantaneous tail-drops when pushing bursts of 10G traffic out of a congested or slower port.

[← Back to the main buffer table](/)
