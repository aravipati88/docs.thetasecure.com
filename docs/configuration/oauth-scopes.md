---
sidebar_position: 2
title: OAuth Scopes
description: Manage OAuth 2.0 scopes for API access control
---

# OAuth Scopes

OAuth Scopes define the level of access that OAuth clients can request when authenticating through ThetaSecure.

**Navigation:** Sidebar → Configuration → OAuth Scopes

## Default Scopes

| Scope | Description |
|-------|-------------|
| **openid** | Required for OIDC authentication |
| **profile** | User profile information (name, picture) |
| **email** | User email address |
| **groups** | Group membership information |
| **roles** | Role assignments |

## Custom Scopes

Create custom scopes to control fine-grained API access for your applications. Each scope maps to specific data or actions that an OAuth client can request.
