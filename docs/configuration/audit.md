---
sidebar_position: 7
title: Audit
description: Event logging, activity tracking, and compliance reporting
---

# Audit

The Audit module provides comprehensive logging of all authentication events, administrative actions, and policy changes within ThetaSecure. Use it for security investigations, compliance reporting, and operational troubleshooting.

**Navigation:** Sidebar → Audit

## Audit Log Types

### Authentication Logs

Records every authentication attempt across all users and applications:

- **Timestamp**: When the event occurred
- **User**: Who attempted to authenticate
- **Application**: Which application was accessed
- **Source IP**: Client's IP address
- **Method**: Authentication method used (password, MFA, token)
- **Result**: Success or Failure
- **Failure Reason**: Specific cause of failure (if applicable)

### Admin Activity Logs

Tracks all changes made by administrators:

- User creation, modification, and deletion
- Role and group changes
- Policy creation and updates
- Configuration changes
- Directory sync operations

### Policy Evaluation Logs

Records the outcome of network policy evaluations:

- Which policies were evaluated
- Which policy matched
- The resulting action (Allow, Deny, Step-up MFA)

## Searching and Filtering

The Audit log supports powerful filtering:

| Filter | Description |
|--------|-------------|
| **Date Range** | Specify start and end dates |
| **User** | Filter by specific username |
| **Event Type** | Authentication, Admin, Policy |
| **Result** | Success, Failure, All |
| **Application** | Filter by specific application |
| **Source IP** | Filter by IP address or range |

## Exporting Logs

Audit logs can be exported for external analysis or compliance archival:

- **CSV Export**: Download filtered logs as CSV
- **PDF Report**: Generate formatted compliance reports
- **SIEM Integration**: Forward logs to external SIEM systems via syslog or API

## Retention Policy

Configure how long audit logs are retained:

- **Default**: 90 days
- **Extended**: Up to 365 days (configurable)
- **Compliance mode**: Logs are immutable and cannot be deleted during the retention period

:::tip Compliance
For SOX, HIPAA, or PCI-DSS compliance, set the retention period to at least 365 days and enable compliance mode to ensure audit trail integrity.
:::

## Common Investigation Workflows

### Investigating a Compromised Account

1. Search by **Username** for the affected account
2. Filter for the past 7–30 days
3. Look for unusual patterns: logins from new IPs, off-hours access, MFA bypasses
4. Cross-reference with the **Security Dashboard → Anomaly Detection**

### Verifying Access Revocation

1. Search by the departed user's **Username**
2. Filter for events after their termination date
3. Verify no successful authentications occurred after access was revoked
