---
sidebar_position: 3
title: Security Dashboard
description: Identity security posture and threat detection
---

# Security Dashboard

The Security Dashboard is the central hub for monitoring your organization's identity security posture. It provides threat detection, risk scoring, and actionable recommendations to strengthen your IAM configuration.

**Navigation:** Dashboard \u2192 Security tab

![Security Dashboard](/img/screenshots/security-dashboard.jpg)

## Key Metrics

### Identity Health Score

A composite security score ranging from **0 to 100** that evaluates your overall identity security posture. The score is calculated from four weighted components:

| Component | Max Score | Description |
|-----------|-----------|-------------|
| **MFA Adoption** | 30 | Percentage of users with MFA enabled |
| **Failed Login Rate** | 30 | Lower failure rates yield higher scores |
| **Account Health** | 20 | Active vs. stale/orphaned accounts |
| **Privileged Access** | 20 | How tightly privileged roles are controlled |

Each component displays a colored progress bar \u2014 **green** indicates a healthy score, **orange** indicates room for improvement, and **red** signals a critical issue requiring immediate attention.

:::danger Critical
A health score below 50 indicates significant security gaps. Prioritize addressing red-flagged components immediately.
:::

### Active Sessions

Displays the total number of currently active user sessions with a breakdown by authentication method:

- **Token** \u2014 Sessions authenticated via bearer tokens (e.g., API access, SSO tokens)
- **Password** \u2014 Sessions authenticated with username/password
- **Other** \u2014 Alternative authentication methods

The donut chart provides a visual ratio of session types. A disproportionately high \\