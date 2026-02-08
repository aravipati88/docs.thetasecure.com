---
sidebar_position: 2
title: Device Management
description: Register and manage endpoint devices for access control
---

# Device Management

Device Management allows you to register, monitor, and enforce policies on endpoint devices that access your organization's resources through ThetaSecure.

**Navigation:** Sidebar → Device Management

## Overview

Device-based access control adds an additional layer of security by ensuring that only approved devices can authenticate. This is especially important for organizations with BYOD policies or remote workforces.

## Registered Devices

View all devices that have been registered with ThetaSecure:

- **Device Name**: User-friendly device identifier
- **Device Type**: Desktop, laptop, mobile, tablet
- **OS**: Operating system and version
- **Status**: Approved, Pending Approval, Blocked
- **Last Seen**: Timestamp of last authentication from this device
- **Owner**: User associated with the device

## Device Approval Workflow

1. A user attempts to authenticate from an unregistered device
2. The device is added to the **Pending Approval** queue
3. An administrator reviews the device details
4. The admin either **Approves** or **Blocks** the device
5. Approved devices are added to the registered list

## Device Policies

Configure rules for how devices interact with your access policies:

- **Require device registration** — Block authentication from unregistered devices
- **Auto-approve trusted OS versions** — Automatically approve devices meeting minimum OS requirements
- **Block jailbroken/rooted devices** — Deny access from compromised devices
- **Device inactivity timeout** — Remove devices that haven't been seen in a configurable number of days

:::tip
Start with device registration in "monitor only" mode to build your device inventory before switching to enforcement mode.
:::
