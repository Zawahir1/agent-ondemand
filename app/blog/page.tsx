import { Metadata } from 'next';
import { reader } from './reader';
import BlogListingClient from '@/components/BlogListingClient';

export const metadata: Metadata = {
  title: 'AI Calling & Voice AI Blog | Agent On Demand',
  description: 'Read the latest news, guides, and articles about the future of vocal AI, AI receptionists, and voice automation.',
};

export default async function BlogPage() {
  const rawPosts = await reader.collections.posts.all();
  
  const posts = rawPosts.map((post) => ({
    slug: post.slug,
    entry: {
      title: post.entry.title,
      publishedAt: post.entry.publishedAt || new Date().toISOString().split('T')[0],
      author: post.entry.author,
      description: post.entry.description,
      metaTitle: post.entry.metaTitle,
      metaDescription: post.entry.metaDescription,
      ogImage: post.entry.ogImage,
      language: post.entry.language,
    },
  }));

  return <BlogListingClient posts={posts} />;
}
