---
sidebar_position: 3
title: Security Dashboard
description: Identity security posture and threat detection
---

# Security Dashboard

The Security Dashboard is the central hub for monitoring your organization's identity security posture. It provides threat detection, risk scoring, and actionable recommendations to strengthen your IAM configuration.

**Navigation:** Dashboard → Security tab

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

Each component displays a colored progress bar — **green** indicates a healthy score, **orange** indicates room for improvement, and **red** signals a critical issue requiring immediate attention.

:::danger Critical
A health score below 50 indicates significant security gaps. Prioritize addressing red-flagged components immediately.
:::

### Active Sessions

Displays the total number of currently active user sessions with a breakdown by authentication method:

- **Token** — Sessions authenticated via bearer tokens (e.g., API access, SSO tokens)
- **Password** — Sessions authenticated with username/password
- **Other** — Alternative authentication methods

The donut chart provides a visual ratio of session types. A disproportionately high "Password" count may indicate that SSO adoption is low.

### Anomaly Detection

Real-time anomaly monitoring for suspicious identity-related activity.

- **Status indicator**: Green "Normal" badge when no threats are detected
- **Count**: Number of anomalies currently detected
- **Details**: Description of detected anomaly types (if any)

Anomaly detection monitors for patterns such as impossible travel, unusual login times, brute-force attempts, and privilege escalation.

## Operational Metrics

### Provisioning Velocity (24h)

Tracks user lifecycle changes over the past 24 hours:

| Metric | Description |
|--------|-------------|
| **Created** | New user accounts provisioned |
| **Modified** | Existing accounts updated (role changes, profile edits) |
| **Deleted** | Accounts deprovisioned or removed |

A sudden spike in any of these metrics could indicate a bulk provisioning event or potential unauthorized changes.

### MFA Effectiveness by Method & Hour

A heatmap showing MFA success rates across different methods and times of day:

- **Methods**: TOTP, SMS, Email, Push
- **Time axis**: 0:00 through 23:00
- **Color coding**:
  - 🟥 **Red (0–40%)**: Poor success rate — investigate delivery issues
  - 🟨 **Orange (40–80%)**: Moderate — review user experience
  - 🟩 **Green (80–95%)**: Good performance
  - 🟪 **Dark Green (95–100%)**: Excellent

This heatmap helps identify if certain MFA methods fail more often at specific hours (e.g., SMS failures during off-hours due to carrier issues).

## Risk Analysis

### Top App Usage

Shows which applications receive the most authentication requests. Empty during initial setup.

### Privilege Creep Analysis

![Privilege Creep Analysis](/img/screenshots/security-bottom.jpg)

Monitors excessive privilege accumulation across your organization:

| Metric | Description | Example |
|--------|-------------|---------|
| **Roles** | Total number of defined roles | 8 |
| **Permissions** | Total permission entries | 173 |
| **At Risk** | Users flagged for excessive privileges | 0 |

The **Top Privileged Users** horizontal bar chart ranks users by the number of permissions assigned. Users with disproportionately high permission counts (like `Super Admin`) should be reviewed to ensure they follow the principle of least privilege.

## Security Recommendations

![Security Recommendations](/img/screenshots/security-recommendations.jpg)

At the bottom of the Security Dashboard, ThetaSecure provides **actionable recommendations** based on your current configuration. These are prioritized and numbered. Common recommendations include:

1. **Enable MFA for remaining users** — Displayed when MFA adoption is below 100%
2. **Review privileged accounts** — Shown when privilege creep is detected
3. **Investigate failed login patterns** — Triggered by elevated failure rates

:::tip Best Practice
Address Security Recommendations in order of priority. Enabling MFA for all users is typically the single most impactful security improvement you can make.
:::

## Time Range Filter

Like the Operations Dashboard, the Security Dashboard supports time-based filtering:

- **Last 24 Hours** (default)
- **Last 7 Days**
- **Last 30 Days**
- **Custom Range**

Click **Refresh** to pull the latest data.
