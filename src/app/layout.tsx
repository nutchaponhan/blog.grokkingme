import '@radix-ui/themes/styles.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { AppTheme } from '../providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GrokkingMe',
  description: 'Personal Blog Posts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppTheme>{children}</AppTheme>
      </body>
    </html>
  );
}
