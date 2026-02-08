---
sidebar_position: 3
title: OAuth Clients
description: Register and manage OAuth 2.0 / OIDC client applications
---

# OAuth Clients

OAuth Clients are applications registered to authenticate through ThetaSecure using OAuth 2.0 or OpenID Connect protocols.

**Navigation:** Sidebar → Configuration → OAuth Clients

## Registering a Client

1. Click **+ Add Client**
2. Enter application name and description
3. Set the redirect URIs
4. Choose the grant type (Authorization Code, Client Credentials, etc.)
5. Select allowed scopes
6. Click **Save**

## Client Types

| Type | Use Case |
|------|----------|
| **Confidential** | Server-side apps that can securely store secrets |
| **Public** | Single-page apps, mobile apps (no client secret) |

## Client Credentials

After registration, you'll receive:
- **Client ID** — Public identifier
- **Client Secret** — Confidential key (for confidential clients only)

:::warning
Store client secrets securely. Never expose them in client-side code or version control.
:::
