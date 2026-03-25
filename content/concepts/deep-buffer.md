---
title: "Large Queue 1RU Switches (Deep Buffer)"
layout: page.njk
description: "Switches using external DRAM for very large packet buffers"
---

These 1RU switches use memory **external to their switch chip(s)** to provide deep buffers. Nothing should be read into the relative buffer depth of the Arista and Force10 switches. Once the decision is made to host packet memory off the switch chip, it is easy to provide large amounts of memory. To get sufficient speed, the design will probably use several interleaved banks — and given chip densities, it becomes difficult to do this without providing a lot of RAM.

For example, Arista claims 50 ms buffers are simultaneously available for each of its 48 GigE ports. That takes 300 MB. Yet the 7048 has more than twice that. Something beyond buffer requirements is acting here.

## When to Use Deep Buffer Switches

If your high-performance computing environment includes serving Gb/s-connected servers from your 10 Gb/s WAN feed, either the Force10 S60 or the Arista 7048 will assure that you can feed out line-rate arrivals through the downward speed step without spilling packets.

A less charitable perspective: the ship has sailed for Gb/s-connected devices and full players should get better computers.

## Switches in This Category

| Switch | Total Buffer | TX Buffer |
|--------|-------------|-----------|
| Force10 S60 | 1,250 MB | "enough" |
| Arista 7048 | 768 MB | GOBBS |

See the [main table](/) for full details.

## See Also

- [Summary: Buffer Sizing](/summary/)
- [Microbursts](/concepts/microburst/)
- [Back to the main buffer table](/)
