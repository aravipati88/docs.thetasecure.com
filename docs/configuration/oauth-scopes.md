---
sidebar_position: 2
title: OAuth Scopes
description: View and manage OAuth 2.0 scopes that control API access permissions for clients in ThetaSecure.
---

# OAuth Scopes

OAuth Scopes define the specific permissions that OAuth clients can request when accessing ThetaSecure APIs. Each scope represents a granular permission boundary that limits what actions a client can perform on behalf of a user or service account.

Navigate to **Configuration > OAuth Scopes** to view and manage available scopes.

## How Scopes Work

When an OAuth client is created or configured, it is assigned one or more scopes that determine its level of access. During the authorization flow, the client requests these scopes and ThetaSecure validates that the client is permitted to use them. This prevents clients from accessing resources beyond their intended purpose.

Scopes follow a `resource:action` naming convention, making it straightforward to identify what each scope permits at a glance.

## Available Scopes

ThetaSecure includes several built in scopes that cover core platform functionality. These scopes are referenced when configuring OAuth Clients under **Configuration > OAuth Clients**.

| Scope | Description |
|---|---|
| `scim:read` | Read access to user and group identity data through the SCIM API. Allows querying users, groups, and their attributes. |
| `scim:write` | Write access to create, update, and delete users and groups through the SCIM API. |
| `sync:profile:read` | Read access to directory sync profile configurations. Used by sync connectors to retrieve synchronization settings. |
| `connector:read` | Read access to connector configurations and status information. |
| `connector:write` | Write access to create and manage connector configurations. |

:::tip
Follow the principle of least privilege when assigning scopes to OAuth clients. A directory sync connector, for example, needs `scim:read`, `scim:write`, `sync:profile:read`, `connector:read`, and `connector:write`, but a reporting integration might only need `scim:read`.
:::

## Scope Assignment

Scopes are assigned to OAuth clients during client creation or editing. When you create a new client under **Configuration > OAuth Clients**, the Scopes field allows you to select which permissions the client should have. See the [OAuth Clients](./oauth-clients) documentation for details on assigning scopes during client setup.
