import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'slide',
  title: 'Pitch Slides',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slideNumber',
      title: 'Slide Number',
      type: 'number',
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    }),
    defineField({
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
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slideNumber',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: `Slide ${subtitle}`,
      }
    },
  },
})
