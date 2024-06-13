import { siteData } from '@/lib/metadata/metadata'
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteData.baseUrl}/`,
      changeFrequency: 'monthly',
    },
    {
      url: `${siteData.baseUrl}/introduction`,
      changeFrequency: 'monthly',
    },
    {
      url: `${siteData.baseUrl}/installation`,
      changeFrequency: 'monthly',
    },
    {
      url: `${siteData.baseUrl}/download-folder`,
      changeFrequency: 'monthly',
    },
    {
      url: `${siteData.baseUrl}/fade`,
      changeFrequency: 'monthly',
    },
    {
      url: `${siteData.baseUrl}/zoom`,
      changeFrequency: 'monthly',
    },
    {
      url: `${siteData.baseUrl}/flip`,
      changeFrequency: 'monthly',
    },
    {
      url: `${siteData.baseUrl}/privacy-policy`,
      changeFrequency: 'monthly',
    },
    
  ]
}