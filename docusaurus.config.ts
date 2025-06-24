import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ref-U Platform Wireframes',
  tagline: 'Revolutionary Sports Fan Engagement Platform - Complete Wireframes Package',
  favicon: 'img/favicon.ico',

  url: 'https://ref-u-wireframes-site-bvrg3l10e-skafld-studio.vercel.app',
  baseUrl: '/',

  organizationName: 'SkaFld-Ignite',
  projectName: 'ref-u-wireframes',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          sidebarCollapsed: false,
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/ref-u-social-card.jpg',
    navbar: {
      title: 'Ref-U Wireframes',
      hideOnScroll: false,
      items: [
        {
          href: 'https://github.com/SkaFld-Ignite/ref-u-wireframes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Visual Wireframes',
          items: [
            {
              label: 'Complete Mockups',
              to: '/',
            },
            {
              label: 'Interactive Flows',
              to: '/investor-flows',
            },
          ],
        },
        {
          title: 'For Investors',
          items: [
            {
              label: 'Business Model',
              to: '/investor-flows',
            },
            {
              label: 'Market Analysis',
              to: '/market-analysis',
            },
          ],
        },
        {
          title: 'For Developers',
          items: [
            {
              label: 'Technical Specs',
              to: '/technical-specs',
            },
            {
              label: 'UX Details',
              to: '/mobile-ux-flows',
            },
          ],
        },
      ],
      copyright: `Professional wireframes for revolutionary sports fan engagement platform.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
