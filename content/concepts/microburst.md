---
title: "Microbursts"
layout: page.njk
description: "What microbursts are, why they happen, and how packet buffers relate"
---

**Jim Warner's definition: A microburst is a burst of frames too short to be measured by polling.**

At its genesis in 1990, SNMP designers went to great pains to keep the front-end data collection agent as simple as possible. SNMP started with zero market share. If the client was not lightweight, it would have been relegated to the dustbin of ideas that were too expensive for the real world. That required a polling model: agent gets a question; agent answers question. No state retained.

Polling is inefficient. And that really comes home when you attempt to run the poll rate up high enough to improve time resolution to see short events.

---

Nice paper with empirical data on bursts in the data center:

[Wren: Measuring and Understanding High-Speed Networks (Microsoft Research)](http://research.microsoft.com/pubs/136788/wren09.pdf)

---

Arista has an article on microbursts written in response to a Miercom test report they did not like. They also published a [white paper on microbursts](/assets/pdfs/AristaMicrobursts.pdf) explaining the phenomenon.

## Discussion Excerpt (from the Cisco-NSP mailing list, April 2009)

> **Dale Shaw** writes:
>
> Is there a universally agreed upon definition for a 'microburst'?
>
> Is there a defined time measurement — 5ms, 10ms, 50ms, 100ms, 1000ms — during which a certain bps or pps threshold must be met/exceeded?
>
> Does anyone have any tips for troubleshooting microbursts, particularly in relation to the c7200 platform exhibiting "no buff" drops? We're going to capture some data (w/SPAN on an adjacent switch)...

*See the [full NANOG thread](/concepts/nanog-thread/) for the complete discussion.*

## Key Takeaways

- Microbursts are invisible to SNMP polling at standard intervals
- They cause packet drops even when average utilization looks fine
- Hardware buffer depth determines how long a burst can be absorbed before drops occur
- The right buffer size depends on your RTT and link speed mix, not just port count

## See Also

- [Summary: Buffer Sizing](/summary/)
- [Back to the main buffer table](/)
