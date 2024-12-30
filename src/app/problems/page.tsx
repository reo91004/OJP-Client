import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const problems = [
  {
    id: 1,
    title: '2023학년도 수능 수학 가형 20번',
    difficulty: '상',
    tags: ['미적분', '극한'],
  },
  {
    id: 2,
    title: '2022학년도 수능 수학 나형 30번',
    difficulty: '중',
    tags: ['확률과 통계', '조건부확률'],
  },
  {
    id: 3,
    title: '2021학년도 수능 수학 가형 15번',
    difficulty: '하',
    tags: ['기하', '벡터의 내적'],
  },
];

export default function ProblemsPage() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>문제 목록</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {problems.map((problem) => (
          <Card key={problem.id}>
            <CardHeader>
              <CardTitle>{problem.title}</CardTitle>
              <CardDescription>난이도: {problem.difficulty}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-wrap gap-2'>
                {problem.tags.map((tag) => (
                  <span
                    key={tag}
                    className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/problems/${problem.id}`}>
                <Button>문제 풀기</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
