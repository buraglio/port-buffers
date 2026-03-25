---
title: "Brocade MLX"
layout: page.njk
description: "Buffer notes for the Brocade MLX chassis switch (VoQ)"
---

The Brocade MLX is a chassis switch using **Virtual Output Queuing (VoQ)**.

| Line Card | Ports | Total Buffer | Buffer per Port-Queue |
|-----------|-------|-------------|----------------------|
| 2-port 100 Gb/s | 2x 100GE | 3 GB | 256 MB/port-queue |
| 8-port 10 Gb/s | 8x 10GE | 3 GB | 256 MB/port-queue |
| 24-port 1 Gb/s | 24x 1GE | 1 GB | 64 MB/port-queue |

The Brocade MLX has extremely generous buffers across all line card types.

## References

- [Brocade MLX Architecture White Paper](/assets/pdfs/MLX_Series_Architecture_WP.pdf)
- [MLX 2x100GbE Line Card Datasheet](/assets/pdfs/mlx-2x100-gbe-ds.pdf)

[← Back to the main buffer table](/)
