import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  stakeholderSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🏠 Stakeholder Home',
    },
    {
      type: 'category', 
      label: '🎯 Pitch Materials',
      collapsed: false,
      items: [
        'pre-seed-pitch-slides',
      ],
    },
    {
      type: 'category',
      label: '📱 Wireframes & Flows',
      collapsed: false,
      items: [
        'visual-wireframes',
        'investor-flows',
        'mobile-ux-flows',
      ],
    },
  ],
};

export default sidebars;
