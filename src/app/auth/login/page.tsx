'use client';

import Image from 'next/image';
import Logo from '@/../public/images/logo.svg';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Eye, EyeOff } from 'lucide-react';

export default function Page() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 모달 상태
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [failureModalOpen, setFailureModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  // 로그인 처리 예시
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 추가
    // 성공 혹은 실패에 따라 모달 열기
    const isSuccess = email === 'test@test.com' && password === '1234'; // 예시
    if (isSuccess) {
      setSuccessModalOpen(true);
    } else {
      setErrorMessage('이메일 또는 비밀번호가 잘못되었습니다.');
      setFailureModalOpen(true);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-[80vh] px-4 pt-12'>
      <Link href='/'>
        <Image src={Logo} alt='logo' width={260} className='mb-8' priority />
      </Link>
      <Card className='w-full max-w-md'>
        <CardHeader className='text-center'>
          <CardTitle className='text-[1.7rem] font-bold text-slate-700'>
            로그인
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <Input
                type='text'
                placeholder='이메일'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='relative'>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder='비밀번호'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type='button'
                variant='ghost'
                size='icon'
                className='absolute inset-y-0 right-1 my-auto hover:bg-transparent'
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff className='h-5 w-5 text-[#3699ff]' />
                ) : (
                  <Eye className='h-5 w-5 text-[#3699ff]' />
                )}
              </Button>
            </div>
            <div className='flex items-center justify-between'>
              <Link
                href='#'
                className='text-sm text-slate-500 hover:text-[#3699ff] underline underline-offset-2'
              >
                비밀번호 찾기
              </Link>
              <Button type='submit' className='bg-[#3699ff] hover:bg-[#1086ff]'>
                로그인
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <span className='text-sm text-slate-500 mr-2'>
            아직 계정이 없으신가요?
          </span>
          <Link
            href='/auth/register'
            className='text-sm text-[#3699ff] hover:text-[#1086ff]'
          >
            회원가입
          </Link>
        </CardFooter>
      </Card>
      {/* 성공 모달 */}
      <Dialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
        <DialogContent className='max-w-sm text-center'>
          <DialogHeader>
            {/* Success Icon */}
            <div className='flex justify-center items-center mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='48'
                height='48'
                className='text-green-500 animate-bounce'
              >
                <path
                  fill='currentColor'
                  d='M9 19a1 1 0 0 1-.707-.293l-5-5a1 1 0 0 1 1.414-1.414L9 16.586l10.293-10.293a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 9 19Z'
                />
              </svg>
            </div>
            <DialogTitle className='text-xl font-semibold text-slate-700'>
              로그인 성공
            </DialogTitle>
            <DialogDescription className='text-slate-500'>
              포트폴리오 페이지로 이동합니다.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              className='w-full bg-[#3699ff] hover:bg-[#1086ff]'
              onClick={() => {
                setSuccessModalOpen(false);
                router.push('/portfolio');
              }}
            >
              확인
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* 실패 모달 */}
      <Dialog open={failureModalOpen} onOpenChange={setFailureModalOpen}>
        <DialogContent className='max-w-sm text-center'>
          <DialogHeader>
            {/* Failure Icon */}
            <div className='flex justify-center items-center mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='48'
                height='48'
                className='text-red-500 animate-bounce'
              >
                <path
                  fill='currentColor'
                  d='M6.343 6.343a1 1 0 0 1 1.414 0L12 10.586l4.243-4.243a1 1 0 1 1 1.414 1.414L13.414 12l4.243 4.243a1 1 0 0 1-1.414 1.414L12 13.414l-4.243 4.243a1 1 0 0 1-1.414-1.414L10.586 12 6.343 7.757a1 1 0 0 1 0-1.414Z'
                />
              </svg>
            </div>
            <DialogTitle className='text-xl font-semibold text-red-600'>
              로그인 실패
            </DialogTitle>
            <DialogDescription className='text-slate-500'>
              {errorMessage}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant='secondary'
              className='w-full'
              onClick={() => setFailureModalOpen(false)}
            >
              닫기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
