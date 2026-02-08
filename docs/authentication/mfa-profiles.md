---
sidebar_position: 2
title: MFA Profiles
description: Configure Multi-Factor Authentication methods and policies
---

# MFA Profiles

MFA Profiles define which multi-factor authentication methods are available and how they are enforced across your organization.

**Navigation:** Sidebar → Authentication → MFA Profiles

## Supported MFA Methods

| Method | Description | Security Level |
|--------|-------------|---------------|
| **TOTP** | Time-based One-Time Password (Authenticator apps) | High |
| **WebAuthn** | Hardware security keys, biometric authentication | Highest |
| **Email** | One-time code sent to registered email | Moderate |
| **SMS** | One-time code sent via text message | Moderate |
| **Push** | Push notification to ThetaSecure mobile app | High |

## Creating an MFA Profile

1. Click **+ Add MFA Profile**
2. Select which MFA methods to enable
3. Set enforcement options (Required, Optional, Disabled)
4. Configure grace period for first-time enrollment
5. Click **Save**

## MFA Enrollment Flow

When MFA is required and a user hasn't enrolled:

1. User logs in with username and password
2. System prompts for MFA enrollment
3. User selects an available method and completes setup
4. Subsequent logins require MFA

## Monitoring MFA

Track MFA adoption and effectiveness through:
- **Access & Permissions Dashboard** → Security & MFA widget
- **Identity Security Score** → MFA Statistics section
- **Audit → Authentication** → MFA challenge logs
