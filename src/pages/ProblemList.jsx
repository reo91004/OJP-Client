// src/pages/ProblemList.jsx
import React, { useState, useEffect } from 'react';
import './ProblemList.css';

function ProblemList() {
  // 연도 필터 상태
  const [selectedYear, setSelectedYear] = useState('전체');
  // 정답률 필터 상태
  const [selectedAccuracyRate, setSelectedAccuracyRate] = useState('전체');
  // 문제 번호 검색
  const [problemNumber, setProblemNumber] = useState('');
  // 유형 검색
  const [problemType, setProblemType] = useState('');

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const [problemsPerPage] = useState(20);

  // 모든 문제 데이터
  const [allProblems, setAllProblems] = useState([]);
  // 필터링된 문제 데이터
  const [filteredProblems, setFilteredProblems] = useState([]);

  // 동적으로 100개의 샘플 문제 생성
  useEffect(() => {
    const generateRandomProblems = () => {
      const years = ['2020', '2021', '2022', '2023', '2024'];
      const subjects = ['수학'];
      const topics = ['미적분', '확률과통계', '기하와벡터'];
      const statuses = ['미적분', '확률과통계', '기하와벡터'];

      const problems = [];

      for (let i = 1; i <= 100; i++) {
        const year = years[Math.floor(Math.random() * years.length)];
        const subject = subjects[Math.floor(Math.random() * subjects.length)];
        const topic = topics[Math.floor(Math.random() * topics.length)];
        const problemNum = Math.floor(Math.random() * 30) + 1;
        const accuracyRate = (Math.random() * 60 + 20).toFixed(2);
        const difficulty = Math.floor(Math.random() * 40) + 10;
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        problems.push({
          id: i.toString(),
          title: `${year} 수능 ${subject} ${topic} ${problemNum}번`,
          year: year,
          accuracyRate: `${accuracyRate}%`,
          difficulty: difficulty.toString(),
          status: status,
        });
      }

      return problems;
    };

    const randomProblems = generateRandomProblems();
    setAllProblems(randomProblems);
    setFilteredProblems(randomProblems);
  }, []);

  // 필터 적용
  const applyFilters = () => {
    let filtered = [...allProblems];

    // 연도 필터 적용
    if (selectedYear !== '전체') {
      filtered = filtered.filter((problem) => problem.year === selectedYear);
    }

    // 정답률 필터 적용
    if (selectedAccuracyRate !== '전체') {
      if (selectedAccuracyRate === '50% 초과') {
        filtered = filtered.filter(
          (problem) => parseFloat(problem.accuracyRate) > 50
        );
      } else if (selectedAccuracyRate === '50% 이하') {
        filtered = filtered.filter(
          (problem) => parseFloat(problem.accuracyRate) <= 50
        );
      }
    }

    // 문제 번호 검색 적용
    if (problemNumber.trim() !== '') {
      filtered = filtered.filter((problem) =>
        problem.title.toLowerCase().includes(problemNumber.toLowerCase())
      );
    }

    // 유형 검색 적용
    if (problemType.trim() !== '') {
      filtered = filtered.filter((problem) =>
        problem.title.toLowerCase().includes(problemType.toLowerCase())
      );
    }

    setFilteredProblems(filtered);
    setCurrentPage(1); // 필터 적용 시 첫 페이지로 리셋
  };

  // 현재 페이지에 표시할 문제 계산
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(
    indexOfFirstProblem,
    indexOfLastProblem
  );

  const years = ['전체', '2024', '2023', '2022', '2021', '2020'];
  const accuracyRates = ['전체', '50% 초과', '50% 이하'];

  return (
    <div className='problem-list-container'>
      <div className='problem-list-header'>
        <h2>문제 목록</h2>

        {/* 필터 섹션 */}
        <div className='filter-section'>
          <div className='filter-group'>
            <h3>년도</h3>
            <div className='filter-options'>
              {years.map((year) => (
                <button
                  key={year}
                  className={`filter-option ${
                    selectedYear === year ? 'active' : ''
                  }`}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className='filter-group'>
            <h3>정답률</h3>
            <div className='filter-options'>
              {accuracyRates.map((rate) => (
                <button
                  key={rate}
                  className={`filter-option ${
                    selectedAccuracyRate === rate ? 'active' : ''
                  }`}
                  onClick={() => setSelectedAccuracyRate(rate)}
                >
                  {rate}
                </button>
              ))}
            </div>
          </div>

          <div className='filter-group'>
            <h3>문제 번호</h3>
            <div className='filter-input-container'>
              <input
                type='text'
                className='filter-input'
                placeholder='용어를 선택해주세요.'
                value={problemNumber}
                onChange={(e) => setProblemNumber(e.target.value)}
              />
              <div className='filter-dot'></div>
            </div>
          </div>

          <div className='filter-group'>
            <h3>유형</h3>
            <div className='filter-input-container'>
              <input
                type='text'
                className='filter-input'
                placeholder='용어를 선택해주세요.'
                value={problemType}
                onChange={(e) => setProblemType(e.target.value)}
              />
              <div className='filter-dot'></div>
            </div>
          </div>
        </div>

        {/* 검색 버튼 */}
        <button className='search-button' onClick={applyFilters}>
          정렬화 정렬 · 검색
        </button>
      </div>

      {/* 문제 목록 테이블 */}
      <div className='problems-table-container'>
        <table className='problems-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>제목</th>
              <th>년도</th>
              <th>정답률</th>
              <th>난이도</th>
              <th>유형</th>
            </tr>
          </thead>
          <tbody>
            {currentProblems.map((problem, index) => (
              <tr key={problem.id}>
                <td>{problem.id}</td>
                <td>{problem.title}</td>
                <td>{problem.year}</td>
                <td>{problem.accuracyRate}</td>
                <td>{problem.difficulty}</td>
                <td>
                  <span className={`status-badge ${problem.status}`}>
                    {problem.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      <div className='pagination'>
        <button
          className='pagination-button'
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          이전
        </button>

        <div className='pagination-pages'>
          {Array.from(
            {
              length: Math.min(
                5,
                Math.ceil(filteredProblems.length / problemsPerPage)
              ),
            },
            (_, i) => {
              // 현재 페이지를 중심으로 앞뒤로 2페이지씩 표시
              let pageNum;
              if (Math.ceil(filteredProblems.length / problemsPerPage) <= 5) {
                pageNum = i + 1;
              } else {
                const middleIndex = Math.min(
                  Math.max(currentPage, 3),
                  Math.ceil(filteredProblems.length / problemsPerPage) - 2
                );
                pageNum = middleIndex - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  className={`pagination-page ${
                    currentPage === pageNum ? 'active' : ''
                  }`}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            }
          )}
        </div>

        <button
          className='pagination-button'
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(
                prev + 1,
                Math.ceil(filteredProblems.length / problemsPerPage)
              )
            )
          }
          disabled={
            currentPage === Math.ceil(filteredProblems.length / problemsPerPage)
          }
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default ProblemList;
