---
title: "Mellanox Spectrum Switches"
layout: page.njk
description: "Buffer architecture notes for Mellanox SX1024 and SX1036"
---

Mellanox uses its own **Spectrum ASIC** rather than Broadcom merchant silicon. The Spectrum is a cut-through switch chip with a different buffer architecture from the Trident family.

## Models

| Model | Ports | Total Buffer | Max TX Buffer to 1 Port |
|-------|-------|-------------|------------------------|
| SX1024 | 48 SFP+ and 12 QSFP | 4.6 MB | 64 KB |
| SX1036 | 36 QSFP | 4.6 MB | 128 KB |

The very small maximum per-port buffer (64–128 KB) reflects a design optimized for latency rather than burst absorption.

## References

- [SX1024 datasheet](/assets/pdfs/SX1024.pdf)
- [SX1036 datasheet](/assets/pdfs/sx1036.pdf)

[← Back to the main buffer table](/)
