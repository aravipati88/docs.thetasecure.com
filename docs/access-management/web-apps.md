---
sidebar_position: 1
title: Web Apps
description: Configure web application SSO integrations
---

# Web Apps

Web Apps are browser-based applications integrated with ThetaSecure for Single Sign-On (SSO). Users access these applications through the My Apps portal.

**Navigation:** Sidebar → Access Management → Web Apps

## Supported SSO Protocols

| Protocol | Use Case |
|----------|----------|
| **SAML 2.0** | Enterprise applications (Salesforce, ServiceNow, etc.) |
| **OIDC** | Modern web apps using OpenID Connect |
| **OAuth 2.0** | API-based applications |
| **Bookmark** | Direct links without SSO (for portal convenience) |

## Adding a Web App

1. Click **+ Add Application**
2. Select the SSO protocol
3. Configure the application settings (Entity ID, ACS URL, etc.)
4. Assign users or groups
5. Click **Save**

## Application Assignment

Assign applications to users or groups. Assigned applications appear in the user's **My Apps** portal for one-click access.
