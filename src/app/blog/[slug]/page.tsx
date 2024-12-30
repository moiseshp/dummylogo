import { Calendar, User, Tag } from '@phosphor-icons/react/dist/ssr';
import { DummyLogoBanner } from '@/app/blog/(components)/dummy-logo-banner';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostBySlug } from '@/server/actions/get-post-by-slug';
import { BASE_URL } from '@/lib/config';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(slug);
  const title = `DummyLogo - ${post?.title}`;

  return {
    title,
    applicationName: 'dummylogo',
    publisher: 'DummyLogo by moiseshp',
    description: post?.metaDescription,
    openGraph: {
      title,
      description: post?.metaDescription,
      url: `${BASE_URL}/blog/${post?.slug}`,
      images: [
        {
          url: post?.imageUrl,
          width: 1200,
          height: 900,
          alt: post?.description,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@moiseseduardohp',
      title,
      description: post?.metaDescription,
    },
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 lg:px-6 py-4 lg:py-6">
      <DummyLogoBanner />

      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 sm:h-64 md:h-96 rounded-lg border mb-8 mt-6 object-cover"
      />

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center text-muted-foreground mb-4">
        <User className="mr-2" />
        <span className="mr-4">moiseshp</span>
        <Calendar className="mr-2" />
        <span>{post.createdAt}</span>
      </div>

      <div className="prose max-w-none text-foreground mb-10">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      <div className="flex items-center mb-10">
        <Tag className="mr-2" />
        <span className="text-sm font-semibold mr-2">Tags:</span>
        <div className="flex flex-wrap items-center gap-x-2">
          {post.tags.map((item: string) => (
            <span
              key={item}
              className="bg-secondary text-foreground px-3 py-1 rounded-sm text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
