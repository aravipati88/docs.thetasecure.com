// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ThetaSecure Documentation',
  tagline: 'Identity & Access Management — Secure, Monitor, Protect',
  favicon: 'img/favicon.ico',

  url: 'https://docs.thetasecure.com',
  baseUrl: '/',

  organizationName: 'thetasecure',
  projectName: 'thetasecure-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/thetasecure-social-card.png',
      navbar: {
        title: 'ThetaSecure',
        logo: {
          alt: 'ThetaSecure Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://nx.thetasecure.com',
            label: 'Login to Console',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Getting Started', to: '/docs/getting-started/overview' },
              { label: 'Dashboard Guide', to: '/docs/dashboard/operations' },
              { label: 'Configuration', to: '/docs/configuration/general' },
            ],
          },
          {
            title: 'Product',
            items: [
              { label: 'ThetaSecure Console', href: 'https://nx.thetasecure.com' },
              { label: 'License Portal', href: 'https://license.thetasecure.com' },
            ],
          },
          {
            title: 'Support',
            items: [
              { label: 'Contact Support', href: 'mailto:support@thetasecure.com' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ThetaSecure. All rights reserved.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
