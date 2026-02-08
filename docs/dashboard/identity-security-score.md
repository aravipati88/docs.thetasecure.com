---
sidebar_position: 5
title: Identity Security Score
description: Detailed breakdown of your organization's identity security score
---

# Identity Security Score

The Identity Security Score tab provides a detailed, drill-down view of your organization's security posture. While the Security Dashboard shows the composite score, this tab breaks it down into individual benchmarks and improvement actions.

**Navigation:** Dashboard → Identity Security Score tab

## Score Breakdown

The Identity Security Score evaluates your environment across multiple security dimensions and provides a weighted composite score out of 100.

### Scoring Categories

| Category | Weight | What It Measures |
|----------|--------|-----------------|
| MFA Coverage | High | Percentage of users with active MFA enrollment |
| Password Policy Compliance | Medium | Strength of enforced password policies |
| Privileged Access Control | High | Ratio of privileged vs. standard accounts |
| Stale Account Detection | Medium | Accounts with no login activity in 90+ days |
| Failed Authentication Rate | Medium | Ratio of failed to successful logins |
| Directory Sync Health | Low | Whether directory sync is active and current |
| Device Compliance | Low | Percentage of registered/compliant devices |

### Improvement Actions

Each scoring category includes specific, actionable steps to improve your score. Actions are prioritized by impact and difficulty:

- **Quick Wins**: Changes that can be made immediately with high impact (e.g., enabling MFA)
- **Medium Effort**: Configuration changes that require planning (e.g., reviewing role assignments)
- **Long-term**: Organizational changes that improve security over time (e.g., device compliance programs)

## Benchmarking

The Identity Security Score also shows how your organization compares against recommended security baselines, helping you set realistic improvement targets.

:::tip
Aim for a score of **80+** to meet industry-standard IAM security benchmarks. Scores below 60 indicate critical gaps that should be addressed urgently.
:::
