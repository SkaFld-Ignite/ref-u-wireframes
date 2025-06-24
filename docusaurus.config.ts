import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ref-U Platform Wireframes',
  tagline: 'Revolutionary Sports Fan Engagement Platform - Complete Wireframes Package',
  favicon: 'img/favicon.ico',

  url: 'https://ref-u-wireframes.vercel.app',
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
        },
        blog: false,
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
      logo: {
        alt: 'Ref-U Platform Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wireframesSidebar',
          position: 'left',
          label: '📱 Wireframes',
        },
        {
          to: '/visual-wireframes',
          position: 'left',
          label: '🎨 Visual Mockups',
        },
        {
          to: '/investor-flows',
          position: 'left',
          label: '💼 For Investors',
        },
        {
          href: 'https://github.com/SkaFld-Ignite/ref-u-wireframes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Visual Wireframes',
          items: [
            {
              label: '📱 Complete Mockups',
              to: '/visual-wireframes',
            },
            {
              label: '📊 Interactive Flows',
              to: '/investor-flows',
            },
          ],
        },
        {
          title: 'For Investors',
          items: [
            {
              label: '💰 Business Model',
              to: '/investor-flows',
            },
            {
              label: '�� Market Analysis',
              to: '/market-analysis',
            },
          ],
        },
        {
          title: 'For Developers',
          items: [
            {
              label: '🔧 Technical Specs',
              to: '/technical-specs',
            },
            {
              label: '📱 UX Details',
              to: '/mobile-ux-flows',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '📋 How to Present',
              to: '/presentation-guide',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/SkaFld-Ignite/ref-u-wireframes',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ref-U Platform. Professional wireframes for revolutionary sports fan engagement.`,
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
