---
sidebar_position: 3
title: Authentication
description: Audit logs for authentication events and MFA challenges
---

# Authentication Audit Logs

Detailed logs of every authentication attempt across all protocols and methods.

**Navigation:** Sidebar → Audit → Authentication

## Tracked Events

| Event | Details Captured |
|-------|-----------------|
| **Login Success** | User, timestamp, method, source IP, device |
| **Login Failure** | User, failure reason, source IP, device |
| **MFA Challenge** | Method used, success/failure |
| **Password Change** | Initiated by user or admin |
| **Session Created** | Token type, expiry |
| **Session Terminated** | Logout or timeout |

## Failure Reasons

| Reason | Description |
|--------|-------------|
| **Invalid Credentials** | Wrong username or password |
| **Account Locked** | Too many failed attempts |
| **Account Suspended** | Administratively disabled |
| **MFA Failed** | Invalid or expired MFA code |
| **IP Blocked** | Source IP denied by policy |
| **Policy Denied** | Access policy evaluation failed |
