---
title: "Marvell Prestera"
layout: page.njk
description: "Buffer architecture of the Marvell Prestera switch ASIC family: shared on-chip SRAM, undisclosed buffer sizes, and how MikroTik platforms expose approximations via RouterOS."
---

## Marvell Prestera

The Marvell Prestera family is a line of Ethernet switch ASICs targeting enterprise access, aggregation, and SMB switching — the same market as Broadcom Trident and Mellanox Spectrum. Prestera chips are found in MikroTik CRS/CCR platforms, Edgecore, D-Link, and various ODM products.

Unlike Broadcom, Marvell does not publish packet buffer sizes in open product datasheets for most Prestera variants. This makes precise buffer accounting difficult and forces practitioners to rely on CLI introspection and community estimation.

## Prestera Generations and Variants

| Chip | Product Name | Max Ports | Bandwidth | Buffer | Notes |
| --- | --- | --- | --- | --- | --- |
| 98DX3236 | Prestera Agate | 24×1G + 2×10G | ~50 Gbps | ~1.5 MB (estimated) | Low-cost access tier |
| 98DX8216 | Prestera Falcon | 16×10G | ~160 Gbps | ~4 MB (estimated) | MikroTik CRS317 |
| 98DX8525 | Prestera Aldrin2 | 12×25G + 2×100G | ~500 Gbps | ~4–8 MB (estimated) | MikroTik CCR2216 HW offload |

**Data quality note:** None of these buffer figures appear in public Marvell datasheets. They are community approximations derived from RouterOS CLI output. See [Data Quality](#data-quality-note) below.

## Buffer Architecture

Prestera uses a **shared on-chip SRAM** model, similar to Broadcom Trident+ and Trident II. All ports draw from a single pool; there is no fixed per-port allocation.

Key characteristics:
- **Single shared pool**: any port can use available buffer up to the chip-wide limit
- **No external DRAM**: unlike Broadcom Jericho or Qumran, Prestera has no off-chip HBM or GDDR5 deep buffer
- **Small pool size**: estimated 1.5–8 MB depending on variant, which is at the low end compared to Broadcom Trident 3 (32 MB) or Trident 4 (up to 132 MB)
- **Tail-drop default**: with small buffers and shared allocation, congestion quickly leads to tail-drop without flow control

### Implication for speed-mismatch scenarios

Speed mismatches are the most common cause of buffer exhaustion on Prestera-based switches. A burst of 10G traffic arriving and egressing to a 1G port can exhaust a 4 MB buffer in under **3.2 milliseconds**:

```
4 MB ÷ (10 Gbps / 8) = ~3.2 ms
```

Enabling **802.3x flow control** (PAUSE frames) is the primary mitigation. Prestera hardware supports it, and RouterOS exposes it per-interface.

## Approximating Buffer Size via RouterOS

Because Marvell does not publish buffer figures, MikroTik community members have approximated them using the RouterOS QoS hardware monitor:

```bash
/interface ethernet switch qos monitor
```

This command outputs `total-byte-cap` and `total-packet-cap` — the hardware memory pool limits visible to the switch ASIC's scheduler. These values are not the same as a guaranteed packet buffer specification, but they provide a reasonable lower bound.

| Platform | Chip | CLI-reported total-byte-cap | Derived buffer estimate |
| --- | --- | --- | --- |
| CRS326-24G-2S+RM | 98DX3236 | ~12 Mbit | ~1.5 MB |
| CRS317-1G-16S+RM | 98DX8216 | ~32 Mbit | ~4 MB |
| CCR2216-1G-12XS-2XQ | 98DX8525 (Aldrin2) | Not reliably exposed | ~4–8 MB (inferred) |

The CCR2216 is a special case: its Aldrin2 chip handles hardware-offloaded flows, but complex queues (PCQ, shaping) push traffic to the Annapurna ARM CPU, which uses system RAM (16 GB) as a software queue buffer. Buffer accounting on the CCR2216 therefore depends on which traffic path is active.

## Comparison to Other Small-Buffer ASICs

| ASIC | Vendor | Buffer | Architecture |
| --- | --- | --- | --- |
| Prestera 98DX8216 | Marvell | ~4 MB (est.) | Shared SRAM |
| Trident+ BCM56840 | Broadcom | 9 MB | Shared SRAM |
| Trident II BCM56850 | Broadcom | 12 MB | Shared SRAM |
| Spectrum MT52132 | Mellanox | ~16 MB | Shared SRAM |

Prestera chips are generally at the smaller end of on-chip buffer capacity for their generation, which reinforces their positioning as access/SMB silicon rather than aggregation or core.

## Data Quality Note

Marvell does not publish packet buffer sizes for Prestera in open datasheets. Buffer figures on this site for Prestera platforms are:

- **Approximated** from RouterOS CLI output (`total-byte-cap`)
- **Not confirmed** by Marvell or MikroTik in official documentation
- **Subject to revision** if community members obtain better data

All values should be treated as lower-bound estimates. If you have access to more precise figures, please [open an issue or pull request](https://github.com/buraglio/port-buffers).

## See Also

- [MikroTik CRS317 detail page](/switches/mikrotik-crs317/)
- [MikroTik CRS326 detail page](/switches/mikrotik-crs326/)
- [MikroTik CCR2216 detail page](/switches/mikrotik-ccr2216/)
- [Buffer Fundamentals](/concepts/buffer-fundamentals/)
- [Marvell OCTEON 10 (CN10K)](/concepts/marvell-octeon-cn10k/) — Marvell's programmable NP/DPU line

[← Back to the main buffer table](/)
