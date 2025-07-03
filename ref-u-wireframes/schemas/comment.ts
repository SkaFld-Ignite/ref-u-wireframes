import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Investor Comments',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Page ID',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'investor',
      title: 'Investor Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'In Review', value: 'review'},
          {title: 'Addressed', value: 'addressed'}
        ]
      },
      initialValue: 'new'
    }),
    defineField({
      name: 'response',
      title: 'Team Response',
      type: 'text'
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: 'investor',
      subtitle: 'section'
    }
  }
})
