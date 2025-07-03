import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'marketAnalysis',
  title: 'Market Analysis',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'overview',
      title: 'Market Overview',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
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
              title: 'Company Name',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'strengths',
              type: 'array',
              title: 'Strengths',
              of: [{type: 'string'}],
            },
            {
              name: 'weaknesses',
              type: 'array',
              title: 'Weaknesses',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    }),
    defineField({
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
              title: 'Title',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'marketSize',
              type: 'string',
              title: 'Market Size',
            },
          ],
        },
      ],
    }),
  ],
})
