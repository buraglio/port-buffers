---
title: "Edgecore AS5916-54XKS (AGR130)"
layout: page.njk
description: "Buffer notes for the Edgecore AS5916-54XKS (Broadcom Qumran-MX)"
---

The Edgecore AS5916-54XKS (also known as AGR130) is a carrier-grade bare-metal accumulation router. It is frequently deployed as a 5G cell site router or carrier aggregation platform running disaggregated software like **IP Infusion OcNOS**.

| Field | Value |
|-------|-------|
| Ports | 48x 10G SFP+, 6x 100G QSFP28 |
| ASIC | **Broadcom Qumran-MX** (BCM88375) |
| Total Buffer | **8 GB** (Deep Buffer) |
| Architecture | Virtual Output Queuing (VOQ) + External DRAM |

## Buffer Architecture

As part of the StrataDNX family, the Qumran-MX silicon inside the AS5916 provides a deterministic, deep-buffer architecture optimized for carrier environments. 

It utilizes a small integrated on-chip packet buffer (approx. 16 MB) for line-rate fast-path forwarding, backed by an external 8 GB DDR4 module. When microbursts or congestion occur across speed-mismatched links (e.g., 100G down to 10G), traffic is seamlessly shifted into the deep external memory using **Virtual Output Queues (VOQs)** to prevent head-of-line blocking and packet drops.

## References
- [Edgecore AS5916-54XKS Overview](https://www.edge-core.com/productsInfo.php?cls=1&cls2=5&cls3=45&id=208)

[← Back to the main buffer table](/)
