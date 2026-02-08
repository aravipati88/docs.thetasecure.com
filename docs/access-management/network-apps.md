---
sidebar_position: 2
title: Network Apps
description: Configure network-level application access via ZTNA
---

# Network Apps

Network Apps are applications accessed through ThetaSecure's Zero Trust Network Access (ZTNA) layer, providing secure connectivity to internal resources without a traditional VPN.

**Navigation:** Sidebar → Access Management → Network Apps

## Adding a Network App

1. Click **+ Add Network App**
2. Define the application name and description
3. Configure the internal resource (IP address, hostname, port range)
4. Set access policies (who can access, from what devices, under what conditions)
5. Click **Save**

## Network App vs Web App

| Feature | Web App | Network App |
|---------|---------|-------------|
| **Access Method** | Browser-based SSO | ZTNA agent/tunnel |
| **Protocol** | SAML/OIDC/OAuth | TCP/UDP |
| **Use Case** | SaaS applications | Internal servers, databases, RDP |
