import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ref-U Wireframes',
  tagline: 'Professional wireframes for revolutionary sports fan engagement platform',
  favicon: 'img/favicon.ico',

  url: 'https://ref-u-wireframes.vercel.app',
  baseUrl: '/',

  organizationName: 'SkaFld-Ignite',
  projectName: 'ref-u-wireframes',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    sanityProjectId: 'jrm3dyyn',
    sanityDataset: 'production',
  },

  plugins: [
    'docusaurus-sanity-plugin',
    '@docusaurus/theme-mermaid',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/SkaFld-Ignite/ref-u-wireframes/tree/main/',
          remarkPlugins: [
            [require('./plugins/sanity-transform'), {}],
          ],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Ref-U Wireframes',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wireframesSidebar',
          position: 'left',
          label: '📱 Visual Wireframes',
        },
        {
          type: 'docSidebar',
          sidebarId: 'businessSidebar',
          position: 'left',
          label: '📈 Business Overview',
        },
        {
          type: 'docSidebar',
          sidebarId: 'technicalSidebar',
          position: 'left',
          label: '🔧 Technical Details',
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
      copyright: 'Professional wireframes for revolutionary sports fan engagement platform.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
