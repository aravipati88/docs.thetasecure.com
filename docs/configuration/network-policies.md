---
sidebar_position: 5
title: Network Policies
description: Define network-level access control rules
---

# Network Policies

Network policies provide granular, context-aware access control that goes beyond simple user authentication. They evaluate conditions like source network, device compliance, time of day, and user group membership to determine whether access should be granted.

**Navigation:** Sidebar → Access Management → Network Policies

## Policy Structure

Each network policy consists of:

- **Name & Description**: Human-readable identifier
- **Priority**: Evaluation order (lower = evaluated first)
- **Conditions**: One or more rules that must be met
- **Action**: What happens when conditions match (Allow, Deny, Require MFA)
- **Status**: Active or Inactive

## Condition Types

| Condition | Description | Example |
|-----------|-------------|---------|
| **Source IP** | Client's IP address or CIDR range | `192.168.1.0/24` (corporate LAN) |
| **User Group** | Group membership of the authenticating user | `VPN-Users`, `Contractors` |
| **Time of Day** | Time window during which the policy applies | `Mon-Fri 08:00-18:00` |
| **Device Status** | Whether the device is registered/compliant | Registered devices only |
| **Application** | Specific application being accessed | `Corporate VPN` |
| **Authentication Method** | How the user authenticated | Password + MFA |

## Creating a Policy

1. Click **Add Policy**
2. Enter a name and description
3. Set the priority number
4. Add one or more conditions using the condition builder
5. Select the action: **Allow**, **Deny**, or **Step-up MFA**
6. Toggle the policy to **Active**
7. Click **Save**

## Default Policy

The default policy (lowest priority) determines what happens when no other policies match. It is recommended to set the default policy to **Deny** for a zero-trust approach, explicitly allowing access only through configured policies.

## Policy Examples

### Allow Corporate Network, Require MFA for Remote

- **Policy 1** (Priority 1): Source IP = `10.0.0.0/8` → **Allow**
- **Policy 2** (Priority 2): Source IP = Any → **Require MFA**

### Business Hours Only for Contractors

- **Policy 1**: User Group = `Contractors` AND Time = `Mon-Fri 09:00-17:00` → **Allow**
- **Policy 2**: User Group = `Contractors` → **Deny**

:::warning
Test new policies in **Inactive** mode first. Review the audit logs to verify they would produce the expected results before activating.
:::
