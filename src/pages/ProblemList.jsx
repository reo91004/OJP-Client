// src/pages/ProblemList.jsx
import React, { useState, useEffect } from 'react';
import './ProblemList.css';

function ProblemList() {
  // 카테고리 상태
  const [selectedCategory, setSelectedCategory] = useState('전체');

  // 검색 관련 상태
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('제목');

  // 연도 필터 상태
  const [selectedYear, setSelectedYear] = useState('전체');
  // 정답률 필터 상태
  const [selectedAccuracyRate, setSelectedAccuracyRate] = useState('전체');
  // 난이도 필터 상태
  const [selectedDifficulty, setSelectedDifficulty] = useState('전체');

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const [problemsPerPage] = useState(15);

  // 모든 문제 데이터
  const [allProblems, setAllProblems] = useState([]);
  // 필터링된 문제 데이터
  const [filteredProblems, setFilteredProblems] = useState([]);
  // 로딩 상태
  const [isLoading, setIsLoading] = useState(true);

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
          id: 100 - i + 1, // 최근 문제가 위로 오도록 ID 부여
          title: `${year} 수능 ${subject} ${topic} ${problemNum}번`,
          year: year,
          accuracyRate: `${accuracyRate}%`,
          difficulty: difficulty.toString(),
          status: status,
        });
      }

      return problems.sort((a, b) => b.id - a.id);
    };

    // 데이터 로딩 시작
    setIsLoading(true);

    // 약간의 지연을 줘서 실제 API 호출처럼 시뮬레이션
    setTimeout(() => {
      const randomProblems = generateRandomProblems();
      setAllProblems(randomProblems);
      setFilteredProblems(randomProblems); // 초기에는 모든 문제 표시
      setIsLoading(false);
    }, 500);
  }, []);

  // 필터 적용 함수
  const applyFilters = () => {
    // allProblems가 비어있으면 필터링할 필요 없음
    if (allProblems.length === 0) return;

    let filtered = [...allProblems];

    // 카테고리 필터 적용
    if (selectedCategory !== '전체') {
      filtered = filtered.filter(
        (problem) => problem.status === selectedCategory
      );
    }

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

    // 난이도 필터 적용
    if (selectedDifficulty !== '전체') {
      if (selectedDifficulty === '상') {
        filtered = filtered.filter(
          (problem) => parseInt(problem.difficulty) > 30
        );
      } else if (selectedDifficulty === '중') {
        filtered = filtered.filter(
          (problem) =>
            parseInt(problem.difficulty) >= 20 &&
            parseInt(problem.difficulty) <= 30
        );
      } else if (selectedDifficulty === '하') {
        filtered = filtered.filter(
          (problem) => parseInt(problem.difficulty) < 20
        );
      }
    }

    // 검색어 필터 적용
    if (searchTerm.trim() !== '') {
      if (searchBy === '제목') {
        filtered = filtered.filter((problem) =>
          problem.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else if (searchBy === '연도') {
        filtered = filtered.filter((problem) =>
          problem.year.includes(searchTerm)
        );
      }
    }

    setFilteredProblems(filtered);
    setCurrentPage(1); // 필터 적용 시 첫 페이지로 리셋
  };

  // 필터 상태 또는 allProblems가 변경될 때마다 재필터링
  useEffect(() => {
    applyFilters();
  }, [
    selectedCategory,
    selectedYear,
    selectedAccuracyRate,
    selectedDifficulty,
    allProblems,
  ]);
  // searchTerm은 제외 - 검색 버튼 클릭 시에만 적용

  // 필터 초기화 핸들러
  const resetFilters = () => {
    setSelectedCategory('전체');
    setSelectedYear('전체');
    setSelectedAccuracyRate('전체');
    setSelectedDifficulty('전체');
    setSearchTerm('');
    // useEffect에서 자동으로 applyFilters 호출됨
  };

  // 검색 핸들러
  const handleSearch = (e) => {
    e.preventDefault();
    applyFilters();
  };

  // 문제 클릭 핸들러 (문제 상세 페이지로 이동)
  const handleProblemClick = (id) => {
    console.log('문제 클릭:', id);
    // 실제 구현에서는 navigate(`/problems/${id}`) 사용
  };

  // 현재 페이지에 표시할 문제 계산
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(
    indexOfFirstProblem,
    indexOfLastProblem
  );

  // 카테고리 목록
  const categories = ['전체', '미적분', '확률과통계', '기하와벡터'];

  // 연도 목록
  const years = ['전체', '2024', '2023', '2022', '2021', '2020'];

  // 정답률 옵션
  const accuracyRates = ['전체', '50% 초과', '50% 이하'];

  // 난이도 옵션
  const difficulties = ['전체', '상', '중', '하'];

  return (
    <div className='problem-list-container'>
      <div className='problem-list-header'>
        <h2>문제 목록</h2>
      </div>

      {/* 필터 섹션 */}
      <div className='filters-section'>
        <div className='filter-row'>
          <div className='filter-group'>
            <div className='filter-label'>카테고리</div>
            <div className='filter-options'>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-option ${
                    selectedCategory === category ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='filter-row'>
          <div className='filter-group'>
            <div className='filter-label'>연도</div>
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
        </div>

        <div className='filter-row'>
          <div className='filter-group'>
            <div className='filter-label'>정답률</div>
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
        </div>

        <div className='filter-row'>
          <div className='filter-group'>
            <div className='filter-label'>난이도</div>
            <div className='filter-options'>
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  className={`filter-option ${
                    selectedDifficulty === difficulty ? 'active' : ''
                  }`}
                  onClick={() => setSelectedDifficulty(difficulty)}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='search-section'>
          <form onSubmit={handleSearch} className='search-form'>
            <select
              className='search-select'
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
            >
              <option value='제목'>제목</option>
              <option value='연도'>연도</option>
            </select>
            <input
              type='text'
              className='search-input'
              placeholder='검색어를 입력하세요'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type='submit' className='search-button'>
              검색
            </button>
          </form>
          <div className='filter-actions'>
            <button className='filter-reset' onClick={resetFilters}>
              필터 초기화
            </button>
          </div>
        </div>
      </div>

      {/* 문제 카운트 */}
      {!isLoading && (
        <div className='problem-count'>
          총 <span className='count-highlight'>{filteredProblems.length}</span>
          개의 문제가 있습니다
        </div>
      )}

      {/* 문제 목록 테이블 */}
      <div className='problems-table-container'>
        {isLoading ? (
          <div className='loading-container'>
            <div className='loading-spinner'></div>
            <p>문제를 불러오는 중입니다...</p>
          </div>
        ) : (
          <table className='problems-table'>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>연도</th>
                <th>정답률</th>
                <th>난이도</th>
                <th>유형</th>
              </tr>
            </thead>
            <tbody>
              {currentProblems.length > 0 ? (
                currentProblems.map((problem) => (
                  <tr key={problem.id}>
                    <td>{problem.id}</td>
                    <td>
                      <span
                        className='problem-title'
                        onClick={() => handleProblemClick(problem.id)}
                      >
                        {problem.title}
                      </span>
                    </td>
                    <td>{problem.year}</td>
                    <td>{problem.accuracyRate}</td>
                    <td>{problem.difficulty}</td>
                    <td>
                      <span className={`category-badge ${problem.status}`}>
                        {problem.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan='6'
                    style={{ textAlign: 'center', padding: '30px 0' }}
                  >
                    조건에 맞는 문제가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* 페이지네이션 */}
      {!isLoading && filteredProblems.length > 0 && (
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
              currentPage ===
              Math.ceil(filteredProblems.length / problemsPerPage)
            }
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
}

export default ProblemList;
