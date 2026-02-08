/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
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
      label: 'Dashboard',
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
      label: 'Configuration & Settings',
      collapsed: false,
      items: [
        'configuration/identity-management',
        'configuration/device-management',
        'configuration/access-management',
        'configuration/authentication',
        'configuration/network-policies',
        'configuration/directory-sync',
        'configuration/audit',
      ],
    },
  ],
};

module.exports = sidebars;
