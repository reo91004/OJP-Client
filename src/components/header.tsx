'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTheme } from './theme-provider';
import { Moon, Sun, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
        <nav className='hidden md:flex items-center space-x-4'>
          <Link href='/explore'>
            <Button variant='ghost'>탐색</Button>
          </Link>
          <Link href='/ranking'>
            <Button variant='ghost'>랭킹</Button>
          </Link>
          <Link href='/board'>
            <Button variant='ghost'>게시판</Button>
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild className='md:hidden'>
            <Button variant='outline' size='icon'>
              <Menu className='h-[1.2rem] w-[1.2rem]' />
              <span className='sr-only'>Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>
              <Link href='/explore'>탐색</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/ranking'>랭킹</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/board'>게시판</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/login'>로그인</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
