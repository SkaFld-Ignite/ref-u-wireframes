import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ref-U Platform Wireframes',
  tagline: 'Revolutionary Sports Fan Engagement Platform - Complete Wireframes Package',
  favicon: 'img/favicon.ico',

  url: 'https://ref-u-wireframes-site-igzfuf3eg-skafld-studio.vercel.app',
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
          title: 'Business Overview',
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
          title: 'Technical Details',
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
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
      options: {
        maxTextSize: 50000,
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 16,
        primaryColor: '#3b82f6',
        primaryTextColor: '#1f2937',
        primaryBorderColor: '#1e40af',
        lineColor: '#6b7280',
        secondaryColor: '#f3f4f6',
        tertiaryColor: '#ffffff',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
