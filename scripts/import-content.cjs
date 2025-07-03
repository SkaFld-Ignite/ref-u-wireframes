require('dotenv').config();
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'jrm3dyyn',
  dataset: 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01'
});

// Import pitch slides
async function importPitchSlides() {
  const slides = [
    {
      _type: 'slide',
      _id: 'slide-cover',
      title: 'Ref-U Platform Overview',
      slideNumber: 1,
      type: 'cover',
      content: [
        {
          _type: 'block',
          _key: 'cover-content-1',
          children: [
            {
              _type: 'span',
              _key: 'cover-span-1',
              text: 'Revolutionary Sports Fan Engagement Platform'
            }
          ]
        }
      ],
      metrics: [
        {
          _key: 'cover-metric-1',
          label: 'Development Status',
          value: 'Pre-Beta MVP'
        },
        {
          _key: 'cover-metric-2',
          label: 'Beta Launch',
          value: 'Q4 2025'
        }
      ]
    },
    {
      _type: 'slide',
      _id: 'slide-problem',
      title: 'The Problem',
      slideNumber: 2,
      type: 'problem',
      content: [
        {
          _type: 'block',
          _key: 'problem-content-1',
          children: [
            {
              _type: 'span',
              _key: 'problem-span-1',
              text: '89% of fans disagree with referee calls but lack understanding of rules'
            }
          ]
        }
      ],
      metrics: [
        {
          _key: 'problem-metric-1',
          label: 'Fan Frustration',
          value: '89%'
        },
        {
          _key: 'problem-metric-2',
          label: 'Market Need',
          value: 'Real-time Education'
        }
      ]
    },
    {
      _type: 'slide',
      _id: 'slide-solution',
      title: 'Our Solution',
      slideNumber: 3,
      type: 'solution',
      content: [
        {
          _type: 'block',
          _key: 'solution-content-1',
          children: [
            {
              _type: 'span',
              _key: 'solution-span-1',
              text: 'Real-time referee call analysis and educational platform'
            }
          ]
        }
      ],
      metrics: [
        {
          _key: 'solution-metric-1',
          label: 'User Retention',
          value: '73%'
        },
        {
          _key: 'solution-metric-2',
          label: 'Avg Session',
          value: '25+ minutes'
        }
      ]
    },
    {
      _type: 'slide',
      _id: 'slide-market',
      title: 'Market Opportunity',
      slideNumber: 4,
      type: 'market',
      content: [
        {
          _type: 'block',
          _key: 'market-content-1',
          children: [
            {
              _type: 'span',
              _key: 'market-span-1',
              text: '$15.2B Total Addressable Market'
            }
          ]
        }
      ],
      metrics: [
        {
          _key: 'market-metric-1',
          label: 'TAM',
          value: '$15.2B'
        },
        {
          _key: 'market-metric-2',
          label: 'SAM',
          value: '$2.8B'
        },
        {
          _key: 'market-metric-3',
          label: 'SOM',
          value: '$340M'
        }
      ]
    },
    {
      _type: 'slide',
      _id: 'slide-financials',
      title: 'Financial Projections',
      slideNumber: 5,
      type: 'financials',
      content: [
        {
          _type: 'block',
          _key: 'financials-content-1',
          children: [
            {
              _type: 'span',
              _key: 'financials-span-1',
              text: 'Path to $10M ARR by Month 36'
            }
          ]
        }
      ],
      metrics: [
        {
          _key: 'financials-metric-1',
          label: 'Year 1',
          value: '$250K ARR'
        },
        {
          _key: 'financials-metric-2',
          label: 'Year 2',
          value: '$3.2M ARR'
        },
        {
          _key: 'financials-metric-3',
          label: 'Year 3',
          value: '$10M ARR'
        }
      ]
    }
  ];

  // First delete existing slides
  await client.delete({query: '*[_type == "slide"]'});

  // Then create new ones
  for (const slide of slides) {
    console.log(`Creating slide: ${slide.title}`);
    await client.createOrReplace(slide);
  }
}

// Import business model
async function importBusinessModel() {
  const businessModel = {
    _type: 'businessModel',
    _id: 'business-model',
    title: 'Ref-U Business Model',
    overview: [
      {
        _type: 'block',
        _key: 'business-overview-1',
        children: [
          {
            _type: 'span',
            _key: 'business-overview-span-1',
            text: 'Multi-revenue stream model combining premium subscriptions and social commerce'
          }
        ]
      }
    ],
    revenueStreams: [
      {
        _key: 'revenue-stream-1',
        name: 'Premium Subscriptions',
        description: 'Monthly subscription for advanced features and analytics',
        projectedRevenue: '$9.99/month',
        timeline: 'Launch Q4 2025'
      },
      {
        _key: 'revenue-stream-2',
        name: 'Social Commerce',
        description: 'Team merchandise and exclusive content',
        projectedRevenue: '$47.50 avg order',
        timeline: 'Launch Q1 2026'
      }
    ],
    marketSize: {
      _key: 'market-size-1',
      tam: '$15.2B Sports Media & Tech',
      sam: '$2.8B Interactive Platforms',
      som: '$340M Sports Fan Engagement'
    }
  };

  // Delete existing business model
  await client.delete({query: '*[_type == "businessModel"]'});

  console.log('Creating business model');
  await client.createOrReplace(businessModel);
}

// Import market analysis
async function importMarketAnalysis() {
  const marketAnalysis = {
    _type: 'marketAnalysis',
    _id: 'market-analysis',
    title: 'Sports Fan Engagement Market Analysis',
    overview: [
      {
        _type: 'block',
        _key: 'market-analysis-overview-1',
        children: [
          {
            _type: 'span',
            _key: 'market-analysis-span-1',
            text: 'Growing market driven by mobile consumption and demand for interactive experiences'
          }
        ]
      }
    ],
    competitors: [
      {
        _key: 'competitor-1',
        name: 'ESPN App',
        description: 'Traditional sports media platform',
        strengths: [
          'Brand recognition',
          'Content rights',
          'Large user base'
        ],
        weaknesses: [
          'Limited interaction',
          'No educational focus',
          'One-way communication'
        ]
      },
      {
        _key: 'competitor-2',
        name: 'Fantasy Sports Apps',
        description: 'Gaming-focused platforms',
        strengths: [
          'Engaged user base',
          'Monetization model',
          'Social features'
        ],
        weaknesses: [
          'No real-time analysis',
          'Limited learning',
          'Fantasy-only focus'
        ]
      }
    ],
    opportunities: [
      {
        _key: 'opportunity-1',
        title: 'Real-time Education',
        description: 'Fill the gap between entertainment and education in sports',
        marketSize: '$2.8B',
        timeline: '2025-2026'
      },
      {
        _key: 'opportunity-2',
        title: 'Social Commerce',
        description: 'Leverage engaged community for team merchandise sales',
        marketSize: '$340M',
        timeline: '2026'
      }
    ]
  };

  // Delete existing market analysis
  await client.delete({query: '*[_type == "marketAnalysis"]'});

  console.log('Creating market analysis');
  await client.createOrReplace(marketAnalysis);
}

// Run the import
async function importAll() {
  try {
    await importPitchSlides();
    await importBusinessModel();
    await importMarketAnalysis();
    console.log('Content import complete!');
  } catch (error) {
    console.error('Import failed:', error);
  }
}

importAll();
