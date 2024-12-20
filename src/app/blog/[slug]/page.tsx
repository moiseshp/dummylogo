import { Calendar, User, Tag } from '@phosphor-icons/react/dist/ssr';
import { DummyLogoBanner } from '@/app/blog/(components)/dummy-logo-banner';
import postJSON from '@/server/data/post.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const post = postJSON.find((item) => item.slug === slug);

  return {
    title: `DummyLogo - ${post?.title}`,
    applicationName: 'dummylogo',
    publisher: 'DummyLogo by moiseshp',
    description: post?.metaDescription,
  };
}

export default function Page({ params: { slug } }: PageProps) {
  const post = postJSON.find((item) => item.slug === slug);

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
          {post.tags.map((item) => (
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
