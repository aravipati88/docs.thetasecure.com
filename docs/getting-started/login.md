---
sidebar_position: 3
title: Logging In
description: How to sign in to ThetaSecure admin console
---

# Logging In to ThetaSecure

Access the ThetaSecure admin console through your browser to begin managing identities, policies, and security settings.

## Accessing the Console

Open your browser and navigate to your organization's ThetaSecure URL:

```
https://nx.thetasecure.com
```

You will be presented with the ThetaSecure sign-in page:

![ThetaSecure Login Page](/img/screenshots/login-page.jpg)

## Sign-In Steps

1. **Enter your Username** — Type your assigned username in the **Username** field. This is typically your admin account name (e.g., `superadmin`) or email address.

2. **Click Continue** — After entering your username, click the **Continue** button to proceed to the password step.

3. **Enter your Password** — Type your password in the **Password** field. Use the eye icon (👁) to toggle password visibility if needed.

![ThetaSecure Credentials Entry](/img/screenshots/login-credentials.jpg)

4. **Remember Me (Optional)** — Check the **Remember me** box if you want the console to keep you signed in across browser sessions. This is not recommended on shared or public workstations.

5. **Click Sign In** — Click the **Sign In** button to authenticate and access the admin console.

:::caution Security Note
Always sign out when using shared workstations. Avoid using the "Remember me" option on machines that other users may access.
:::

## Forgot Password

If you have forgotten your password:

1. Click the **Forgot password?** link below the Sign In button
2. Follow the on-screen instructions to reset your password
3. Check your registered email for the password reset link
4. Create a new password following your organization's password policy

## After Signing In

After successful authentication, you will be redirected to the **Admin Dashboard** at `nx.thetasecure.com/admin`. The dashboard loading screen will appear briefly before displaying the **Operations Dashboard**.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Invalid credentials" error | Verify your username and password. Check for caps lock. |
| Account locked | Contact your ThetaSecure administrator to unlock your account. |
| Page not loading | Ensure `nx.thetasecure.com` is accessible from your network. Check firewall rules. |
| MFA prompt not received | Verify your MFA device is configured. Contact your administrator if the issue persists. |

## Build Version

The current build version is displayed in the bottom-right corner of the login page (e.g., `Build: 2024-12-01-v3`). Reference this when contacting support.
