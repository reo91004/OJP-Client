import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='space-y-8'>
      <section className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>수능 수학 기출 문제 추천</h1>
        <p className='text-xl mb-6'>맞춤형 학습으로 수학 실력을 향상시키세요</p>
        <Link href='/problems'>
          <Button size='lg'>문제 풀기 시작</Button>
        </Link>
      </section>

      <section className='grid md:grid-cols-3 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>맞춤형 문제 추천</CardTitle>
            <CardDescription>
              AI가 당신의 학습 패턴을 분석하여 최적의 문제를 추천합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant='outline' className='w-full'>
              자세히 보기
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>실시간 성적 분석</CardTitle>
            <CardDescription>
              문제를 풀 때마다 실시간으로 성적이 분석되어 제공됩니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant='outline' className='w-full'>
              자세히 보기
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>오답 노트</CardTitle>
            <CardDescription>
              틀린 문제를 효과적으로 복습할 수 있는 오답 노트 기능을 제공합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant='outline' className='w-full'>
              자세히 보기
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
