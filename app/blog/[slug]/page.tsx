import { notFound } from "next/navigation";
import { reader } from "../reader";
import BlogContentClient from "@/components/BlogContentClient";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await reader.collections.posts.all();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);
  
  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.description,
    openGraph: post.ogImage
      ? {
          images: [
            {
              url: `https://www.agent-ondemand.com${post.ogImage}`,
            },
          ],
        }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    notFound();
  }

  const contentNodes = await post.content();

  const translationMap: Record<string, string> = {};
  if (post.language) {
    translationMap[post.language] = `/blog/${slug}`;
  }
  if (post.translations) {
    post.translations.forEach((t) => {
      if (t.lang && t.linkedPost) {
        translationMap[t.lang] = `/blog/${t.linkedPost}`;
      }
    });
  }

  const postData = {
    title: post.title,
    publishedAt: post.publishedAt || new Date().toISOString().split('T')[0],
    author: post.author,
    description: post.description,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
    ogImage: post.ogImage,
    keyTakeaways: post.keyTakeaways,
    faqs: post.faqs,
    schemaOverride: post.schemaOverride,
    translations: translationMap,
  };

  return (
    <BlogContentClient post={postData} content={contentNodes} slug={slug} />
  );
}
