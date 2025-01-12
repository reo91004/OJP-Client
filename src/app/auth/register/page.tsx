'use client';

import Image from 'next/image';
import Logo from '@/../public/images/logo.svg';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
  });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const togglePasswordCheckVisibility = () =>
    setShowPasswordCheck((prev) => !prev);

  const validateEmail = (value: string) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, email: '이메일을 입력해주세요.' }));
      return false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        email: '올바른 이메일 형식이 아닙니다.',
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: '' }));
    return true;
  };

  const validateName = (value: string) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, name: '이름을 입력해주세요.' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, name: '' }));
    return true;
  };

  const validatePassword = (value: string) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, password: '비밀번호를 입력해주세요.' }));
      return false;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        password:
          '비밀번호는 8자 이상, 영문 대/소문자, 숫자를 포함해야 합니다.',
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, password: '' }));
    return true;
  };

  const validatePasswordCheck = (value: string) => {
    if (!value) {
      setErrors((prev) => ({
        ...prev,
        passwordCheck: '비밀번호 확인을 입력해주세요.',
      }));
      return false;
    }
    if (value !== password) {
      setErrors((prev) => ({
        ...prev,
        passwordCheck: '비밀번호가 일치하지 않습니다.',
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, passwordCheck: '' }));
    return true;
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isNameValid = validateName(name);
    const isPasswordValid = validatePassword(password);
    const isPasswordCheckValid = validatePasswordCheck(passwordCheck);

    if (
      !isEmailValid ||
      !isNameValid ||
      !isPasswordValid ||
      !isPasswordCheckValid
    ) {
      return;
    }

    // 회원가입 성공 로직 예시
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div className='flex flex-col items-center justify-center h-[80vh] px-4 pt-12'>
      <Link href='/'>
        <Image src={Logo} alt='logo' width={260} className='mb-8' priority />
      </Link>
      <Card className='w-full max-w-md'>
        <CardHeader className='text-center'>
          <CardTitle className='text-[1.7rem] font-bold text-slate-700'>
            회원가입
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className='space-y-6'>
            <div>
              <Input
                type='text'
                placeholder='이메일'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
              )}
            </div>
            <div>
              <Input
                type='text'
                placeholder='이름'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
              )}
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
              {errors.password && (
                <p className='text-red-500 text-sm mt-1'>{errors.password}</p>
              )}
            </div>
            <div className='relative'>
              <Input
                type={showPasswordCheck ? 'text' : 'password'}
                placeholder='비밀번호 확인'
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
              <Button
                type='button'
                variant='ghost'
                size='icon'
                className='absolute inset-y-0 right-1 my-auto hover:bg-transparent'
                onClick={togglePasswordCheckVisibility}
              >
                {showPasswordCheck ? (
                  <EyeOff className='h-5 w-5 text-[#3699ff]' />
                ) : (
                  <Eye className='h-5 w-5 text-[#3699ff]' />
                )}
              </Button>
              {errors.passwordCheck && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.passwordCheck}
                </p>
              )}
            </div>
            <Button
              type='submit'
              className='bg-[#3699ff] hover:bg-[#1086ff] w-full'
            >
              회원가입
            </Button>
          </form>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <span className='text-sm text-slate-500 mr-2'>
            이미 계정이 있으신가요?
          </span>
          <Link
            href='/auth/login'
            className='text-sm text-[#3699ff] hover:text-[#1086ff]'
          >
            로그인
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
