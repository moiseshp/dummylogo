import { createClient } from '@/server/config';

export async function getPosts() {
  const db = createClient();
  const { data, error } = await db.from('posts').select();

  if (error) {
    return { error };
  }

  return {
    data: data.map((item) => ({
      ...item,
      imageUrl: item.image_url,
      metaDescription: item.meta_description,
    })),
  };
}