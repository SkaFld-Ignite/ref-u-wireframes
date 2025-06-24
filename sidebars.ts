import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wireframesSidebar: [
    {
      type: 'doc',
      id: 'visual-wireframes',
      label: '📱 Visual Wireframes',
    },
    {
      type: 'category', 
      label: '💼 For Investors',
      collapsed: false,
      items: [
        'investor-flows',
        'market-analysis',
      ],
    },
    {
      type: 'category',
      label: '🔧 For Developers', 
      collapsed: true,
      items: [
        'mobile-ux-flows',
        'technical-specs',
      ],
    },
    {
      type: 'category',
      label: '📋 Resources',
      collapsed: true,
      items: [
        'presentation-guide',
      ],
    },
  ],
};

export default sidebars;
