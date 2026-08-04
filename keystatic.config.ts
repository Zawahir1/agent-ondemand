import { config, fields, collection } from '@keystatic/core';

export default config({
  storage:
    process.env.NEXT_PUBLIC_VERCEL_ENV
      ? {
          kind: 'github',
          repo: {
            owner: process.env.NEXT_PUBLIC_KEYSTATIC_REPO_OWNER || 'Zawahir1',
            name: process.env.NEXT_PUBLIC_KEYSTATIC_REPO_NAME || 'agent-ondemand',
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
        language: fields.select({
          label: 'Post Language',
          options: [
            { label: 'English', value: 'en' },
            { label: 'Italiano', value: 'it' },
            { label: 'Español', value: 'es' },
            { label: 'Français', value: 'fr' },
            { label: 'Deutsch', value: 'de' },
          ],
          defaultValue: 'en',
        }),
        translations: fields.array(
          fields.object({
            lang: fields.select({
              label: 'Language',
              options: [
                { label: 'English', value: 'en' },
                { label: 'Italiano', value: 'it' },
                { label: 'Español', value: 'es' },
                { label: 'Français', value: 'fr' },
                { label: 'Deutsch', value: 'de' },
              ],
              defaultValue: 'en',
            }),
            linkedPost: fields.relationship({
              label: 'Linked Post Translation',
              collection: 'posts',
            }),
          }),
          {
            label: 'Translated Versions of this Post',
            itemLabel: (item) => `${item.fields.lang.value}: ${item.fields.linkedPost.value || '(select post)'}`,
          }
        ),
        keyTakeaways: fields.array(
          fields.text({ label: 'Takeaway' }),
          {
            label: 'Key Takeaways',
            itemLabel: (item) => item.value,
          }
        ),
        faqs: fields.array(
          fields.object({
            question: fields.text({ label: 'Question' }),
            answer: fields.text({ label: 'Answer', multiline: true }),
          }),
          {
            label: 'Frequently Asked Questions (FAQs)',
            itemLabel: (item) => item.fields.question.value || 'New FAQ',
          }
        ),
        schemaOverride: fields.text({
          label: 'Custom JSON-LD Schema Override',
          description: 'Paste your custom JSON-LD schema blocks here (FAQPage, Article, etc.) to override defaults.',
          multiline: true,
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog',
          },
        }),
      },
    }),
  },
});
