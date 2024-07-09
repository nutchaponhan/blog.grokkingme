import { Section } from '@radix-ui/themes';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GrokkingMe | Posts',
  description: 'Blog Posts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Section>{children}</Section>;
}
