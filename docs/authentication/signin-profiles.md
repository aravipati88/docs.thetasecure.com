---
sidebar_position: 1
title: SignIn Profiles
description: Configure sign-in experience and authentication methods
---

# SignIn Profiles

SignIn Profiles define how users authenticate to ThetaSecure — including password requirements, session settings, and IP restrictions.

**Navigation:** Sidebar → Authentication → SignIn Profiles

## Profile Settings

| Setting | Description |
|---------|-------------|
| **Password Policy** | Minimum length, complexity, expiration, history |
| **Session Timeout** | Idle and absolute session timeouts |
| **IP Restrictions** | Allowed/blocked IP ranges |
| **MFA Requirement** | Whether MFA is required for this profile |
| **Lockout Policy** | Max failed attempts before account lock |

## Creating a SignIn Profile

1. Click **+ Add Profile**
2. Configure password policy settings
3. Set session management rules
4. Define IP restrictions (optional)
5. Link an MFA policy (optional)
6. Click **Save**

## Profile Assignment

SignIn Profiles can be assigned to:
- **All users** (default profile)
- **Specific groups** (group-level override)
- **Specific applications** (app-level authentication requirements)

:::tip
Create separate profiles for different security tiers — e.g., a stricter profile for administrators with shorter session timeouts and mandatory MFA.
:::
