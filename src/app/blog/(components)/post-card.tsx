import Link from 'next/link';
import { Calendar, User, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { IPost } from '@/app/blog/(types)/post';
import { Button } from '@/components/ui/button';

export const PostCard: React.FC<IPost> = ({
  title,
  createdAt,
  slug,
  metaDescription,
  imageUrl,
}) => {
  return (
    <div className="rounded-lg border overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5 md:p-8">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{metaDescription}</p>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <User className="mr-2" />
          <span className="mr-4">moiseshp</span>
          <Calendar className="mr-2" />
          <span>{createdAt}</span>
        </div>
        <Button asChild>
          <Link href={`/blog/${slug}`} title={`Read more about ${title}`}>
            Leer más
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};
