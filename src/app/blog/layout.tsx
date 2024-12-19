import { Navbar } from '@/app/blog/(components)/navbar';
import { Footer } from '@/components/footer';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="sticky top-0 border-b z-10 bg-inherit">
        <Navbar />
      </header>
      <main className="flex flex-col flex-grow">{children}</main>
      <Footer />
    </>
  );
}
