---
sidebar_position: 2
title: Groups
description: Organize users into groups for simplified access management
---

# Groups

Groups allow you to organize users into logical collections for simplified access management. Instead of assigning permissions to individual users, assign them to groups and manage access at scale.

**Navigation:** Sidebar → Identity Management → Groups

## Group List

View all configured groups with key details:

| Column | Description |
|--------|-------------|
| **Group Name** | Display name of the group |
| **Description** | Purpose or scope of the group |
| **Members** | Number of users in the group |
| **Source** | Local or synced from directory |

## Creating a Group

1. Click **+ Add Group**
2. Enter a group name and description
3. Add members by searching for users
4. Click **Save**

## Group-Based Access

Groups integrate with other ThetaSecure modules:

- **Access Policies** — Create rules that apply to entire groups (e.g., "Engineering group can access DevOps tools")
- **Application Assignment** — Assign web apps and network apps to groups instead of individual users
- **Authentication Policies** — Apply sign-in and MFA policies at the group level

:::tip
Use groups to mirror your organizational structure (departments, teams, projects). When users change teams, simply update their group membership rather than reconfiguring individual permissions.
:::
