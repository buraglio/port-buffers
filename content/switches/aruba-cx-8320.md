---
title: "Aruba CX 8320 Series"
layout: page.njk
description: "Buffer notes for the Aruba CX 8320 series (Broadcom Trident II/Maverick)"
---

The Aruba CX 8320 series switches are built on the **Broadcom Trident II / Maverick** ASIC family, providing high-speed wire-rate performance suitable for campus core and data center top-of-rack deployments.

| Field | Value |
|-------|-------|
| Ports | 48x 10G and 6x 40G QSFP+ |
| Total Buffer | 16 MB |
| RX Buffer | Shared |
| TX Buffer | Shared |

## Buffer Architecture

The Aruba CX 8320 leverages a shared memory architecture inherent to the Trident ASIC line. With 16 MB of packet buffer on-chip, it intelligently manages packet bursts using advanced Modular Virtual Output Queueing (VoQ) techniques to minimize head-of-line blocking and provide lossless networking capabilities where required.

## References

- [Aruba CX 8320 Datasheet](https://www.arubanetworks.com/assets/ds/DS_8320Series.pdf)

[← Back to the main buffer table](/)
