---
title: "Broadcom Trident II (BCM56850 / BCM56854)"
layout: page.njk
description: "Architecture notes on the Broadcom Trident II merchant silicon switch ASIC"
---

Broadcom's follow-on to the Trident+ is the **StrataXGS Trident II**:

- **BCM56850** — used for switches with 32x 40 Gb/s ports
- **BCM56854** — used for switches with 48x 10 Gb/s and 6x 40 Gb/s ports

Announced in 2012, it became available in production volumes in November 2013.

## Buffer Architecture

In common with the Trident+, all packet buffers are on the switch chip. Where the Trident+ has 9 MB of packet buffers, the **Trident II has 12 MB**. The memory is segmented into dedicated per-port buffers and a dynamic shared pool that can be loaned to any queue and port that needs it. Most of the memory is in the shared pool. For more information, see the listing for the [Arista 7050X](/switches/arista-7050x/).

While we have not seen switches implemented with more than a single Trident+ chip, the Trident II can be used in larger switches with crossbar connections between switching elements. The Arista 7250 is an example.

## New Features

One of the new features introduced with the Trident II is support for VXLAN — specifically NVGRE (Network Virtualization General Route Encapsulation). This stimulated a range of switches with data center features built on Trident II silicon.

The BCM56850 has 128 SERDES to provision 32 quad ports. If used for 1RU switches with 10 Gb/s ports, 48 SERDES would be stranded with no place to connect — sufficient reason to have the BCM56854 variant.

## Trident II+ (BCM56860) — April 2015

The Trident was followed by the Trident+; thus it is with the Trident II. The Trident II+ (BCM56860) was announced in April 2015.

Key features:
- Made with 28 nm features (vs. 40 nm in predecessor)
- Significantly better VxLAN performance
- Supports eight 100 Gb/s ports
- Built with 10 Gb/s SERDES — requires external gearbox IC (BCM82792) to step up to 25 Gb/s lanes
- Standards-compliant 10GbE/40GbE/100GbE switch SoC
- Single-pass routing in/out of tunnels (RIOT) at 1.28 Tbps
- High-performance tunneling: VXLAN, NVGRE, MPLS, SPB, Geneve
- Broadview instrumentation featuring buffer statistics tracking (BST) and flex counters
- Enhanced ContentAware engines with 4× larger ACL rule databases
- OpenFlow 1.3.1+ support scaling to tens of thousands of flows
- SmartBuffer for dynamic thresholding and lossless service

## See Also

- [Trident+ Architecture](/concepts/trident-plus/) — the predecessor
- [Summary: Buffer Sizing](/summary/)
- [Back to the main buffer table](/)
