import '@radix-ui/themes/styles.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Container } from '@radix-ui/themes';

import './globals.css';

import { AppTheme } from '@/contexts';
import { Navbar } from '@/components/share';

const montSerrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montSerrat',
});

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
      <body className={montSerrat.className}>
        <AppTheme>
          <Navbar />
          <Container size='3' py={'6'}>
            {children}
          </Container>
        </AppTheme>
      </body>
    </html>
  );
}
