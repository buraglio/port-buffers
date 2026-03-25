---
title: "Arista 7050X"
layout: page.njk
description: "Buffer notes for the Arista 7050X (Trident II)"
---

The Arista 7050X is built on the **Broadcom Trident II** (BCM56850) ASIC — the first 32×40G switch from Arista.

| Field | Value |
|-------|-------|
| Ports | 32 QSFP |
| RX Queues | 8Q |
| Total Buffer | 12 MB |
| TX Buffer (max to 1 port) | Dynamic up to 8 MB |

## Buffer Details

The Trident II has 12 MB of on-chip packet buffer. The memory is split between dedicated per-port buffers and a dynamic shared pool. Most of the memory is in the shared pool. A single congested port can absorb up to 8 MB of the shared pool dynamically.

See the [Trident II architecture page](/concepts/trident-ii/) for more details.

## References

- [Arista 7050X Architecture Notes](/assets/pdfs/Arista_7050X_Switch_Architecture.pdf)

[← Back to the main buffer table](/)
