---
sidebar_position: 3
title: Remote Servers
description: Configure secure remote access to servers via RDP/SSH
---

# Remote Servers

Remote Servers enables secure, audited access to servers via RDP and SSH through ThetaSecure's browser-based gateway — no client software required.

**Navigation:** Sidebar → Access Management → Remote Servers

## Adding a Remote Server

1. Click **+ Add Server**
2. Configure connection details (hostname/IP, port, protocol)
3. Set authentication method (password, SSH key, certificate)
4. Assign users or groups who can access the server
5. Click **Save**

## Supported Protocols

| Protocol | Port | Use Case |
|----------|------|----------|
| **SSH** | 22 | Linux/Unix server management |
| **RDP** | 3389 | Windows server desktop access |

## Session Recording

All remote server sessions can be recorded for audit and compliance purposes. View recordings in **Audit → RDP/SSH Recordings**.
