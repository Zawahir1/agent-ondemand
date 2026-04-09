import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-04-07');

  return [
    {
      url: 'https://agent-ondemand.com/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://agent-ondemand.com/front-desk',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://agent-ondemand.com/real-estate',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://agent-ondemand.com/palestre',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://agent-ondemand.com/about',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://agent-ondemand.com/privacy',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://agent-ondemand.com/terms',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
