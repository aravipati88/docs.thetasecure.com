---
sidebar_position: 3
title: Access Management
description: Configure application access and network policies
---

# Access Management

Access Management controls which users and groups can access specific applications and network resources. It ties together identity, authentication, and network policies.

**Navigation:** Sidebar → Access Management

## My Apps

The **My Apps** section lists all applications integrated with ThetaSecure. Applications are categorized as:

### Web Apps

Browser-based applications that use ThetaSecure for Single Sign-On (SSO). Configure these with SAML 2.0, OAuth 2.0, or OpenID Connect.

### Network Apps

Network-level applications protected by RADIUS authentication. These include VPN gateways, Wi-Fi networks, and other network infrastructure.

To add an application:

1. Navigate to **Access Management → Applications**
2. Click **Add Application**
3. Select the application type (Web or Network)
4. Configure the connection settings (SSO protocol, RADIUS secret, etc.)
5. Assign user groups that should have access
6. Click **Save & Activate**

## Network Policies

Network policies define access rules based on network context (IP ranges, device types, time of day, etc.).

### Creating a Network Policy

1. Navigate to **Access Management → Network Policies**
2. Click **Add Policy**
3. Define the policy conditions:
   - **Source IP range**: Restrict access to specific networks
   - **User groups**: Apply to specific groups
   - **Time restrictions**: Limit access to business hours
   - **Device requirements**: Require registered or compliant devices
4. Set the action: **Allow**, **Deny**, or **Require MFA**
5. Set the policy priority (lower number = higher priority)
6. Click **Save**

### Policy Evaluation Order

Policies are evaluated in priority order. The first matching policy determines the outcome. If no policies match, the default action (configurable) applies.

## RADIUS Clients

RADIUS clients are network devices (switches, wireless controllers, VPN concentrators) that authenticate users through ThetaSecure's RADIUS server.

### Registering a RADIUS Client

1. Navigate to **Access Management → RADIUS Clients**
2. Click **Add Client**
3. Enter the client's **IP address** and **shared secret**
4. Assign a **network policy** to the client
5. Click **Save**

:::caution
Keep RADIUS shared secrets complex and unique per client. Rotate secrets regularly as part of your security hygiene.
:::
