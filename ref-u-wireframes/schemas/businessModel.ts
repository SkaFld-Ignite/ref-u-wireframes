import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'businessModel',
  title: 'Business Model',
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
      title: 'Overview',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
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
              title: 'Name',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'metrics',
              type: 'array',
              title: 'Key Metrics',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'label',
                      type: 'string',
                      title: 'Label',
                    },
                    {
                      name: 'value',
                      type: 'string',
                      title: 'Value',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'marketSize',
      title: 'Market Size',
      type: 'object',
      fields: [
        {
          name: 'tam',
          type: 'string',
          title: 'Total Addressable Market (TAM)',
        },
        {
          name: 'sam',
          type: 'string',
          title: 'Serviceable Addressable Market (SAM)',
        },
        {
          name: 'som',
          type: 'string',
          title: 'Serviceable Obtainable Market (SOM)',
        },
      ],
    }),
  ],
})
