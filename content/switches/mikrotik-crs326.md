---
title: "MikroTik CRS326-24G-2S+RM"
layout: page.njk
description: "Buffer notes for the MikroTik CRS326-24G-2S+RM (Marvell 98DX3236)"
---

The MikroTik CRS326-24G-2S+RM utilizes the **Marvell Prestera 98DX3236** switch chip to handle massive layer 2 forwarding across its 24 Gigabit ports and dual 10G uplinks. 

> [!WARNING]
> **Approximation Notice:** MikroTik does not officially publish packet buffer capabilities in their hardware datasheets. The sizing provided below is an approximation synthesized from community troubleshooting efforts referencing the RouterOS CLI.

| Field | Value |
|-------|-------|
| Ports | 24x 1G RJ45, 2x 10G SFP+ |
| Total Buffer | **~1.5 MB** (Estimated) |
| Architecture | Dynamically Shared |

## Approximating the Buffer via CLI
To calculate or observe the hardware buffering on your specific device, you must interact natively with RouterOS. You can run the following command in the CLI:

```bash
/interface ethernet switch qos monitor
```

If your switch chip supports the readout, you will see `total-byte-cap` mapping to roughly **1.5 MB** of shared pool space. Because this allows only microscopic allowances of microbursts when converting a 10G ingress stream into a 1G egress port, users must employ pause frames (Flow Control) and software traffic shaping on upstream devices to avoid congestion drops.

[← Back to the main buffer table](/)
