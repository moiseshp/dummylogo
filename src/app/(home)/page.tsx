import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-0 -mt-[1px]">
      {Array.from({ length: 40 }).map((_, i) => (
        <Link
          href={`/logo-${i + 1}`}
          key={i}
          className="flex items-center bg-white justify-center h-96 border -mr-[1px] -mb-[1px]"
        >
          <div className="p-20">
            <h2>{i + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              alias, iusto dolore dicta nulla perspiciatis error, deserunt in
              culpa quod nam provident repellendus rerum. Aut illum iusto eum
              autem in?
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
