---
title: "Arista 7504E / 7508E"
layout: page.njk
description: "Buffer notes for the Arista 7504E and 7508E chassis switches (VoQ)"
---

The Arista 7504E and 7508E are chassis switches using **Virtual Output Queuing (VoQ)**.

| Field | Value |
|-------|-------|
| Line Card | 48-port SFP+ |
| RX Queues | 8Q |
| Total Buffer | 3 GB per packet processor |
| RX Buffer | 50 MB/port-queue |
| Architecture | VoQ |

VoQ eliminates head-of-line blocking by maintaining per-egress-port queues at ingress. The 3 GB per packet processor is very large.

[← Back to the main buffer table](/)
