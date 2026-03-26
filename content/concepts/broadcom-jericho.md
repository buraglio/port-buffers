---
title: "Broadcom Jericho Architecture"
layout: page.njk
description: "Overview of Broadcom Jericho ASIC buffering"
---

The **Broadcom Jericho** (and advanced DNX family) is the primary merchant silicon used across modern carrier-grade modular edge and core routers, including the Cisco NCS 5500, NCS 5700, and Arista 7280R series.

## Overview
Jericho architecture operates powerfully in chassis environments alongside fabric elements (FE). Its buffering strategy relies heavily on an **ingress-driven Virtual Output Queueing (VOQ)** model separated into two distinct memory pools.

## Buffer Pools
Every Jericho ASIC has two buffer silos:
1. **On-Chip Memory (OCB):** Very small and extremely fast memory embedded in the die. Used for almost all immediate traffic that isn't congested.
    * **Jericho / Jericho+:** ~16 MB on-chip.
    * **Jericho 2:** ~32 MB on-chip.
2. **Off-Chip Memory:** Large arrays of slower but deeply capacious DRAM. Traffic is sent here only when the OCB begins to pile up due to congestion.
    * **Jericho / Jericho+:** Uses external **GDDR5** modules allowing scalable pools of usually **4 GB to 8 GB**.
    * **Jericho 2:** Upgrades to tightly coupled **High Bandwidth Memory (HBM)** (often **8 GB**), granting massive throughput bandwidth to ensure the memory bus isn't swamped by 400G interfaces.

## Virtual Output Queueing (VOQ)
In a Jericho modular system, a packet arriving at ingress doesn't simply cross the fabric to wait at the egress port. It sits in the ingress line card's deep buffer while requesting permission to cross the fabric. It only transmits when the egress port sends a "credit" guaranteeing that space is available.
This guarantees zero fabric congestion and abolishes head-of-line (HOL) blocking.

## References
- [Broadcom Jericho/Jericho2 Product Specifications](https://www.broadcom.com/products/ethernet-connectivity/switching/stradadnxa)
- [Cisco NCS 5500 and 5700 Series Platform White Papers](https://www.cisco.com/c/en/us/products/routers/network-convergence-system-5500-series/white-paper-listing.html)

[← Back to the main buffer table](/)
