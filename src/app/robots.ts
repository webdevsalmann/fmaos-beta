import { siteData } from '@/lib/metadata/metadata'
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: siteData.baseUrl,
  }
}