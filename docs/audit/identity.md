---
sidebar_position: 2
title: Identity
description: Audit logs for user, group, and role changes
---

# Identity Audit Logs

Track all changes to identity objects — users, groups, roles, and permissions.

**Navigation:** Sidebar → Audit → Identity

## Tracked Events

| Event | Description |
|-------|-------------|
| **User Created** | New user account provisioned |
| **User Updated** | Profile, status, or role change |
| **User Deleted** | Account deprovisioned |
| **Group Modified** | Members added/removed, group created/deleted |
| **Role Changed** | Role assignments or permission modifications |
| **Password Reset** | Password reset initiated (by user or admin) |
| **Directory Sync** | Users synced from external directory |

## Log Details

Each entry includes: timestamp, actor (who made the change), target (who was changed), action, old value, new value, and source IP.
