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
    console.error(`GET_POST_BY_SLUG: ${JSON.stringify(error)}`);
    return { error };
  }

  return {
    ...data,
    imageUrl: data.image_url,
    metaDescription: data.meta_description,
  };
}
