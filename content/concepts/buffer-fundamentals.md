---
title: "Buffer Fundamentals"
layout: page.njk
description: "What packet buffers are, how Virtual Output Queues work, why microbursts matter, and where to learn more about network performance tuning"
---

Packet buffers are the on-chip or off-chip memory a network device uses to hold frames temporarily when output demand exceeds the available link rate. Without buffers, any instantaneous mismatch between input and output rates results in a dropped packet. With buffers, the device can absorb a burst and drain it across the output link over time.

---

## What Is a Packet Buffer?

Every port on a switch or router is connected to a forwarding ASIC. When packets arrive faster than they can be forwarded — because multiple input ports are sending to the same output port, because the output link is slower than the input, or because a scheduler is holding the packet while it services higher-priority traffic — the ASIC places the packet into a queue backed by on-chip or external DRAM.

**Key properties:**

- **Size** — measured in bytes (MB or GB). Larger buffers absorb longer or larger bursts.
- **Shared vs. dedicated** — shared buffers are pooled across all ports; dedicated buffers are statically partitioned per port. Shared models are more efficient but require dynamic allocation logic.
- **Ingress vs. egress** — some architectures buffer at the ingress (before forwarding decisions), some at egress (after), and some at both stages.
- **On-chip vs. off-chip** — on-chip (HBM or SRAM embedded in the forwarding ASIC) is faster and lower-latency; off-chip DRAM provides higher capacity but adds latency.

The size of the buffer relative to the bandwidth-delay product of the traffic being carried determines how much of a burst can be absorbed before drops occur.

---

## Virtual Output Queues (VoQ)

In a shared-buffer switch, a slow or congested output port can prevent packets for other output ports from being forwarded — this is **head-of-line (HOL) blocking**. A packet destined for a healthy port gets stuck behind a packet destined for a congested one.

**VoQ (Virtual Output Queues)** solves this by maintaining separate ingress queues *per egress destination*:

- Each ingress port holds a separate queue for each output port
- Traffic destined for a congested output waits only in its own queue
- Traffic destined for uncongested outputs proceeds immediately

The tradeoff: VoQ requires N² queues for N ports, which increases state complexity and memory requirements. It is most common in chassis-based systems with a switch fabric (e.g., Nokia 7250 IXR, Broadcom Jericho/Qumran family) where the fabric separates ingress and egress processing.

---

## Microbursts

A **microburst** is a burst of traffic so short that it is invisible to standard polling-based monitoring but long enough to fill buffers and cause drops.

SNMP counters are sampled at intervals — typically every 30 or 60 seconds. A burst that lasts 10 milliseconds and drives a port to line rate will not register as high utilization in a 30-second average, but it will cause drops if the buffer cannot absorb it.

**Why they happen:**

- Many flows synchronized by a common trigger (e.g., a completed database query fans out responses to many clients simultaneously)
- Speed mismatch at aggregation points (many 10G input ports feeding a single 100G uplink)
- TCP ACK compression or retransmit storms
- Scheduler dequeuing creating bursts on the output side

**Why they matter:**

- A device with a shallow buffer (a few MB) on a 100G port has absorption capacity measured in microseconds — a burst filling the port for 1ms can exhaust the buffer entirely
- Drops during microbursts appear as random packet loss in application traces, not as congestion in utilization graphs
- Hardware buffer depth is the primary tool for dealing with microbursts; software-side solutions (WRED, shaping) are insufficient for sub-millisecond events

**Relationship to RTT:** The "right" buffer size for a given link is often cited as proportional to the bandwidth-delay product: `buffer = bandwidth × RTT`. A 100G link with a 10ms RTT requires ~125 MB to keep a TCP flow fully utilized through a single-packet loss event. Most datacenter switches offer far less.

See the [Microbursts concept page](/concepts/microburst/) for further discussion and the original Jim Warner definition.

---

## Further Reading: Network Performance Tuning

The ESnet **fasterdata** knowledge base is a comprehensive resource for host and network performance tuning, including buffer sizing guidance, TCP tuning, and throughput testing:

- [fasterdata.es.net](https://fasterdata.es.net) — ESnet's network performance wiki

Key topics covered there relevant to packet buffers and throughput:

- TCP buffer sizing (`/host/tcp-tuning/`)
- Network performance troubleshooting (`/network/`)
- Throughput testing tools and methodology (`/performance-testing/`)
- Host tuning for high-speed transfers (`/host/`)

The fasterdata guides are maintained by ESnet (the U.S. Department of Energy science network) and are widely used as the reference for high-performance networking in research and education environments.

---

## See Also

- [Microbursts](/concepts/microburst/) — definition, examples, and the Jim Warner SNMP argument
- [Deep Buffer](/concepts/deep-buffer/) — when and why large buffers matter
- [Nokia SR Platform (FP4/FP5)](/concepts/nokia-sr-platform/) — an example of deep, fully shared buffer architecture
- [Nokia Access/Aggregation Platforms](/concepts/nokia-access-agg/) — VoQ and fixed-segment architectures in practice
- [Back to the main buffer table](/)
