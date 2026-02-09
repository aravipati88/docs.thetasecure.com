---
sidebar_position: 2
title: Identity
description: View user, group, role, and permission audit events in ThetaSecure.
---

# Identity Audit

The **Identity Audit** page tracks all audit events related to identity management — including user, group, role, and permission operations. Navigate to **Audit → Identity** from the sidebar.

![Identity Audit - All Tab](/img/screenshots/identity-all-tab.png)

## Summary Cards

The top of the page displays six summary cards scoped exclusively to identity-related events.

| Card | Description |
|------|-------------|
| **Total Events** | Total identity audit events recorded in the selected time range. |
| **Successful** | Events with a positive outcome (success, allowed, granted). |
| **Failed/Denied** | Events with a negative outcome (failure, failed, denied). |
| **In Progress** | Events still ongoing (pending, initiated, started). |
| **Other** | Events with informational or evaluation statuses. |
| **Success Rate** | Percentage of successful events out of total identity events. |

## Top Event Types

When events are present, a **Top Event Types** section displays the most common identity event types as tag-style badges. Examples include: `role assigned: 65`, `user created: 13`, `user deleted: 12`, `role created: 9`, `GroupPatched: 7`, `group member added: 5`, `group created: 3`, `group deleted: 1`.

## Category Tabs

The Identity Audit page provides five tabs to filter events by sub-category:

| Tab | Description |
|-----|-------------|
| **All** | Displays all identity events across every sub-category. |
| **Users** | Filters to user-related events such as `user.created`, `user.deleted`, and `user.updated`. |
| **Groups** | Filters to group-related events such as `group.created`, `group.deleted`, `GroupPatched`, and `group member added`. |
| **Roles** | Filters to role-related events such as `role.created` and `role.assigned`. |
| **Permissions** | Filters to permission-related events such as permission grants and revocations. |

The currently active tab is highlighted with an orange background.

### Roles Tab Example

![Identity Audit - Roles Tab](/img/screenshots/identity-roles-tab.png)

## Filters and Search

![Identity Audit - Time Range Dropdown](/img/screenshots/identity-time-range.png)

| Control | Description |
|---------|-------------|
| **Search by username** | Free-text search to filter events by a specific username or actor. |
| **Time Range** | Dropdown to select the time window: Last Hour, Last 24 Hours, Last 7 Days, Last 30 Days, Last 90 Days. |
| **Status Filter** | Dropdown to filter by event status: All Status, Success, Failure, Failed, Allowed, Denied, Granted, Evaluated, Initiated, Started, Pending. |
| **Refresh** | Button to reload the data with current filters. |

## Event Log Table

The event log table displays identity events with the following columns:

| Column | Description |
|--------|-------------|
| **Time** | Date and time of the event. |
| **Category** | Always shows `Identity` with a blue badge. |
| **Event Type** | The specific event type (e.g., `role.assigned`, `role.created`, `user.created`). |
| **User / Actor** | The user or system actor that triggered the event (e.g., `system`, `bce2f650...`, `ReadOnly`, `Storage Admin`). |
| **IP Address** | The originating IP address (may be empty for system-initiated events). |
| **Resource** | The affected resource (e.g., `role`, `user`, `group`) and its identifier. |
| **Status** | Status badge indicating the outcome (e.g., `success`). |
| **Details** | Eye icon to open the Event Details panel with full event information. |

## Empty State

When no events match the current filters, a centered message is displayed: **"No Events Found"** with the subtitle *"No audit events match your current filters."*
