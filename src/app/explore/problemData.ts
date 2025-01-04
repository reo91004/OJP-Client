export type Problem = {
  id: number;
  title: string;
  year: string;
  answerRate: number; // 0 ~ 100 사이 실수
  number: number;
  type: '미적분' | '확률과 통계' | '기하' | '공통';
  updatedAt: string;
};

const types = ['미적분', '확률과 통계', '기하', '공통'] as const;

export function generateProblems(count: number): Problem[] {
  const problems: Problem[] = [];

  for (let i = 1; i <= count; i++) {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30)); // 최근 30일 내 랜덤 날짜

    const randomType = types[Math.floor(Math.random() * types.length)];
    // 0 ~ 100 사이, 소수점 둘째 자리까지
    const randomAnswerRate = parseFloat((Math.random() * 100).toFixed(2));

    problems.push({
      id: i,
      title: `${2023 - Math.floor(i / 30)} 수능 수학 ${randomType} ${
        (i % 30) + 1
      }번`,
      year: `${2023 - Math.floor(i / 30)}`,
      answerRate: randomAnswerRate,
      number: (i % 30) + 1,
      type: randomType,
      updatedAt: date.toISOString().split('T')[0], // YYYY-MM-DD
    });
  }

  return problems;
}

export function getTodaysProblems(
  problems: Problem[],
  date: string
): Problem[] {
  return problems
    .filter((problem) => problem.updatedAt === date)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
}
