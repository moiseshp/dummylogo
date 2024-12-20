// import Image from 'next/image';
import {
  Calendar,
  User,
  Tag,
  ChatCircle,
} from '@phosphor-icons/react/dist/ssr';

export default function Page() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8">
      <img
        src="/placeholder.svg?height=400&width=800"
        alt="Imagen principal del blog"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg shadow-md mb-8"
      />

      <h1 className="text-4xl font-bold mb-4">Título del Post del Blog</h1>

      <div className="flex items-center text-gray-600 mb-4">
        <User className="mr-2" />
        <span className="mr-4">Autor del Post</span>
        <Calendar className="mr-2" />
        <span>15 de Junio, 2023</span>
      </div>

      <div className="prose max-w-none mb-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <h2>Subtítulo del Post</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>

      <div className="flex items-center mb-8">
        <Tag className="mr-2" />
        <span className="text-sm font-semibold mr-2">Etiquetas:</span>
        <div className="flex flex-wrap">
          {['React', 'Tailwind', 'Blog'].map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <ChatCircle className="mr-2" />
          Comentarios
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold">Usuario Comentarista</p>
            <p className="text-sm text-gray-600">14 de Junio, 2023</p>
            <p className="mt-2">
              Gran artículo, muy informativo y bien escrito.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold">Otro Usuario</p>
            <p className="text-sm text-gray-600">13 de Junio, 2023</p>
            <p className="mt-2">
              Me encantó este post. ¿Podrías escribir más sobre este tema?
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
