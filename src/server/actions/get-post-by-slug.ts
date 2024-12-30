import { createClient } from '@/server/config';

export async function getPostBySlug(slug: string) {
  const db = createClient();
  const { data, error } = await db
    .from('posts')
    .select()
    .eq('slug', slug)
    .limit(1)
    .single();

  if (error) {
    return { error };
  }

  return {
    ...data,
    imageUrl: data.image_url,
    metaDescription: data.meta_description,
  };
}
