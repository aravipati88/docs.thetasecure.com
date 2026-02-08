---
sidebar_position: 4
title: First Steps
description: Initial setup checklist after deploying ThetaSecure
---

# First Steps After Deployment

Once you've signed in to ThetaSecure for the first time, follow this checklist to configure your environment properly.

## Initial Setup Checklist

### 1. Review the Dashboard

Navigate to the **Dashboard** to get an overview of your current environment state. The Operations Dashboard provides real-time health metrics including app usage, directory sync status, and authentication trends. See [Operations Dashboard](../dashboard/operations) for a full walkthrough.

### 2. Configure Directory Sync

If your organization uses Active Directory, LDAP, or a cloud identity provider, set up **Directory Sync** to automatically import and synchronize user accounts.

- Navigate to **Configuration \u2192 Directory Sync**
- Create a new **Sync Profile** for your identity source
- Configure a **Connector** to establish the connection
- Run an initial sync and verify imported users

See [Directory Sync Configuration](../configuration/directory-sync) for detailed instructions.

### 3. Set Up User Roles and Groups

Organize your users by creating appropriate roles and groups:

- Go to **Identity Management \u2192 Groups** to create user groups
- Go to **Identity Management \u2192 Roles** to define roles with specific permission sets
- Assign users to groups and roles based on their responsibilities

### 4. Configure Authentication Policies

Strengthen your security posture by setting up authentication policies:

- Navigate to **Authentication \u2192 Sign-in Policies** to define login rules
- Set up **MFA Policies** to enforce multi-factor authentication
- Choose from TOTP, SMS, Email, or Push notification methods

### 5. Define Network Policies

Control network-level access by configuring access policies:

- Go to **Access Management \u2192 Network Policies**
- Create policies that define which users/groups can access which resources
- Configure RADIUS clients if applicable

### 6. Register Applications

Register the applications your organization uses:

- Navigate to **My Apps** or **Access Management**
- Add Web Apps and Network Apps that your users need access to
- Assign access permissions per application

### 7. Enable Monitoring

Once your environment is configured, use the dashboard to monitor:

- **Operations Dashboard** \u2014 Authentication trends, sync health, failed logins
- **Security Dashboard** \u2014 Identity health score, anomaly detection, privilege creep
- **Statistics Dashboard** \u2014 At-a-glance counts for all managed resources

### 8. Review Security Recommendations

Check the **Security Dashboard** for actionable recommendations. Common first-deployment recommendations include:

- Enabling MFA for all users
- Reviewing privileged access assignments
- Monitoring failed login rates

:::tip Pro Tip
Bookmark the **Security Dashboard** and review it daily during the first week of deployment. This helps you catch configuration issues early and establish a security baseline.
:::

## Next Steps

- [Explore the Operations Dashboard](../dashboard/operations)
- [Configure Identity Management](../configuration/identity-management)
- [Set up Authentication Policies](../configuration/authentication)
