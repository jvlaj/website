import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jvlaj.com',
      lastModified: new Date(),
    },
    {
      url: 'https://jvlaj.com/journal',
      lastModified: new Date(),
    },
    {
      url: 'https://jvlaj.com/posts',
      lastModified: new Date(),
    },
    {
      url: 'https://jvlaj.com/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://jvlaj.com/contact',
      lastModified: new Date(),
    },
  ]
}