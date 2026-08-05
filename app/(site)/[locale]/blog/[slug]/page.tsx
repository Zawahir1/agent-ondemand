import { notFound } from "next/navigation";
import { reader } from "../reader";
import BlogContentClient from "@/components/BlogContentClient";
import type { Metadata } from "next";
import { isValidLocale, LOCALES, BASE_URL } from "@/lib/i18n";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const posts = await reader.collections.posts.all();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of LOCALES) {
    for (const post of posts) {
      // Only generate the path for the locale that matches the post's language
      if (post.entry.language === locale) {
        params.push({ locale, slug: post.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) return {};

  // Build hreflang from this post's translations field
  const languages: Record<string, string> = {};
  if (post.language) {
    languages[post.language] = `${BASE_URL}/${post.language}/blog/${slug}`;
  }
  if (post.translations) {
    post.translations.forEach((t) => {
      if (t.lang && t.linkedPost) {
        languages[t.lang] = `${BASE_URL}/${t.lang}/blog/${t.linkedPost}`;
      }
    });
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog/${slug}`,
      languages: languages as Record<string, string>,
    },
    openGraph: post.ogImage
      ? { images: [{ url: `${BASE_URL}${post.ogImage}` }] }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) notFound();

  const post = await reader.collections.posts.read(slug);

  if (!post) notFound();

  const contentNodes = await post.content();

  // Build translation map: lang → URL (with locale prefix)
  const translationMap: Record<string, string> = {};
  if (post.language) {
    translationMap[post.language] = `/${post.language}/blog/${slug}`;
  }
  if (post.translations) {
    post.translations.forEach((t) => {
      if (t.lang && t.linkedPost) {
        translationMap[t.lang] = `/${t.lang}/blog/${t.linkedPost}`;
      }
    });
  }

  const postData = {
    title: post.title,
    publishedAt: post.publishedAt || new Date().toISOString().split("T")[0],
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

  return <BlogContentClient post={postData} content={contentNodes} slug={slug} />;
}
