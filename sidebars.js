/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/system-requirements',
        'getting-started/login',
        'getting-started/first-steps',
      ],
    },
    {
      type: 'category',
      label: '📊 Dashboard',
      collapsed: false,
      items: [
        'dashboard/operations',
        'dashboard/statistics',
        'dashboard/security',
        'dashboard/access-permissions',
        'dashboard/identity-security-score',
      ],
    },
    {
      type: 'category',
      label: '📱 My Apps',
      items: [
        'my-apps/overview',
      ],
    },
    {
      type: 'category',
      label: '👥 Identity Management',
      items: [
        'identity-management/users',
        'identity-management/groups',
        'identity-management/roles',
        'identity-management/permissions',
        'identity-management/directory-sync',
      ],
    },
    {
      type: 'category',
      label: '💻 Device Management',
      items: [
        'device-management/ztna-devices',
        'device-management/ztna-device-approvals',
      ],
    },
    {
      type: 'category',
      label: '🔐 Access Management',
      items: [
        'access-management/web-apps',
        'access-management/network-apps',
        'access-management/remote-servers',
        'access-management/radius-clients',
        'access-management/access-policies',
      ],
    },
    {
      type: 'category',
      label: '🔑 Authentication',
      items: [
        'authentication/signin-profiles',
        'authentication/mfa-profiles',
        'authentication/signin-policies',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Configuration',
      items: [
        'configuration/general',
        'configuration/oauth-scopes',
        'configuration/oauth-clients',
        'configuration/security',
        'configuration/notifications',
        'configuration/ai-assistant',
        'configuration/vpn-configuration',
        'configuration/vpn-hubs',
        'configuration/license',
        'configuration/storage',
        'configuration/agent-releases',
      ],
    },
    {
      type: 'category',
      label: '📋 Audit',
      items: [
        'audit/overview',
        'audit/identity',
        'audit/authentication',
        'audit/access',
        'audit/notifications',
        'audit/system',
        'audit/radius',
        'audit/vpn-flow-logs',
        'audit/vpn-statistics',
        'audit/rdp-ssh-active-sessions',
        'audit/rdp-ssh-recordings',
      ],
    },
    {
      type: 'category',
      label: '❤️ Health',
      items: [
        'health/overview',
      ],
    },
  ],
};

module.exports = sidebars;
