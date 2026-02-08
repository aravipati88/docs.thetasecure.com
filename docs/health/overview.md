---
sidebar_position: 1
title: Health
description: System health monitoring and diagnostics
---

# Health

The Health page provides a real-time view of your ThetaSecure platform's operational status, including service availability, connector health, and system performance.

**Navigation:** Sidebar → Health

## Health Checks

| Component | What's Monitored |
|-----------|-----------------|
| **Core Services** | API gateway, authentication engine, policy engine |
| **Database** | Database connectivity and performance |
| **Directory Connectors** | Connection status to external directories |
| **RADIUS Server** | RADIUS service availability |
| **VPN Gateway** | VPN hub status and capacity |
| **Email/SMTP** | Notification delivery capability |

## Status Indicators

| Status | Color | Meaning |
|--------|-------|---------|
| **Healthy** | Green | All systems operational |
| **Degraded** | Yellow | Partial functionality issues |
| **Down** | Red | Service unavailable |

## Diagnostics

The Health page also provides:
- **Uptime** — System uptime since last restart
- **Version** — Current build version
- **Latency** — Response time for key services
- **Disk/Memory** — Resource utilization metrics

:::tip
Check the Health page first when troubleshooting issues. Most connectivity problems can be traced to a specific component shown here.
:::
