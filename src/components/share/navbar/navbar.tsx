'use client';

import { Box } from '@radix-ui/themes';
import { MoonIcon } from '@radix-ui/react-icons';

import { useAppTheme } from '@/contexts/theme/theme.context';

const NavBar = () => {
  const { mode, toggle } = useAppTheme();

  return (
    <nav className='my-6 text-xl'>
      <Box className='mx-auto max-w-screen-lg px-2'>
        <Box className='relative flex items-center justify-between'>
          <Box className='flex flex-1 items-center'>
            <Box className='flex flex-shrink-0 items-center'>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt='Your Company'
              />
            </Box>
            <Box className='ml-6'>
              <Box className='flex space-x-4'>
                <a
                  href='#'
                  className='rounded-md px-3 py-2'
                  aria-current='page'
                >
                  Latest
                </a>
                <a href='#' className='rounded-md px-3 py-2'>
                  Posts
                </a>
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
