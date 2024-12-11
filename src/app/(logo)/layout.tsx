import { Navbar } from '@/app/(logo)/(components)/navbar';
import '@/app/globals.css';

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
      <footer>
        <div className="container text-sm text-muted-foreground py-4 flex justify-center gap-x-1">
          <span>2024 © dummylogo by</span>
          <a
            href="https://x.com/moiseseduardohp"
            target="_blank"
            className="font-semibold"
          >
            moiseshp
          </a>
        </div>
      </footer>
    </>
  );
}
