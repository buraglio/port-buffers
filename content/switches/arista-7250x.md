---
title: "Arista 7250X"
layout: page.njk
description: "Buffer notes for the Arista 7250X (Trident II, 4-chip)"
---

The Arista 7250X uses **four Broadcom Trident II** (BCM56850) ASICs connected via a crossbar.

| Field | Value |
|-------|-------|
| Ports | 64 QSFP |
| RX Queues | 8Q |
| Total Buffer | 12 MB/ASIC, 48 MB total |
| TX Buffer (max to 1 port) | Dynamic up to 8 MB |

Each chip manages its own 12 MB memory pool. Memory from one ASIC cannot be shared with ports on another ASIC.

## References

- [Arista 7250X Datasheet](/assets/pdfs/Arista-7250X.pdf)

[← Back to the main buffer table](/)
