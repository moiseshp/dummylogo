import type { MetadataRoute } from 'next';
import { getPosts } from '@/server/actions/get-posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: posts = [] } = await getPosts();

  return posts.map((item) => ({
    url: `https://dummylogo.vercel.app/blog/${item.slug}`,
    lastModified: item.createdAt,
  }));
}
