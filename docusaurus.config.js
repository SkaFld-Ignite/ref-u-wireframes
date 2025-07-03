module.exports = {
  title: "Ref-U Stakeholder Wireframes",
  tagline: "Visual wireframes and pitch deck for stakeholders",
  url: "https://ref-u-wireframes.vercel.app",
  baseUrl: "/",
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ref-u-platform',
  projectName: 'stakeholder-wireframes',
  
  presets: [
    [
      require.resolve("@docusaurus/preset-classic"),
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: 'https://github.com/ref-u-platform/stakeholder-wireframes/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  
  plugins: [
    '@docusaurus/theme-mermaid'
  ],
  
  markdown: {
    mermaid: true,
  },
  
  themeConfig: {
    navbar: {
      title: 'Ref-U Stakeholder Docs',
      logo: {
        alt: 'Ref-U Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'stakeholderSidebar',
          position: 'left',
          label: 'Wireframes & Pitch',
        },
        {
          href: 'http://localhost:3001/',
          label: 'Memory Bank Hub',
          position: 'right',
        },
        {
          href: 'http://localhost:3002/',
          label: 'Developer Docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pitch Materials',
          items: [
            {
              label: 'Pre-Seed Pitch',
              to: '/pre-seed-pitch-slides',
            },
          ],
        },
        {
          title: 'Wireframes',
          items: [
            {
              label: 'Visual Wireframes',
              to: '/visual-wireframes',
            },
            {
              label: 'Investor Flows',
              to: '/investor-flows',
            },
            {
              label: 'Mobile UX Flows',
              to: '/mobile-ux-flows',
            },
          ],
        },
        {
          title: 'Hub Navigation',
          items: [
            {
              label: 'Memory Bank Hub',
              href: 'http://localhost:3001/',
            },
            {
              label: 'Developer Docs',
              href: 'http://localhost:3002/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ref-U Platform.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
};
