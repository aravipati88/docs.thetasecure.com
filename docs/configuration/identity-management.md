---
sidebar_position: 1
title: Identity Management
description: Managing users, groups, roles, and permissions
---

# Identity Management

Identity Management is the foundation of ThetaSecure. This module allows you to create, organize, and control all user identities within your organization.

**Navigation:** Sidebar → Identity Management

## Users

### Viewing Users

The Users page displays all user accounts in your ThetaSecure instance, showing key details including username, display name, email, status (Active/Inactive), and last login time.

### Creating a New User

1. Navigate to **Identity Management → Users**
2. Click **Add User**
3. Fill in the required fields: Username, First Name, Last Name, Email
4. Set an initial password or select "Send password reset email"
5. Assign the user to one or more **Groups** and **Roles**
6. Click **Save**

### User Status

| Status | Description |
|--------|-------------|
| **Active** | User can authenticate and access assigned resources |
| **Inactive** | User account is disabled; authentication attempts will be rejected |
| **Locked** | User account is temporarily locked due to failed login attempts |
| **Pending** | User has been created but has not completed initial setup |

## Groups

Groups enable you to organize users and apply policies at scale rather than per-individual.

### Creating a Group

1. Navigate to **Identity Management → Groups**
2. Click **Add Group**
3. Enter a group name and description
4. Add members by searching and selecting users
5. Assign roles or application access to the group
6. Click **Save**

### Group-Based Access

When a user is added to a group, they automatically inherit all roles, permissions, and application access assigned to that group. Removing a user from a group revokes those inherited privileges.

## Roles

Roles define a set of permissions that can be assigned to users or groups.

### Default Roles

ThetaSecure comes with several pre-configured roles:

| Role | Description |
|------|-------------|
| **Super Administrator** | Full access to all features and settings |
| **Administrator** | Manage users, policies, and configurations |
| **Operator** | Monitor dashboards and manage day-to-day operations |
| **Viewer** | Read-only access to dashboards and reports |

### Creating Custom Roles

1. Navigate to **Identity Management → Roles**
2. Click **Add Role**
3. Name the role and provide a description
4. Select permissions from the available permission list
5. Click **Save**

## Permissions

Permissions are the granular access controls assigned to roles. ThetaSecure provides 173+ individual permissions across all modules.

Permissions follow the format: `module.resource.action` (e.g., `identity.users.create`, `dashboard.security.view`).

:::caution Principle of Least Privilege
Always assign the minimum set of permissions required for a role. Regularly review and audit role permissions using the Privilege Creep Analysis on the Security Dashboard.
:::
