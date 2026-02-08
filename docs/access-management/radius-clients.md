---
sidebar_position: 4
title: RADIUS Clients
description: Configure RADIUS client devices for network authentication
---

# RADIUS Clients

RADIUS Clients are network devices (VPN gateways, Wi-Fi controllers, switches) that authenticate users through ThetaSecure's RADIUS server.

**Navigation:** Sidebar → Access Management → RADIUS Clients

## Registering a RADIUS Client

1. Click **+ Add RADIUS Client**
2. Enter the client name and description
3. Configure the client IP address
4. Set the shared secret
5. Select the authentication profile
6. Click **Save**

## Configuration Fields

| Field | Description |
|-------|-------------|
| **Client Name** | Friendly name for the device |
| **IP Address** | IP of the RADIUS client device |
| **Shared Secret** | Pre-shared key for RADIUS communication |
| **Authentication Profile** | Which sign-in policy to apply |

:::warning
Rotate RADIUS shared secrets regularly (at least every 90 days) and use strong, randomly generated values.
:::
