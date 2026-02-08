---
sidebar_position: 6
title: Directory Sync
description: Synchronize users from Active Directory, LDAP, and cloud providers
---

# Directory Sync

Directory Sync allows ThetaSecure to automatically import and synchronize user accounts, groups, and organizational units from your existing identity sources such as Active Directory, LDAP, or cloud identity providers.

**Navigation:** Sidebar → Configuration → Directory Sync

## Concepts

### Sync Profiles

A Sync Profile defines the configuration for synchronizing with a specific directory source. It includes connection details, sync scope, mapping rules, and schedule settings.

### Connectors

A Connector is the technical component that establishes and maintains the connection to the directory source. Each Sync Profile requires an associated Connector.

## Setting Up Directory Sync

### Step 1: Create a Connector

1. Navigate to **Configuration → Directory Sync → Connectors**
2. Click **Add Connector**
3. Select the connector type:
   - **Active Directory** — For on-premises AD environments
   - **LDAP** — For generic LDAP directories
   - **Azure AD / Entra ID** — For Microsoft cloud identities
   - **Google Workspace** — For Google-managed identities
   - **SCIM** — For SCIM-compatible identity providers
4. Enter the connection details (server address, port, bind credentials)
5. Test the connection
6. Click **Save**

### Step 2: Create a Sync Profile

1. Navigate to **Configuration → Directory Sync → Sync Profiles**
2. Click **Add Profile**
3. Select the Connector to use
4. Configure the sync scope:
   - **Base DN / OU**: The starting point in the directory tree
   - **User Filter**: LDAP filter to select which users to sync
   - **Group Filter**: Which groups to import
5. Configure attribute mapping (map directory attributes to ThetaSecure fields)
6. Set the sync schedule (e.g., every 15 minutes, hourly, daily)
7. Click **Save & Activate**

### Step 3: Run Initial Sync

1. Click **Sync Now** on the Sync Profile
2. Monitor the sync progress in the activity log
3. Verify imported users in **Identity Management → Users**

## Sync Health Monitoring

The **Operations Dashboard** shows Directory Sync Health in real-time:

- **Green (100% success)**: All sync operations completed successfully
- **Yellow**: Some records failed to sync
- **Red**: Sync connection is down or critically failing

The **Statistics Dashboard** shows the count of active Sync Profiles and Connectors.

## Attribute Mapping

| Directory Attribute | ThetaSecure Field | Required |
|--------------------|--------------------|----------|
| `sAMAccountName` / `uid` | Username | Yes |
| `givenName` | First Name | Yes |
| `sn` | Last Name | Yes |
| `mail` | Email | Yes |
| `memberOf` | Group Membership | No |
| `userAccountControl` | Account Status | No |
| `telephoneNumber` | Phone (for SMS MFA) | No |

## Conflict Resolution

When the same user exists in both ThetaSecure and the directory source:

- **Directory wins** (default): Directory values overwrite local values
- **Local wins**: Local values are preserved
- **Manual review**: Conflicts are flagged for admin review

:::tip
Set your directory source as the authoritative source (Directory wins) to ensure user data stays consistent. Only use "Local wins" for attributes you manage exclusively in ThetaSecure.
:::
