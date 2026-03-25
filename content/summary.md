---
title: "Summary: Buffer Sizing for Networking"
layout: page.njk
description: "Overview of packet buffer requirements and tradeoffs in campus and data center networks"
---

Probably the best place to start is with the problem: [microbursts](/concepts/microburst/).

If packet buffers can be provided at the point where packets get delayed, it may be possible to queue packets and deliver them when a burst has subsided. Without a buffer, those packets would be dropped.

The easiest-to-understand *cause* of short-term packet bunching is where a switch is being used to slow a packet stream. For example, data might arrive from the WAN on a 40 Gb/s connection while being forwarded to an end host at 10 Gb/s. This is *short term* because the burst can be no longer than the TCP window size. If packets are coming in faster than they can be fed out, some buffer can help.

Bursts can also be caused by cross traffic. If some packets in a stream are slowed down, the packets behind may catch up. Packets from a flow that started out evenly spaced will arrive in clumps because of the action of cross traffic. The more cross traffic, the more clumping.

Too much buffer can, it turns out, also cause a problem.

If two 10G-connected researchers send streams off your campus at the same time, and your off-campus connection is 10G, you don't have a *microburst* problem — you have oversubscription. Buffers won't help.

## Network vs. Data Center Requirements

Alan Weckel from Del'Oro Group made the point that 10 GigE is driven by the data center. The needs of the network are just a footnote. There are lots of switches out there that are designed to solve someone else's problem.

- **Switches designed for data center interconnects** will have ultra-low latency. RTTs are short so buffer requirements are minimal. Flow control or priority flow control would be useful.
- **Switches designed to cope with *incast* in the data center** will have more generous buffers. These switches are for data center scenarios with high East-West traffic. You can easily kick the price of a switch up by 10×. But it will be a nice switch.
- **Switches designed for the LAN access layer** may have multi-service features like QoS. Manufacturers will emphasize the number of different queues to sort out video, voice, and data.

## When Buffers Matter

Writing a purchase order for large buffers makes sense where there is a down-speed step. It makes sense in the core of the network where cross traffic can cause packets to bunch up. But in the campus, big expensive buffers may not have a payback. Ability to buffer 6 MB is sufficient for a 10 Gb/s sender and a 1 Gb/s receiver.

There is an analogy to adding RAM to a computer. A computer that does not have sufficient RAM to build a working set of memory pages will thrash its swap files. But once you have added enough RAM to get a working set, adding more will not improve performance.

## See Also

- [Microbursts](/concepts/microburst/) — what they are and why they matter
- [Trident+ Architecture](/concepts/trident-plus/) — Broadcom's merchant silicon
- [Trident II Architecture](/concepts/trident-ii/) — the follow-on chip
- [Deep Buffer Switches](/concepts/deep-buffer/) — large queue 1RU designs
- [Back to the main buffer table](/)

---
*Source: Jim Warner, UCSC. Information is by rumor, innuendo, and extrapolation.*
