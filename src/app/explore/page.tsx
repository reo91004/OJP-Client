'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { generateProblems, Problem } from './problemData';
import Link from 'next/link';

const years = ['전체', '2023', '2022', '2021', '2020', '2019'];
// 기존에 하/중/상 -> '전체', '50% 이하', '50% 초과'로 변경
const answerRateFilters = ['전체', '50% 이하', '50% 초과'];
const problemNumbers = ['전체', '1-10', '11-20', '21-30'];
const problemTypes = ['전체', '미적분', '확률과 통계', '기하', '공통'];

const problems = generateProblems(300); // 300개의 문제 생성

export default function ExplorePage() {
  const [selectedYear, setSelectedYear] = useState('전체');
  const [selectedAnswerRate, setSelectedAnswerRate] = useState('전체');
  const [selectedNumber, setSelectedNumber] = useState('전체');
  const [selectedType, setSelectedType] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 정답률 정렬 상태: '', 'asc', 'desc'
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');

  // 정답률 정렬 토글 함수
  const toggleSortOrder = () => {
    setSortOrder((prev) => {
      if (prev === '') return 'asc'; // 아무 정렬 없으면 오름차순
      if (prev === 'asc') return 'desc'; // 오름차순이면 내림차순
      return ''; // 내림차순이면 정렬 해제
    });
  };

  const filteredProblems = useMemo(() => {
    // 1) 필터링
    let temp = problems.filter((problem) => {
      // 연도 필터
      const inYear = selectedYear === '전체' || problem.year === selectedYear;

      // 정답률 필터: '전체', '50% 이하', '50% 초과'
      let inAnswerRate = true;
      if (selectedAnswerRate === '50% 이하') {
        inAnswerRate = problem.answerRate <= 50;
      } else if (selectedAnswerRate === '50% 초과') {
        inAnswerRate = problem.answerRate > 50;
      }

      // 문제 번호 범위 필터
      let inNumber = true;
      if (selectedNumber !== '전체') {
        if (selectedNumber === '1-10') {
          inNumber = problem.number >= 1 && problem.number <= 10;
        } else if (selectedNumber === '11-20') {
          inNumber = problem.number >= 11 && problem.number <= 20;
        } else {
          // 21-30
          inNumber = problem.number >= 21 && problem.number <= 30;
        }
      }

      // 유형 필터
      const inType = selectedType === '전체' || problem.type === selectedType;

      // 검색 필터 (제목 기준)
      const inSearch = problem.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return inYear && inAnswerRate && inNumber && inType && inSearch;
    });

    // 2) 정답률 정렬
    if (sortOrder === 'asc') {
      temp.sort((a, b) => a.answerRate - b.answerRate);
    } else if (sortOrder === 'desc') {
      temp.sort((a, b) => b.answerRate - a.answerRate);
    }

    return temp;
  }, [
    selectedYear,
    selectedAnswerRate,
    selectedNumber,
    selectedType,
    searchTerm,
    sortOrder,
  ]);

  const pageCount = Math.ceil(filteredProblems.length / itemsPerPage);
  const currentProblems = filteredProblems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>문제 탐색</h1>

      <div className='space-y-4'>
        {/* 년도 필터 */}
        <div>
          <Label className='text-lg font-semibold'>년도</Label>
          <div className='flex flex-wrap gap-2 mt-2'>
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedYear(year);
                  setCurrentPage(1);
                }}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>

        {/* 정답률 필터 */}
        <div>
          <Label className='text-lg font-semibold'>정답률</Label>
          <div className='flex flex-wrap gap-2 mt-2'>
            {answerRateFilters.map((answerRate) => (
              <Button
                key={answerRate}
                variant={
                  selectedAnswerRate === answerRate ? 'default' : 'outline'
                }
                onClick={() => {
                  setSelectedAnswerRate(answerRate);
                  setCurrentPage(1);
                }}
              >
                {answerRate}
              </Button>
            ))}
          </div>
        </div>

        {/* 문제 번호, 유형 필터 */}
        <div className='flex gap-4'>
          <div className='flex-1'>
            <Label htmlFor='number' className='text-lg font-semibold'>
              문제 번호
            </Label>
            <Select
              onValueChange={(val) => {
                setSelectedNumber(val);
                setCurrentPage(1);
              }}
              defaultValue={selectedNumber}
            >
              <SelectTrigger id='number'>
                <SelectValue placeholder='문제 번호 선택' />
              </SelectTrigger>
              <SelectContent>
                {problemNumbers.map((number) => (
                  <SelectItem key={number} value={number}>
                    {number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className='flex-1'>
            <Label htmlFor='type' className='text-lg font-semibold'>
              유형
            </Label>
            <Select
              onValueChange={(val) => {
                setSelectedType(val);
                setCurrentPage(1);
              }}
              defaultValue={selectedType}
            >
              <SelectTrigger id='type'>
                <SelectValue placeholder='유형 선택' />
              </SelectTrigger>
              <SelectContent>
                {problemTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 검색 */}
        <div>
          <Label htmlFor='search' className='text-lg font-semibold'>
            검색
          </Label>
          <Input
            id='search'
            placeholder='문제 검색...'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className='mt-2'
          />
        </div>

        {/* 정답률 정렬 버튼 */}
        <div className='flex items-center gap-2 mt-2'>
          <Button onClick={toggleSortOrder}>
            정답률 정렬:
            {sortOrder === ''
              ? ' 없음'
              : sortOrder === 'asc'
              ? ' 오름차순'
              : ' 내림차순'}
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>년도</TableHead>
            <TableHead>정답률</TableHead>
            <TableHead>번호</TableHead>
            <TableHead>유형</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentProblems.map((problem) => (
            <TableRow key={problem.id}>
              <TableCell>{problem.id}</TableCell>
              <TableCell>
                <Link
                  href={`/problems/${problem.id}`}
                  className='hover:underline text-blue-600 dark:text-blue-400'
                >
                  {problem.title}
                </Link>
              </TableCell>
              <TableCell>{problem.year}</TableCell>
              <TableCell>
                {/* 정답률을 소수점 2자리까지 표시, 예) "43.21%" */}
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
              </TableCell>
              <TableCell>{problem.number}</TableCell>
              <TableCell>{problem.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 페이지네이션 */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {[...Array(pageCount)]
            .map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => setCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))
            // 많을 경우 앞뒤로 잘라서 보여주기
            .slice(
              Math.max(0, currentPage - 3),
              Math.min(pageCount, currentPage + 2)
            )}
          {currentPage + 2 < pageCount && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageCount))
              }
              disabled={currentPage === pageCount}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
