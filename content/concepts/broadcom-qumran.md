---
title: "Broadcom Qumran Architecture"
layout: page.njk
description: "Overview of Broadcom Qumran ASIC buffering"
---

The **Broadcom Qumran** family is tailored for access and aggregation routers. While it shares DNX architecture roots with Jericho, Qumran ASICs are typically deployed in fixed-form platforms.

## Overview
Unlike Jericho, which is suited for fabric-connected modular chassis, Qumran often handles the entire routing pipeline on a single chip, though some variants can be fabric-attached.
It is widely utilized in equipment taking 100G/400G down to 1G/10G endpoints layer, such as the Cisco NCS 5000, NCS 540, and various Nokia platforms.

## Generations and Buffer Characteristics
- **Qumran-MX / AX:** Standardly equipped with an integrated **16 MB** to **32 MB** on-chip packet buffer. Deployed in environments requiring dense 10G/100G MAC capabilities but fewer prolonged microbursts (e.g., Cisco NCS 5000).
- **Deep Buffer Variants:** Some Qumran families provide external DRAM integration—scaling buffer pools into the **gigabytes** range (e.g. up to 3 GB in the Cisco NCS 540) to effortlessly accommodate speed mismatches where large inbound 100G streams must squeeze down into 1G or 10G tail circuits.
- **Virtual Output Queueing (VOQ):** Most Qumran deep-buffer chips employ VOQ scheduling to ensure fairness and prevent head-of-line blocking under extreme congestion.

[← Back to the main buffer table](/)
