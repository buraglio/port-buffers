---
title: "Cisco Nexus 5010"
layout: page.njk
description: "Buffer architecture notes for the Cisco Nexus 5010"
---

The Nexus 5010 uses **Virtual Output Queuing (VoQ)**. Each ingress port maintains a separate queue for each egress port, eliminating head-of-line blocking.

| Field | Value |
|-------|-------|
| Ports | 26 SFP+ |
| RX Queues | 8 |
| TX Queues | 1 (uncertain) |
| Buffer per Port | 480 KB |
| RX Buffer | 480 KB |
| Architecture | VoQ |

## References

- [Cisco Nexus 5000 Architecture](/assets/pdfs/nexus5500.pdf)

[← Back to the main buffer table](/)
