'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTheme } from './theme-provider';
import { Moon, Sun } from 'lucide-react';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className='bg-white dark:bg-gray-800 border-b dark:border-gray-700'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link
          href='/'
          className='text-2xl font-bold text-blue-600 dark:text-blue-400'
        >
          OJP
        </Link>
        <nav className='flex items-center space-x-4'>
          <Link href='/problems'>
            <Button variant='ghost'>문제 목록</Button>
          </Link>
          <Button variant='outline'>로그인</Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <Moon className='h-[1.2rem] w-[1.2rem]' />
            ) : (
              <Sun className='h-[1.2rem] w-[1.2rem]' />
            )}
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
