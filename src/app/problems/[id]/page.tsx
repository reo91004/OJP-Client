import { notFound } from 'next/navigation';
import { generateProblems, Problem } from '../../explore/problemData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default async function ProblemPage({
  params,
}: {
  params: { id: string };
}) {
  const problems = generateProblems(300);
  const problemId = parseInt(params.id);

  // 문제 ID가 유효하지 않은 경우 early return
  if (isNaN(problemId)) {
    notFound();
  }

  const problem = problems.find((p) => p.id === problemId);

  if (!problem) {
    notFound();
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <Card>
        <CardHeader>
          <CardTitle>{problem.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div>
              <strong>년도:</strong> {problem.year}
            </div>
            <div>
              <strong>정답률: </strong>
              <Badge
                variant={
                  problem.answerRate < 33
                    ? 'destructive'
                    : problem.answerRate < 66
                    ? 'default'
                    : 'outline'
                }
              >
                {problem.answerRate.toFixed(2)}%
              </Badge>
            </div>
            <div>
              <strong>문제 번호:</strong> {problem.number}
            </div>
            <div>
              <strong>유형:</strong> {problem.type}
            </div>
            <div>
              <strong>업데이트 날짜:</strong> {problem.updatedAt}
            </div>
          </div>
          <div className='mt-6'>
            <h3 className='text-lg font-semibold mb-2'>문제 내용</h3>
            <p>나중에 추가해야 함</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
