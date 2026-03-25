---
title: "Broadcom Trident+ (BCM56840)"
layout: page.njk
description: "Architecture notes on the Broadcom Trident+ merchant silicon switch ASIC"
---

**Introduced:** March 2010

The Broadcom BCM56840 series of silicon switches have the code name **Trident**. It is called *merchant silicon* because Broadcom makes the part available to switch manufacturers who build competing products. In the trade press this is often called a *switch ASIC*, but Trident is actually a full custom design. This gives it a speed advantage over manufacturers that use gate-array ASICs where all customization is done in a final metalization layer.

Many vendors built products on the same silicon: Juniper, IBM, Alcatel-Lucent, HP, Arista, and Cisco, among others.

## Buffer Architecture

The Trident+ has a **9 MB block of buffer** which is partitioned by the switch software between dedicated per-port buffers and a dynamic buffer pool that can be allocated on demand. This memory is organized as 46,080 cells of 208 bytes each. These cells are chained together to build buffers to hold packets of varying sizes.

It is possible that the manufacturer may have statically allocated all the memory directly to the ports and there is no dynamic pool. Teasing this out of data presented by manufacturer data sheets is difficult.

A flagship feature of the Trident+ is ultra-low latency achieved with cut-through switching. This may be important in data center applications and for high-frequency traders. **It is irrelevant to file transfers over long RTT paths.** To achieve the low-latency performance, the Trident needs extremely fast access to its buffers — it achieves this by putting them on the silicon with the switch. All Trident+ products show the same amount of packet buffer because the on-chip RAM cannot be augmented.

## Per-Vendor Buffer Configuration

It might be that all Trident+ products carve up the buffers in the same way — but that seems unlikely. Broadcom parameterizes lots of controls in the switch, letting the manufacturer set them to best advantage. We know the BCM56840 is capable of flow control, and that not all manufacturers include it in their feature set. Flow control — if used — is part of a buffer management scheme. So we know there are differences. **It would be unwise to assume anything about the maximum queue depth without explicit confirmation from the manufacturer or in-house testing.**

One thing that sets the Trident apart from Intel's merchant silicon is that Broadcom does not openly publish technical data sheets on its web site.

## See Also

- [Trident II](/concepts/trident-ii/) — the successor chip with 12 MB on-chip buffer
- [Summary: Buffer Sizing](/summary/)
- [Back to the main buffer table](/)
