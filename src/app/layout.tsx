import Script from 'next/script';
import { baseFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toast';
import '@/app/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="IuxWFn6CmIedmOeYrsN4dw"
          async
        />
      </head>
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
    </html>
  );
}
