import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className='bg-white border-b'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href='/' className='text-2xl font-bold text-blue-600'>
          OJP
        </Link>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/problems'>
                <Button variant='ghost'>문제 목록</Button>
              </Link>
            </li>
            <li>
              <Button variant='outline'>로그인</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
