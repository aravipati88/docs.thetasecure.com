---
sidebar_position: 1
title: Users
description: Manage user accounts, profiles, and lifecycle
---

# Users

The Users module allows administrators to manage the complete user lifecycle — from provisioning and activation to suspension and deprovisioning.

**Navigation:** Sidebar → Identity Management → Users

## User List

The Users page displays a searchable, filterable table of all user accounts in ThetaSecure. Key columns include:

| Column | Description |
|--------|-------------|
| **Username** | Unique login identifier |
| **Display Name** | Full name of the user |
| **Email** | Primary email address |
| **Status** | Account status (Active, Inactive, Locked, Suspended, Pending) |
| **Role** | Assigned role (Super Admin, Administrator, Basic User, etc.) |
| **Last Login** | Timestamp of the most recent authentication |
| **Source** | Origin of the account (Local, Directory Sync, SCIM) |

## User Statuses

| Status | Description |
|--------|-------------|
| **Active** | User can log in and access assigned resources |
| **Inactive** | Account exists but has not been activated |
| **Locked** | Temporarily locked due to failed login attempts |
| **Suspended** | Administratively disabled — user cannot log in |
| **Pending** | Awaiting email verification or admin approval |

## Creating a User

1. Click **+ Add User** in the top-right corner
2. Fill in required fields: Username, Email, First Name, Last Name
3. Assign a role and optionally add to groups
4. Set initial password or send an activation email
5. Click **Save**

## Editing a User

Click on any user row to open their profile. From the user detail page you can:

- Update profile information (name, email, phone)
- Change role assignment
- Add/remove group memberships
- Reset password or send password reset link
- View login history and session activity
- Lock, suspend, or deprovision the account

## Bulk Operations

For managing multiple users at once:

- **Import** — Bulk import users via CSV
- **Export** — Export user list to CSV for reporting
- **Bulk status change** — Select multiple users to activate, suspend, or deprovision

:::tip Best Practice
Regularly review user accounts to identify stale or inactive accounts. The Identity Security Score dashboard flags accounts inactive for 90+ days as a security risk.
:::
