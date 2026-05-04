import { defineType, defineField } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: '首页横幅',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '主标题',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: '副标题（英文）',
      type: 'string',
    }),
    defineField({
      name: 'manifesto',
      title: '核心理念',
      type: 'text',
    }),
  ],
})

export const productType = defineType({
  name: 'product',
  title: '产品',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '产品名称',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: '产品描述',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: '产品图片',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: '排序序号',
      type: 'number',
    }),
  ],
})

export const honorType = defineType({
  name: 'honor',
  title: '荣誉奖项',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '荣誉名称',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: '详细描述',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: '证书/奖杯图片',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})

export const aboutType = defineType({
  name: 'about',
  title: '关于我',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: '内容',
      type: 'text',
    }),
  ],
})
