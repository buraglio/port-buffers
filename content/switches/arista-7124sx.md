---
title: "Arista 7124SX / 7148SX"
layout: page.njk
description: "Buffer notes for the Arista 7124SX and 7148SX"
---

The Arista 7124SX and 7148SX use a multi-chip design — multiple switch ASICs each with their own 2 MB buffer pool. Memory is shared among ports within one ASIC but not across ASICs.

| Model | Ports | Total Buffer | TX Buffer (max to 1 port) |
|-------|-------|-------------|--------------------------|
| 7124SX | 24x SFP+ | 2 MB/switch-chip | 1.238 + 0.02 MB |
| 7148SX | 48 SFP+ | 2 MB/switch-chip, 8 MB total | 1.238 + 0.02 MB |

The 7148SX uses 4 switch chips; the total system buffer is 8 MB but no single flow can access more than the 2 MB pool managed by its switch chip.

[← Back to the main buffer table](/)
