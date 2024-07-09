/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { Box } from '@radix-ui/themes';
import { MoonIcon } from '@radix-ui/react-icons';

import { useAppTheme } from '@/contexts/theme/theme.context';

const NavBar = () => {
  const { toggle } = useAppTheme();

  return (
    <nav className='py-4 text-xl shadow-lg'>
      <Box className='mx-auto max-w-screen-lg px-2'>
        <Box className='relative flex items-center justify-between'>
          <Box className='flex flex-1 items-center'>
            <Box className='flex flex-shrink-0 items-center'>
              <Link href='/'>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                  alt='Your Company'
                />
              </Link>
            </Box>
            <Box className='ml-6'>
              <Box className='flex space-x-4'>
                <Link
                  href='latest'
                  className='rounded-md px-3 py-2'
                  aria-current='page'
                >
                  Latest
                </Link>
                <Link href='posts' className='rounded-md px-3 py-2'>
                  Posts
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className='inset-y-0 right-0 flex items-center pr-2'>
            <button
              onClick={toggle}
              type='button'
              className='relative rounded-full p-1'
            >
              <MoonIcon width={30} height={30} />
            </button>
          </Box>
        </Box>
      </Box>
    </nav>
  );
};

export default NavBar;
