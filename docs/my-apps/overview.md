---
sidebar_position: 1
title: My Apps
description: Access your assigned web applications and remote servers
---

# My Applications

The My Apps page is your personal application launchpad — a centralized portal to access all web applications and remote servers assigned to you by your administrator.

**Navigation:** Sidebar → My Apps

## Overview

The My Apps dashboard displays summary counters at the top:

| Metric | Description |
|--------|-------------|
| **Total** | Total number of applications assigned to you |
| **Web Apps** | Web applications accessible via SSO (SAML, OIDC, OAuth) |
| **Servers** | Remote servers available for secure access |

## Searching & Filtering

Use the search bar to quickly find applications by name. Additional filters include:

- **All Apps / Web Apps / Servers** — Filter by application type
- **All Types** — Filter by SSO protocol type
- **Grid / List view** — Toggle between card and list display

## Accessing Applications

Click on any assigned application to launch it. ThetaSecure handles the authentication automatically via the configured SSO protocol, providing a seamless single sign-on experience.

:::tip
If you see "No applications assigned," contact your administrator to request access to the applications you need.
:::

## For Administrators

To assign applications to users:

1. Navigate to **Access Management → Web Apps** or **Network Apps**
2. Configure the application with the appropriate SSO protocol
3. Assign users or groups to the application
4. Users will see the application appear in their My Apps portal
