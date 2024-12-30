import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/config';
import { getPosts } from '@/server/actions/get-posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: posts = [] } = await getPosts();

  return posts.map((item) => ({
    url: `${BASE_URL}/product/${item.slug}`,
    lastModified: item.createdAt,
  }));
}
