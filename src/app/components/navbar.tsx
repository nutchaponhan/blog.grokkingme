import Link from 'next/link';
import { ReactNode } from 'react';

type LinkItemProps = {
  link: string;
  children: ReactNode;
};

function LinkItem({ link, children }: LinkItemProps) {
  return <Link href={link}>{children}</Link>;
}

function Navbar() {
  return (
    <nav className='flex justify-between py-4'>
      <section>
        <LinkItem link='/'>Grokking</LinkItem>
      </section>
      <section>
        <span className='p-2'>
          <LinkItem link='/blogs'>Blog</LinkItem>
        </span>
        <span className='p-2'>
          <LinkItem link='/projects'>Project</LinkItem>
        </span>
        <span className='p-2'>
          <LinkItem link='/about'>about</LinkItem>
        </span>
      </section>
    </nav>
  );
}

export default Navbar;
