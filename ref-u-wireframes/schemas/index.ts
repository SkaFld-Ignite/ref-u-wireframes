import {defineType} from 'sanity'

// Slide Schema
const slide = defineType({
  name: 'slide',
  title: 'Pitch Slides',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slideNumber',
      title: 'Slide Number',
      type: 'number',
      validation: Rule => Rule.required().min(1),
    },
    {
      name: 'type',
      title: 'Slide Type',
      type: 'string',
      options: {
        list: [
          { title: 'Cover', value: 'cover' },
          { title: 'Problem', value: 'problem' },
          { title: 'Solution', value: 'solution' },
          { title: 'Market', value: 'market' },
          { title: 'Financials', value: 'financials' },
          { title: 'Team', value: 'team' },
          { title: 'Investment', value: 'investment' }
        ]
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }
          ]
        }
      ]
    },
    {
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label'
            },
            {
              name: 'value',
              type: 'string',
              title: 'Value'
            }
          ]
        }
      ]
    }
  ]
})

// Business Model Schema
const businessModel = defineType({
  name: 'businessModel',
  title: 'Business Model',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'revenueStreams',
      title: 'Revenue Streams',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name'
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description'
            },
            {
              name: 'projectedRevenue',
              type: 'string',
              title: 'Projected Revenue'
            },
            {
              name: 'timeline',
              type: 'string',
              title: 'Timeline'
            }
          ]
        }
      ]
    },
    {
      name: 'marketSize',
      title: 'Market Size',
      type: 'object',
      fields: [
        {
          name: 'tam',
          type: 'string',
          title: 'Total Addressable Market (TAM)'
        },
        {
          name: 'sam',
          type: 'string',
          title: 'Serviceable Addressable Market (SAM)'
        },
        {
          name: 'som',
          type: 'string',
          title: 'Serviceable Obtainable Market (SOM)'
        }
      ]
    },
    {
      name: 'financialProjections',
      title: 'Financial Projections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'year',
              type: 'string',
              title: 'Year'
            },
            {
              name: 'revenue',
              type: 'string',
              title: 'Revenue'
            },
            {
              name: 'users',
              type: 'string',
              title: 'Users'
            },
            {
              name: 'milestones',
              type: 'array',
              title: 'Key Milestones',
              of: [{type: 'string'}]
            }
          ]
        }
      ]
    }
  ]
})

// Market Analysis Schema
const marketAnalysis = defineType({
  name: 'marketAnalysis',
  title: 'Market Analysis',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'overview',
      title: 'Market Overview',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'competitors',
      title: 'Competitors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Company Name'
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description'
            },
            {
              name: 'strengths',
              type: 'array',
              title: 'Strengths',
              of: [{type: 'string'}]
            },
            {
              name: 'weaknesses',
              type: 'array',
              title: 'Weaknesses',
              of: [{type: 'string'}]
            }
          ]
        }
      ]
    },
    {
      name: 'opportunities',
      title: 'Market Opportunities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title'
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description'
            },
            {
              name: 'marketSize',
              type: 'string',
              title: 'Market Size'
            },
            {
              name: 'timeline',
              type: 'string',
              title: 'Timeline'
            }
          ]
        }
      ]
    },
    {
      name: 'trends',
      title: 'Market Trends',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'trend',
              type: 'string',
              title: 'Trend'
            },
            {
              name: 'impact',
              type: 'text',
              title: 'Impact'
            },
            {
              name: 'timeline',
              type: 'string',
              title: 'Timeline'
            }
          ]
        }
      ]
    }
  ]
})

export const schemaTypes = [slide, businessModel, marketAnalysis]
