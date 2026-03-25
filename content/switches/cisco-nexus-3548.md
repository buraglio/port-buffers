---
title: "Cisco Nexus 3548"
layout: page.njk
description: "Buffer notes for the Cisco Nexus 3548"
---

The Cisco Nexus 3548 uses an **algorithmic buffer** (Cisco's ASIC, not Broadcom merchant silicon). The buffer is dynamically managed.

| Field | Value |
|-------|-------|
| Ports | 48 SFP+ |
| RX Queues | 4Q |
| Total Buffer | 18 MB |
| TX Buffer | 5.8 MB |

The Nexus 3548 is notable for its ultra-low latency mode and configurable buffer allocation.

## References

- [Nexus 3548 Architecture](/assets/pdfs/nexus-3548-architecture.pdf)

[← Back to the main buffer table](/)
