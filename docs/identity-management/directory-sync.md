---
sidebar_position: 5
title: Directory Sync
description: Synchronize users and groups from external directories
---

# Directory Sync

Directory Sync allows you to import and synchronize users and groups from external identity providers, keeping ThetaSecure in sync with your organization's directory.

**Navigation:** Sidebar → Identity Management → Directory Sync

## Supported Directories

| Directory | Protocol |
|-----------|----------|
| **Active Directory** | LDAP/LDAPS |
| **Azure AD** | Microsoft Graph API |
| **Google Workspace** | Google Directory API |
| **LDAP** | Standard LDAP |
| **SCIM** | SCIM 2.0 |

## Key Concepts

- **Sync Profile** — Defines what to sync (scope, filters, attribute mapping, schedule)
- **Connector** — The connection to your external directory (URL, credentials, base DN)

## Setting Up Directory Sync

1. **Create a Connector** — Configure connection details for your directory
2. **Create a Sync Profile** — Define scope, attribute mapping, and schedule
3. **Run Initial Sync** — Perform the first full synchronization
4. **Monitor Health** — Track sync status on the Access & Permissions Dashboard

## Sync Health Monitoring

The Access & Permissions Dashboard shows:

- **User Lifecycle Overview** — Provisioned, Active, Inactive, Suspended, Deprovisioned counts
- **Conversion Rate** — Ratio of active users to provisioned users
- **Directory Sync Health** — Connector status and synced user count
- **Sync Status** — Current sync job state (Running, Stopped, Failed)

## Attribute Mapping

| Directory Attribute | ThetaSecure Field |
|-------------------|------------------|
| sAMAccountName | Username |
| givenName | First Name |
| sn | Last Name |
| mail | Email |
| memberOf | Groups |

:::tip
Set up automatic sync schedules to ensure ThetaSecure always reflects your directory's current state. A daily sync is recommended for most environments.
:::
