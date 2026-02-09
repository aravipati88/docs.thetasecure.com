---
sidebar_position: 4
title: Access
description: View web app, network app, and VPN audit events in ThetaSecure.
---

# Access Audit

The **Access Audit** page tracks all events related to resource access — including web applications, network applications, VPN connectivity, and access policies. Navigate to **Audit → Access** from the sidebar.

![Access Audit - All Tab](/img/screenshots/access-all-tab.png)

## Summary Cards

The top of the page displays six summary cards scoped to access events.

| Card | Description |
|------|-------------|
| **Total Events** | Total access audit events in the selected time range. |
| **Successful** | Events with a positive outcome (success, allowed, granted). |
| **Failed/Denied** | Events with a negative outcome (failure, failed, denied). |
| **In Progress** | Events still ongoing (pending, initiated, started). |
| **Other** | Events with informational or evaluation statuses. |
| **Success Rate** | Percentage of successful events out of total access events. |

## Top Event Types

A **Top Event Types** section displays the most common access event types as tag badges. Examples include: `device offline: 96`, `device online: 47`, `web app policy created: 1`.

## Category Tabs

The Access Audit page provides five tabs to filter events by sub-category:

| Tab | Description |
|-----|-------------|
| **All** | Displays all access events across every sub-category. |
| **Web Apps** | Filters to web application access events such as web app policy creation and web app access logs. |
| **Network Apps** | Filters to network application access events. |
| **VPN** | Filters to VPN-related events such as device connectivity (online/offline). |
| **Policies** | Filters to access policy events such as `web app policy created`. |

The currently active tab is highlighted with an orange background.

## Filters and Search

| Control | Description |
|---------|-------------|
| **Search by username** | Free-text search to filter events by a specific username or actor. |
| **Time Range** | Dropdown to select the time window: Last Hour, Last 24 Hours, Last 7 Days, Last 30 Days, Last 90 Days. |
| **Status Filter** | Dropdown to filter by event status: All Status, Success, Failure, Failed, Allowed, Denied, Granted, Evaluated, Initiated, Started, Pending. |
| **Refresh** | Button to reload the data with current filters. |

## Event Log Table

![Access Audit - Event Log](/img/screenshots/access-event-log.png)

The event log table displays access events with the following columns:

| Column | Description |
|--------|-------------|
| **Time** | Date and time of the event. |
| **Category** | Shows `System` with a gray badge for device events, or other category badges as appropriate. |
| **Event Type** | The specific event type (e.g., `device.online`, `device.offline`, `web app policy created`). |
| **User / Actor** | The user or system actor that triggered the event (e.g., `thetasec...`). May be empty for system-initiated events. |
| **IP Address** | The originating IP address. May be empty for offline/disconnect events. |
| **Resource** | The affected resource and its identifier (e.g., `device 10c13928-b...`). |
| **Status** | Status badge indicating the outcome (e.g., `success`). |
| **Details** | Eye icon to open the Event Details panel. |

## Common Access Event Types

| Event Type | Description |
|------------|-------------|
| `device.online` | A device connected to the platform. |
| `device.offline` | A device disconnected from the platform. |
| `web app policy created` | A new web application access policy was created. |
