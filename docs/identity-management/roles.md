---
sidebar_position: 3
title: Roles
description: Define and manage roles for role-based access control (RBAC)
---

# Roles

Roles define what actions users can perform within ThetaSecure. The platform uses Role-Based Access Control (RBAC) to ensure users have only the permissions they need.

**Navigation:** Sidebar → Identity Management → Roles

## Default Roles

ThetaSecure comes with the following built-in roles:

| Role | Description | Permission Level |
|------|-------------|-----------------|
| **Super Admin** | Full system access — all modules, all actions | ~170+ permissions |
| **Administrator** | Administrative access with some restrictions | High |
| **Security Admin** | Security-focused operations and monitoring | Moderate-High |
| **Auditor** | Read-only access for compliance and audit review | Read-Only |
| **Storage Admin** | Storage and file management | Limited |
| **User Manager** | User lifecycle management | Moderate |
| **Group Manager** | Group administration | Limited |
| **Basic User** | Standard user with minimal platform permissions | Minimal |

## Creating a Custom Role

1. Click **+ Add Role**
2. Enter a role name and description
3. Select permissions from the available permission categories
4. Click **Save**

## Permissions per Role

The Access & Permissions Dashboard visualizes permission distribution across roles as a horizontal bar chart. Use this to identify roles that may have excessive permissions and need tightening.

:::warning
Follow the **principle of least privilege** — assign each role only the minimum permissions required to perform its function. Review role permissions quarterly.
:::
