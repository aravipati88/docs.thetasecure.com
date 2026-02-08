---
sidebar_position: 3
title: SignIn Policies
description: Define conditional rules for the authentication flow
---

# SignIn Policies

SignIn Policies define conditional authentication rules that are evaluated during login. They determine which SignIn Profile and MFA Profile apply based on contextual factors.

**Navigation:** Sidebar → Authentication → SignIn Policies

## Policy Evaluation

Policies are evaluated in priority order during login. The first matching policy determines the authentication experience:

1. Check user identity and group membership
2. Evaluate contextual conditions (IP, device, time)
3. Apply the matched SignIn Profile and MFA Profile
4. Proceed with authentication

## Policy Configuration

| Field | Description |
|-------|-------------|
| **Name** | Policy identifier |
| **Priority** | Evaluation order |
| **Conditions** | Contextual rules (IP range, group, device type, time) |
| **SignIn Profile** | Which authentication profile to use |
| **MFA Profile** | Which MFA profile to enforce |
| **Status** | Active or Inactive |

## Common Policy Patterns

- **Corporate network** — Skip MFA for trusted office IPs, require MFA for all others
- **Admin access** — Enforce strongest MFA for administrator roles
- **Contractor access** — Restrict to business hours with mandatory MFA
- **Mobile devices** — Require additional verification for mobile logins

:::tip
Test new policies in **Inactive** mode first. Monitor the Audit logs to verify the policy would match expected scenarios before activating it.
:::
