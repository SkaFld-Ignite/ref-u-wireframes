import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wireframesSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🎯 Overview',
    },
    {
      type: 'category',
      label: '📊 Investor Presentation',
      collapsed: false,
      items: [
        'investor-flows',
        'mobile-ux-flows',
      ],
    },
    {
      type: 'category',
      label: '📱 Product Details',
      collapsed: true,
      items: [
        'technical-specs',
        'market-analysis',
      ],
    },
    {
      type: 'doc',
      id: 'presentation-guide',
      label: '🚀 Presentation Guide',
    },
  ],
};

export default sidebars;
