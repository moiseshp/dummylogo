import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { baseFont } from '@/app/fonts';
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
      <body className={cn('flex flex-col min-h-screen', baseFont.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-W7MJZQ006Q" />
    </html>
  );
}
