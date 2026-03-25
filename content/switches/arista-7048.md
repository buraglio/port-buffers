---
title: "Arista 7048"
layout: page.njk
description: "Buffer notes for the Arista 7048 — a deep buffer 1RU switch"
---

The Arista 7048 is a **large-buffer 1RU switch** using external DRAM for packet buffering. See the [deep buffer concept page](/concepts/deep-buffer/) for context.

| Field | Value |
|-------|-------|
| Ports | 48 GigE + 4 SFP+ |
| RX Queues | 8Q |
| Total Buffer | **768 MB** |
| RX Buffer | ~16 MB/port (estimated) |
| TX Buffer | GOBBS (Gigabytes of Buffering Space) |

Arista claims 50 ms of simultaneous buffer for each of the 48 GigE ports, requiring ~300 MB. The actual 768 MB exceeds that significantly — the excess is likely due to the practicalities of external DRAM chip sizing.

[← Back to the main buffer table](/)
