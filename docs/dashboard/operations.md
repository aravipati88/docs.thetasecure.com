---
sidebar_position: 1
title: Operations Dashboard
description: Real-time analytics and system health monitoring
---

# Operations Dashboard

The Operations Dashboard is your primary monitoring view for real-time system health and authentication activity. It is the default view when you sign in to ThetaSecure.

**Navigation:** Dashboard → Operations tab

![Operations Dashboard](/img/screenshots/operations-dashboard.jpg)

## Dashboard Overview

The Operations Dashboard displays real-time analytics across six key areas. A time filter in the top-right corner (defaulting to **Last 24 Hours**) controls the date range for all widgets. Click **Refresh** to update data on demand.

## Widgets

### App Usage

Displays the number of currently active applications out of total registered apps.

- **Metric**: Percentage of active apps and count (e.g., "0 of 3 apps active")
- **Visual**: Circular gauge showing active percentage
- **Use case**: Quickly identify whether applications are being accessed as expected

### Directory Sync Health

Shows the synchronization status for connected directory services.

- **Metric**: Success rate percentage (e.g., "100% success")
- **Indicators**: Green indicates healthy sync; Red indicates sync failures
- **Details**: Lists connected directories (e.g., `TSLOCAL`) with user count
- **Use case**: Ensure identity data stays current between ThetaSecure and your directory source

### Failed Login Rate

Tracks authentication failures across all users and applications.

- **Metric**: Failure percentage and count (e.g., "0 of 6 attempts failed")
- **Visual**: Circular gauge — green when failure rate is low, red when elevated
- **Use case**: Detect brute-force attacks or misconfigured accounts

:::warning Action Required
If the failed login rate exceeds your organization's threshold, investigate immediately. A spike could indicate a credential-stuffing attack or a misconfigured application.
:::

### Top 10 Applications

A ranked list of the most-accessed applications during the selected time period. When no data is available, it displays "No app usage data available."

### Authentication Trends

A time-series line chart showing successful and failed authentication attempts over the selected period.

- **Green line**: Successful authentications
- **Red line**: Failed authentications
- **X-axis**: Time (matches the selected date range)
- **Y-axis**: Number of authentication events

This chart helps you identify patterns such as peak login hours or unusual spikes in failures.

### Volume by Service

Breaks down authentication volume by service type (e.g., RADIUS, Web SSO, API).

### Failed Request Reasons

Categorizes the reasons for failed authentication attempts (e.g., invalid password, expired account, MFA failure), helping you diagnose the root cause of login issues.

## Time Range Filter

Use the dropdown in the top-right corner to adjust the reporting window:

| Option | Description |
|--------|-------------|
| Last 24 Hours | Default view showing the most recent day |
| Last 7 Days | Weekly overview |
| Last 30 Days | Monthly trends |
| Custom Range | Specify exact start and end dates |

## Best Practices

- Review the Operations Dashboard **at least once daily** to catch anomalies early
- Set up alerts based on authentication failure thresholds
- Use the **Refresh** button before making decisions based on dashboard data
- Correlate spikes in Failed Login Rate with Authentication Trends to identify attack patterns
