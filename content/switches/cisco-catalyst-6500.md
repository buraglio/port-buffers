---
title: "Cisco Catalyst 6500"
layout: page.njk
description: "Buffer notes for the Cisco Catalyst 6500 — complex architecture"
---

The Cisco Catalyst 6500 is a chassis switch with a complex buffer architecture that varies significantly by supervisor and line card combination. It deserves its own analysis rather than a single row in the main table.

Key characteristics:
- Multiple supervisor engine options (SUP720, SUP2T, etc.) with very different architectures
- Line cards with per-port and shared buffer configurations
- VoQ is used on some line card/supervisor combinations

For detailed information, refer to Cisco's QoS documentation for the specific line card and supervisor engine combination in use.

## References

- [Catalyst 6500 Supervisor 2T Notes](/assets/pdfs/C6800-SUP6T.html) *(original HTML)*

[← Back to the main buffer table](/)
