---
sidebar_position: 1
title: Access Management Overview
description: Understand how ThetaSecure manages application access through Web Apps, Network Apps, Remote Servers, RADIUS Clients, and Access Policies
---

# Access Management

Access Management is the core of ThetaSecure. This is where you define what your users can access and under what conditions. Every application, network resource, remote server, and legacy system that your organization protects through ThetaSecure is configured here.

ThetaSecure acts as an Identity Provider (IDP), which means it sits between your users and the applications they need. When a user tries to access a protected application, ThetaSecure authenticates them, evaluates the access policies you have defined, optionally enforces multi factor authentication, and only then grants a session. This is true whether the application is a modern cloud SaaS tool, an internal web portal, a private network segment, or a legacy system that speaks RADIUS.

The Access Management section is organized into five areas, each designed for a different type of resource:

| Section | Purpose |
|---|---|
| **Web Apps** | Define SSO integrations for web applications using OIDC, SAML, or Bookmark links. Users get single sign on with conditional access policies. |
| **Network Apps** | Configure ZTNA protected network resources. These replace traditional VPN access with granular, identity aware tunnels to specific internal services. |
| **Remote Servers** | Enable secure access to servers (SSH, RDP) from unmanaged or unknown devices through a browser based gateway, without requiring the ThetaSecure agent. |
| **RADIUS Clients** | Integrate legacy infrastructure (Wi-Fi controllers, VPN concentrators, network switches) that authenticate through the RADIUS protocol, adding SSO and MFA to devices that do not natively support modern authentication. |
| **Access Policies** | Define the rules that govern who can access what, under which conditions, and with what level of assurance. Policies can enforce MFA, restrict by device posture, limit by group membership, and more. |

The following pages document each section in detail, starting with Web Apps.
