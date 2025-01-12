import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { BookOpen, Trophy, BarChart } from 'lucide-react';
import {
  generateProblems,
  getTodaysProblems,
  Problem,
} from './explore/problemData';

export default function Home() {
  const allProblems = generateProblems(300);
  const today = new Date().toISOString().split('T')[0];
  const todaysProblems = getTodaysProblems(allProblems, today);

  return (
    <div className='space-y-8'>
      <section className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>신용성</h1>
        <p className='text-xl mb-6'>맞춤형 학습으로 수학 실력을 향상시키세요</p>
        <div className='flex justify-center space-x-4'>
          <Link href='/explore'>
            <Button size='lg'>문제 풀기</Button>
          </Link>
          <Link href='/auth/register'>
            <Button size='lg' variant='outline'>
              회원가입
            </Button>
          </Link>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <BookOpen className='mr-2' />
              오늘의 문제
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2'>
              {todaysProblems.map((problem) => (
                <li key={problem.id}>
                  <Link
                    href={`/problems/${problem.id}`}
                    className='hover:underline text-blue-600 dark:text-blue-400'
                  >
                    {problem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <BarChart className='mr-2' />
              문제 통계
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <p>전체 문제 수: 1,000</p>
              <p>풀린 문제 수: 750</p>
              <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                <div
                  className='bg-blue-600 h-2.5 rounded-full'
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <Trophy className='mr-2' />
              랭킹
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className='list-decimal list-inside space-y-2'>
              <li>신용성</li>
              <li>병신우진</li>
              <li>미적5점</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className='mt-8'>
        <h2 className='text-2xl font-bold mb-4'>문제 검색</h2>
        <div className='flex space-x-4'>
          <Input
            type='text'
            placeholder='문제 번호 또는 키워드'
            className='flex-grow'
          />
          <Button>검색</Button>
        </div>
      </section>

      <section className='mt-8'>
        <h2 className='text-2xl font-bold mb-4'>공지사항</h2>
        <Card>
          <CardContent className='p-4'>
            <ul className='space-y-2'>
              <li>
                <Link href='/notice/1' className='hover:underline'>
                  2024학년도 수능 대비 특강 안내
                </Link>
              </li>
              <li>
                <Link href='/notice/2' className='hover:underline'>
                  사이트 업데이트 및 새로운 기술 안내
                </Link>
              </li>
              <li>
                <Link href='/notice/3' className='hover:underline'>
                  수학 경시대회 참가자 모집
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
