---
sidebar_position: 4
title: Permissions
description: Granular permission management for fine-tuned access control
---

# Permissions

Permissions are the most granular level of access control in ThetaSecure. Each permission grants the ability to perform a specific action on a specific resource.

**Navigation:** Sidebar → Identity Management → Permissions

## Permission Format

Permissions follow the format: `module.resource.action`

Examples:
- `identity.users.create` — Create new user accounts
- `identity.users.read` — View user profiles
- `access.policies.update` — Modify access policies
- `audit.logs.export` — Export audit logs

## Permission Categories

Permissions are organized by module:

| Module | Description |
|--------|-------------|
| **Identity** | User, group, role, and permission management |
| **Access** | Application, policy, and RADIUS management |
| **Authentication** | Sign-in and MFA configuration |
| **Configuration** | System settings, OAuth, VPN, and more |
| **Audit** | Log viewing and export |
| **Device** | Device registration and approval |

## Viewing Permissions

The Permissions page lists all available permissions with their associated module, resource, action, and description. Use the search and filter controls to find specific permissions.

## Assigning Permissions

Permissions are assigned indirectly through **Roles**. To grant a permission to a user:

1. Create or edit a Role in **Identity Management → Roles**
2. Select the desired permissions
3. Assign the Role to the user

:::tip
ThetaSecure has 173+ granular permissions. Rather than assigning permissions individually, use the built-in roles or create custom roles that bundle related permissions together.
:::
