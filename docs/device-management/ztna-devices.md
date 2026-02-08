---
sidebar_position: 1
title: ZTNA Devices
description: Manage registered devices for Zero Trust Network Access
---

# ZTNA Devices

The ZTNA Devices page provides a centralized view of all devices registered for Zero Trust Network Access. Device posture is evaluated as part of access policy decisions.

**Navigation:** Sidebar → Device Management → ZTNA Devices

## Device List

View all registered devices with key attributes:

| Column | Description |
|--------|-------------|
| **Device Name** | Hostname or friendly name |
| **Device Type** | Desktop, Laptop, Mobile, Tablet |
| **Operating System** | OS name and version |
| **Status** | Approved, Pending, Blocked |
| **Last Seen** | Last check-in timestamp |
| **Owner** | Associated user |
| **Compliance** | Device posture compliance status |

## Device Posture

ThetaSecure evaluates device health as part of zero-trust access decisions:

- **OS Version** — Meets minimum version requirements
- **Encryption** — Disk encryption enabled
- **Firewall** — Host firewall active
- **Antivirus** — AV software running and up-to-date
- **Jailbreak/Root** — Device is not jailbroken or rooted

## Managing Devices

- **Approve** — Allow device to access resources
- **Block** — Deny access from this device
- **Revoke** — Remove device registration
- **View Details** — See full device posture report

:::tip
Combine device posture checks with access policies for true zero-trust security. For example, require devices to have encryption enabled before accessing sensitive applications.
:::
