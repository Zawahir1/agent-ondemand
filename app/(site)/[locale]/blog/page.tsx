import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { reader } from "./reader";
import BlogListingClient from "@/components/BlogListingClient";
import { isValidLocale, buildAlternates, type Locale } from "@/lib/i18n";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const alternates = buildAlternates("/blog");

  return {
    title: "AI Calling & Voice AI Blog | Agent On Demand",
    description:
      "Read the latest news, guides, and articles about the future of vocal AI, AI receptionists, and voice automation.",
    alternates: {
      canonical: `https://www.agent-ondemand.com/${locale}/blog`,
      languages: alternates.languages as Record<string, string>,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  const rawPosts = await reader.collections.posts.all();

  const posts = rawPosts.map((post) => ({
    slug: post.slug,
    entry: {
      title: post.entry.title,
      publishedAt: post.entry.publishedAt || new Date().toISOString().split("T")[0],
      author: post.entry.author,
      description: post.entry.description,
      metaTitle: post.entry.metaTitle,
      metaDescription: post.entry.metaDescription,
      ogImage: post.entry.ogImage,
      language: post.entry.language,
    },
  }));

  return <BlogListingClient posts={posts} currentLocale={locale as Locale} />;
}
