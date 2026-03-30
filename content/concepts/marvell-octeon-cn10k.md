---
title: "Marvell OCTEON 10 (CN10K)"
layout: page.njk
description: "Buffer architecture of the Marvell OCTEON 10 CN10K network processor: DDR5-backed software-managed packet buffering, no fixed on-chip SRAM pool."
---

## Marvell OCTEON 10 (CN10K)

The Marvell OCTEON 10 (silicon code CN10K) is a **programmable network processor / DPU** (Data Processing Unit), not a merchant switch ASIC. It combines ARM64 Neoverse N2 CPU cores with network I/O, crypto, and scheduling engines on TSMC 5 nm silicon. Several ODM platforms use it for carrier edge routing, 5G gateways, and uCPE appliances.

| Field | Value |
| --- | --- |
| Silicon family | Marvell OCTEON 10 (CN10K) |
| Process node | TSMC 5 nm |
| CPU cores | 8–36 Arm Neoverse N2 (ARMv9) |
| Packet buffer | **External DDR5 DRAM** (software-managed) |
| On-chip SRAM packet buffer | **Not published** — no public figure from Marvell |
| DDR5 channels | 2 (CN102/CN103) to 12 (DPU400) |
| Max forwarding bandwidth | ~1 Tbps (CN106S integrated switch) / ~200 Gbps (CN103) |
| Target use cases | Carrier edge routing, 5G gateways, uCPE, SmartNIC/DPU |

## Buffer Architecture

CN10K's buffer model is fundamentally different from switch ASICs like Broadcom Trident or Tomahawk, which have a fixed-size on-chip SRAM packet buffer pool.

### How packets are buffered

The CN10K uses three internal blocks to manage packet flow:

- **NIX** (Network Interface eXtension): handles RX/TX queuing and DMA
- **NPA** (Network Pool Allocator): manages pointer pools into external DRAM
- **SSO** (Synchronization and Scheduling Order): event-driven packet dispatch

Packets in flight reside in **external DDR5 DRAM**, not in a fixed on-chip SRAM pool. The NPA maintains rings of free buffer pointers; NIX DMA engines move packets directly into DRAM buffers. The on-chip L2/L3 cache (8–72 MB depending on variant) acts as a hot-path cache for recently accessed buffer regions, not as a dedicated packet FIFO.

**Effective packet buffer capacity = installed DDR5 DRAM**, which is configurable at platform design time:

| Platform | CN10K Variant | DDR5 Capacity | Notes |
| --- | --- | --- | --- |
| Asterfusion ET3608 | CN103XX | 16 GB (expandable to 48 GB) | 2x 100G QSFP28 |
| Asterfusion ET3600 | 2× CN103XX | ~32 GB (16 GB per NP) | 4x 100G QSFP28 |

At 100 Gbps line rate (~12.5 GB/s), even the base 16 GB DDR5 configuration provides over a **1-second buffer** — orders of magnitude more than any on-chip SRAM switch ASIC.

### DDR5 bandwidth headroom

A CN103XX with dual DDR5-5600 channels provides ~89 GB/s of peak memory bandwidth. At 200 Gbps aggregate throughput (~25 GB/s), there is substantial headroom for simultaneous packet reads, writes, and descriptor updates without memory contention.

### Latency tradeoff

The DDR5 buffer model trades latency for capacity. DDR5 access latency is ~80–100 ns, compared to ~5–10 ns for on-chip SRAM. For latency-sensitive ultra-low-latency trading or HPC workloads this matters, but for carrier edge/routing applications where deep buffering and programmability are the priority, DDR5 is the right tradeoff.

## Comparison: CN10K vs. Switch ASICs

| Dimension | Broadcom Tomahawk 5 | Broadcom Jericho 3 | Marvell OCTEON 10 CN103 |
| --- | --- | --- | --- |
| Architecture | Fixed-function switch ASIC | Fixed-function NP (VOQ) | Programmable NP/DPU |
| CPU cores | None | None | Up to 8 Neoverse N2 |
| On-chip SRAM packet buffer | 165.2 MB | ~48 MB OCB | Not published |
| Off-chip buffer | None | Up to 32 GB HBM3 | 16–48 GB DDR5 (external) |
| Max bandwidth | 51.2 Tbps | 3.2 Tbps | ~200 Gbps |
| Target | Hyperscale DC switching | SP core / deep buffer | Carrier edge / uCPE / DPU |
| Protocol programmability | Limited (P4 pipeline) | Limited | Full (DPDK / VPP / eBPF) |

## Data Quality Note

Marvell does not publish an on-chip packet buffer SRAM size (in MB) for any CN10K variant in open product documentation. The L2/L3 cache figures in product briefs (8–72 MB) are CPU caches, not packet buffer pools. All buffer capacity figures on this site for CN10K platforms refer to the external DDR5 DRAM size, which is confirmed from platform vendor specifications.

## See Also

- [Deep Buffer concepts](/concepts/deep-buffer/)
- [Broadcom Jericho 3 (HBM3 deep buffer)](/concepts/broadcom-jericho3/)
- [Broadcom Qumran (access/aggregation VOQ)](/concepts/broadcom-qumran2c/)

[← Back to the main buffer table](/)
