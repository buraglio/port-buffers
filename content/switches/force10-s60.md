---
title: "Force10 S60 (Dell)"
layout: page.njk
description: "Buffer notes for the Force10 S60 — a deep buffer 1RU switch"
---

The Force10 S60 is a **large-buffer 1RU switch** using external DRAM for packet buffering. See the [deep buffer concept page](/concepts/deep-buffer/) for context.

| Field | Value |
|-------|-------|
| Ports | 48 GigE + 4 SFP+ |
| RX Queues | 4Q |
| Total Buffer | **1,250 MB** |
| TX Buffer | "enough" |

The 1.25 GB buffer is large enough to absorb extended bursts at a 10G→1G speed step without dropping packets.

## References

- [Force10 S60 Spec Sheet](/assets/pdfs/Dell_Force10_S60_Spec_Sheet.pdf)
- [Force10 S60 Buffer Tuning Guide](/assets/pdfs/s60-buffer-tune.pdf)

[← Back to the main buffer table](/)
