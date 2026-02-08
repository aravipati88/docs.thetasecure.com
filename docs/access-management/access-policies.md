---
sidebar_position: 5
title: Access Policies
description: Define conditional access rules for resource protection
---

# Access Policies

Access Policies are conditional rules that determine who can access what resources, from where, and under what conditions. Policies are evaluated in priority order.

**Navigation:** Sidebar → Access Management → Access Policies

## Policy Structure

| Component | Description |
|-----------|-------------|
| **Name** | Policy identifier |
| **Priority** | Evaluation order (lower number = higher priority) |
| **Conditions** | Rules that must be met |
| **Action** | Allow or Deny |
| **Status** | Active or Inactive |

## Condition Types

| Condition | Description |
|-----------|-------------|
| **Source IP** | Match by IP address or CIDR range |
| **User Group** | Match by group membership |
| **Time of Day** | Restrict to business hours or specific windows |
| **Device Status** | Require approved/compliant devices |
| **Application** | Apply to specific applications |
| **Auth Method** | Require specific authentication (e.g., MFA) |

## Creating a Policy

1. Click **+ Add Policy**
2. Set the policy name and priority
3. Define one or more conditions
4. Choose the action (Allow/Deny)
5. Click **Save**

:::tip Zero Trust
Set the default (lowest priority) policy to **Deny** for a zero-trust posture. Then create explicit Allow policies for authorized access scenarios.
:::
