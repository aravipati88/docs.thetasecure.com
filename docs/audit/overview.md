---
sidebar_position: 1
title: Overview
description: Audit dashboard with aggregated security event data
---

# Audit Overview

The Audit Overview provides an aggregated view of all security events across your ThetaSecure environment, helping you quickly identify trends and anomalies.

**Navigation:** Sidebar → Audit → Overview

## Dashboard Metrics

| Metric | Description |
|--------|-------------|
| **Total Events** | Total audit events in the selected period |
| **Authentication Events** | Login attempts (success/failure) |
| **Identity Changes** | User, group, and role modifications |
| **Access Events** | Resource access and policy evaluations |
| **System Events** | Configuration changes and system actions |

## Search & Filter

All audit views share common filtering capabilities:

| Filter | Description |
|--------|-------------|
| **Date Range** | Custom start and end dates |
| **User** | Filter by specific user |
| **Event Type** | Authentication, Identity, Access, System |
| **Result** | Success, Failure, Warning |
| **Source IP** | Filter by originating IP address |

## Exporting Logs

Export audit data for external analysis or compliance:
- **CSV** — Spreadsheet-compatible format
- **PDF** — Formatted report
- **SIEM Integration** — Real-time forwarding via Syslog or API
