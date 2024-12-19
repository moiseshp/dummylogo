import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from '@phosphor-icons/react/dist/ssr';

interface PostCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
  image_url: string;
}

export default function PostCard({
  title,
  excerpt,
  author,
  date,
  slug,
  image_url: imageUrl,
}: PostCardProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 md:p-8">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <User className="mr-2" />
          <span className="mr-4">{author}</span>
          <Calendar className="mr-2" />
          <span>{date}</span>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          Leer más
          <ArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
