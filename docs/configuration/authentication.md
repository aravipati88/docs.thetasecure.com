---
sidebar_position: 4
title: Authentication
description: Configure sign-in policies and multi-factor authentication
---

# Authentication

Authentication settings control how users prove their identity when signing in to ThetaSecure and accessing protected resources.

**Navigation:** Sidebar → Authentication

## Sign-in Policies

Sign-in policies define the rules and requirements for user authentication.

### Creating a Sign-in Policy

1. Navigate to **Authentication → Sign-in Policies**
2. Click **Add Policy**
3. Configure the policy settings:
   - **Policy Name**: A descriptive name (e.g., "Standard Users", "Privileged Access")
   - **Target**: Which users/groups this policy applies to
   - **Password Requirements**: Minimum length, complexity rules, expiration
   - **Session Settings**: Session timeout, maximum concurrent sessions
   - **IP Restrictions**: Allow or block specific IP ranges
   - **MFA Requirement**: Whether MFA is required, optional, or not applicable
4. Set the policy to **Active** or **Inactive**
5. Click **Save**

### Policy Priority

When multiple sign-in policies apply to a user (e.g., through group membership), the most restrictive policy takes precedence.

## MFA Policies

Multi-Factor Authentication (MFA) policies enforce a second factor of authentication beyond the password.

### Supported MFA Methods

| Method | Description | Best For |
|--------|-------------|----------|
| **TOTP** | Time-based One-Time Password (Google Authenticator, Authy) | General use — most reliable |
| **SMS** | One-time code sent via text message | Users without authenticator apps |
| **Email** | One-time code sent to registered email | Backup method |
| **Push** | Push notification to a registered mobile device | Fastest user experience |

### Configuring an MFA Policy

1. Navigate to **Authentication → MFA Policies**
2. Click **Add MFA Policy**
3. Configure:
   - **Policy Name**: Descriptive identifier
   - **Target Users/Groups**: Who must use MFA
   - **Allowed Methods**: Select one or more MFA methods
   - **Enforcement**: Required on every login, or only from new devices/locations
   - **Grace Period**: Number of days before MFA becomes mandatory for new users
4. Click **Save & Activate**

### MFA Enrollment

When MFA is required, users will be prompted to enroll on their next sign-in. The enrollment flow walks them through setting up their chosen MFA method.

:::tip Security Recommendation
Enable MFA for **all users**, not just administrators. The Security Dashboard will flag when MFA adoption is below 100% and recommend enabling it for remaining users.
:::

## Monitoring Authentication

Use the following dashboard views to monitor authentication activity:

- **Operations Dashboard → Authentication Trends**: Track success/failure rates over time
- **Security Dashboard → MFA Effectiveness**: See which methods perform best at which hours
- **Security Dashboard → Active Sessions**: Monitor current session counts by type
