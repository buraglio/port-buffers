---
title: "Juniper QFX5120 Series"
layout: page.njk
description: "Buffer notes for the Juniper QFX5120 series (Broadcom Trident 3)"
---

The Juniper QFX5120 series leverages **Broadcom Trident 3** silicon. Tailored towards spine-and-leaf architectures, the switch utilizes its ASIC to deliver robust L2 and L3 throughput along with VXLAN capabilities.

| Field | Value |
|-------|-------|
| Ports | Various: QSFP28, SFP28 (up to 32x 100G) |
| Total Buffer | 32 MB |
| Cell Size | 256 bytes |

## Buffer Architecture

Consistent with Trident 3 capabilities, the QFX5120 offers a **32 MB shared packet buffer**. 
The traffic management system divides the overall buffer memory space into dedicated bounds: 25% of the total buffering is reserved as dedicated capacity for ports, while the remaining pool operates as dynamically shared memory across the ASIC.

This intelligent allocation absorbs both sustained small flows and microburst behavior while optimizing utilization and deterministic network behavior.

## References

- [Juniper QFX5120 Architecture Guide](https://www.juniper.net/us/en/products/switches/qfx-series/qfx5120-ethernet-switch.html)
- [QoS buffer understanding](https://www.juniper.net/documentation/us/en/software/junos/traffic-mgmt-qfx/topics/concept/cos-qfx-series-buffer-management-understanding.html)

## See Also

- [Broadcom Trident 3 Architecture](/concepts/broadcom-trident3/) — ASIC-level buffer details
- [Back to the main buffer table](/)
