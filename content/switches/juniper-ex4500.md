---
title: "Juniper EX4500"
layout: page.njk
description: "Buffer notes for the Juniper EX4500"
---

The Juniper EX4500 uses Juniper's own ASIC (not Broadcom merchant silicon).

| Field | Value |
|-------|-------|
| Ports | 40 SFP+ plus 8 SFP+ |
| RX Queues | 8Q |
| TX Buffer (max to 1 port) | 230 KB |

The 230 KB maximum per-port buffer is quite limited — this switch is not designed for burst absorption.

[← Back to the main buffer table](/)
