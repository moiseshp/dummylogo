import { Metadata } from 'next';
import { PostCard } from '@/app/blog/(components)/post-card';
import { DummyLogoBanner } from '@/app/blog/(components)/dummy-logo-banner';
import { getPosts } from '@/server/actions/get-posts';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title:
    '2024 © dummylogo | Explore Our Developer-Focused Articles on Logo Design and Branding',
  description:
    'Discover a wide range of expert articles tailored for developers, covering topics such as logo design, branding strategies, and tools to help you create stunning visual identities for your projects',
};

export default async function Page() {
  const { data: posts, error } = await getPosts();

  if (error) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-4 lg:py-6 flex flex-col gap-6">
      <article className="text-center">
        <h1 className="text-4xl font-bold mb-4">Dummy Logo Articles</h1>
        <p className="text-xl">
          Explore Our Developer-Focused Articles on Logo Design and Branding
        </p>
      </article>

      <DummyLogoBanner />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((item) => (
          <PostCard key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}
