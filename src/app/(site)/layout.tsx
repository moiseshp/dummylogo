import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { baseFont } from '@/app/fonts';
import { Navbar } from '@/app/(site)/(components)/navbar';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toast';
import '@/app/globals.css';

export const metadata: Metadata = {
  title:
    '2024 © dummylogo by moiseshp | Create Dummy Logos for Development Projects | Dummy Logo Builder',
  description:
    'Dummy Logo Builder helps developers create placeholder logos for testing and design purposes in seconds',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" async /> */}
        <GoogleTagManager gtmId="G-W7MJZQ006Q" />
      </head>
      <body className={cn('flex flex-col min-h-screen', baseFont.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
