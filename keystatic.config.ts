import { config, fields, collection } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'production' &&
    process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
    process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
    process.env.KEYSTATIC_SECRET
      ? {
          kind: 'github',
          repo: {
            owner: process.env.NEXT_PUBLIC_KEYSTATIC_REPO_OWNER || 'owner',
            name: process.env.NEXT_PUBLIC_KEYSTATIC_REPO_NAME || 'repo',
          },
        }
      : {
          kind: 'local',
        },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'slug',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.slug({ name: { label: 'Slug' } }),
        publishedAt: fields.date({
          label: 'Published Date',
          defaultValue: { kind: 'today' },
        }),
        author: fields.text({ label: 'Author', defaultValue: 'Agent On Demand Team' }),
        layoutStructure: fields.select({
          label: 'Layout Structure',
          description: 'Select the visual template for this blog post',
          options: [
            { label: 'Standard Article', value: 'standard' },
            { label: 'Case Study', value: 'case-study' },
            { label: 'Interactive Feature', value: 'interactive' },
          ],
          defaultValue: 'standard',
        }),
        description: fields.text({
          label: 'Short Description / Excerpt',
          multiline: true,
        }),
        metaTitle: fields.text({
          label: 'SEO Meta Title',
          description: 'Used for the <title> tag. Recommended length: 50-60 characters.',
        }),
        metaDescription: fields.text({
          label: 'SEO Meta Description',
          multiline: true,
          description: 'Used for the meta description. Recommended length: 150-160 characters.',
        }),
        ogImage: fields.image({
          label: 'OpenGraph Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog',
          },
        }),
      },
    }),
  },
});
