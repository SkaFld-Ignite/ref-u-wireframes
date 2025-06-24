import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ref-U Platform Wireframes',
  tagline: 'Professional Interactive Wireframes for Investor Presentation',
  favicon: 'img/favicon.ico',

  url: 'https://ref-u-wireframes.vercel.app',
  baseUrl: '/',

  organizationName: 'ref-u-platform',
  projectName: 'ref-u-wireframes',

  onBrokenLinks: 'warn', // Change from 'throw' to 'warn' for deployment
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
          routeBasePath: '/', // Serve docs at the site's root
        },
        blog: false, // Disable blog
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
        alt: 'Ref-U Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wireframesSidebar',
          position: 'left',
          label: 'Wireframes',
        },
        {
          href: 'https://github.com/your-org/ref-u-wireframes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wireframes',
          items: [
            {
              label: 'Investor Presentation',
              to: '/investor-flows',
            },
            {
              label: 'Mobile UX Flows',
              to: '/mobile-ux-flows',
            },
          ],
        },
        {
          title: 'Business',
          items: [
            {
              label: 'Market Opportunity',
              to: '/market-analysis',
            },
            {
              label: 'Technical Specs',
              to: '/technical-specs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ref-U Platform. Built with Docusaurus.`,
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
