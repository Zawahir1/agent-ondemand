import type { MetadataRoute } from 'next';
import { LOCALES, BASE_URL } from '@/lib/i18n';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

const STATIC_ROUTES = [
  "",
  "/pricing",
  "/receptionist",
  "/outbound",
  "/real-estate",
  "/automotive",
  "/gym",
  "/contact",
  "/terms",
  "/privacy",
  "/dpa",
  "/aup",
  "/disclaimer",
  "/cookies",
  "/blog"
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [];

  // 1. Static Routes
  for (const route of STATIC_ROUTES) {
    // Generate alternates for this route across all locales
    const languages: Record<string, string> = {};
    for (const locale of LOCALES) {
      languages[locale] = `${BASE_URL}/${locale}${route}`;
    }

    // Add English as the default un-prefixed canonical base in sitemap, but with alternate language links
    routes.push({
      url: `${BASE_URL}/en${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? 'weekly' : 'monthly',
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages,
      },
    });
  }

  // 2. Dynamic Blog Posts
  const posts = await reader.collections.posts.all();
  
  for (const post of posts) {
    const postLang = post.entry.language || "en";
    
    // Determine the alternates for this specific post
    const languages: Record<string, string> = {};
    languages[postLang] = `${BASE_URL}/${postLang}/blog/${post.slug}`;
    
    if (post.entry.translations) {
      post.entry.translations.forEach((t) => {
        if (t.lang && t.linkedPost) {
          languages[t.lang] = `${BASE_URL}/${t.lang}/blog/${t.linkedPost}`;
        }
      });
    }

    routes.push({
      url: `${BASE_URL}/${postLang}/blog/${post.slug}`,
      lastModified: new Date(post.entry.publishedAt || new Date()),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages,
      },
    });
  }

  return routes;
}
