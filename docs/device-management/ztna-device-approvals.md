---
sidebar_position: 2
title: ZTNA Device Approvals
description: Review and approve device registration requests
---

# ZTNA Device Approvals

The Device Approvals queue shows devices awaiting administrator approval before they can access protected resources.

**Navigation:** Sidebar → Device Management → ZTNA Device Approvals

## Approval Queue

When a user registers a new device and automatic approval is not enabled, the device appears in this queue with:

| Field | Description |
|-------|-------------|
| **Device Name** | Hostname of the device |
| **Requested By** | User who registered the device |
| **Device Type** | Desktop, Laptop, Mobile |
| **OS** | Operating system and version |
| **Request Date** | When the registration was submitted |
| **Posture** | Initial device posture assessment |

## Approval Actions

| Action | Result |
|--------|--------|
| **Approve** | Device is registered and can access resources per policy |
| **Reject** | Device registration is denied |
| **Request Info** | Ask the user for additional information |

## Auto-Approval Rules

Configure auto-approval in **Configuration → Security** to automatically approve devices that meet specific criteria:

- Trusted operating systems (e.g., managed Windows, macOS)
- Corporate-owned devices
- Devices meeting minimum posture requirements

:::tip
For initial deployment, consider starting in **monitor-only mode** — approve all devices but log posture assessments. This helps establish a baseline before enforcing strict device policies.
:::
