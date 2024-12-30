import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function ProblemPage({ params }: { params: { id: string } }) {
  // 실제 구현에서는 이 데이터를 API나 데이터베이스에서 가져와야 합니다.
  const problem = {
    id: params.id,
    title: `2023학년도 수능 수학 가형 ${params.id}번`,
    content: '다음 중 올바른 답을 고르시오.',
    options: ['1) 답변 1', '2) 답변 2', '3) 답변 3', '4) 답변 4', '5) 답변 5'],
    explanation: '이 문제의 해설은 다음과 같습니다...',
  };

  return (
    <div className='max-w-2xl mx-auto'>
      <Card>
        <CardHeader>
          <CardTitle>{problem.title}</CardTitle>
          <CardDescription>문제 ID: {problem.id}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>{problem.content}</p>
          <RadioGroup>
            {problem.options.map((option, index) => (
              <div key={index} className='flex items-center space-x-2'>
                <RadioGroupItem
                  value={`option-${index + 1}`}
                  id={`option-${index + 1}`}
                />
                <Label htmlFor={`option-${index + 1}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant='outline'>이전 문제</Button>
          <Button>제출</Button>
          <Button variant='outline'>다음 문제</Button>
        </CardFooter>
      </Card>
      <Card className='mt-6'>
        <CardHeader>
          <CardTitle>문제 해설</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{problem.explanation}</p>
        </CardContent>
      </Card>
    </div>
  );
}
