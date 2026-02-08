---
sidebar_position: 2
title: System Requirements
description: Browser and network requirements for accessing ThetaSecure
---

# System Requirements

ThetaSecure is a cloud-hosted web application. No software installation is required on your local machine — you only need a supported browser and network access to the ThetaSecure console.

## Supported Browsers

| Browser | Minimum Version |
|---------|----------------|
| Google Chrome | 90+ |
| Mozilla Firefox | 88+ |
| Microsoft Edge | 90+ |
| Safari | 14+ |

:::tip Recommended
Google Chrome (latest) provides the best experience with ThetaSecure.
:::

## Network Requirements

Your network must allow outbound HTTPS (port 443) access to your ThetaSecure instance URL:

- **Admin Console**: `https://nx.thetasecure.com`
- **License Server**: `https://license.thetasecure.com`

If your organization uses a firewall or proxy, ensure these domains are whitelisted.

## Screen Resolution

A minimum screen resolution of **1280 × 720** is recommended for optimal dashboard viewing. The interface is responsive but designed primarily for desktop use.

## Authentication Prerequisites

Before logging in for the first time, ensure you have received the following from your ThetaSecure administrator:

- Your **username** (e.g., `superadmin`, `admin@yourorg.com`)
- Your **temporary password** (you will be prompted to change it on first login)
- Your assigned **role** (Super Administrator, Administrator, Operator, or Viewer)

## RADIUS Client Requirements (Optional)

If integrating with RADIUS-based network access control, ensure your network equipment supports RADIUS authentication and that ThetaSecure's IP is reachable from your RADIUS clients.
