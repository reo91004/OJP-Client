// src/pages/Board.jsx
import React, { useState, useEffect } from 'react';
import './Board.css';
import { Link } from 'react-router-dom';

function Board() {
  // 게시판 카테고리
  const categories = [
    '전체',
    '공지사항',
    '질문',
    '팁과 노하우',
    '자유게시판',
    '버그 제보',
  ];
  const [selectedCategory, setSelectedCategory] = useState('전체');

  // 검색 관련 상태
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('제목');

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  // 게시글 데이터
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  // 샘플 게시글 데이터 생성
  useEffect(() => {
    const generateRandomPosts = () => {
      const titles = [
        '수학 문제 풀이 방법에 대해 질문있습니다',
        '효과적인 OJP 사용법 공유합니다',
        '오늘 추가된 새 문제 어려운 것 같네요',
        '미적분 개념 정리 자료 공유',
        '백준 알고리즘과 차이점이 무엇인가요?',
        '통계 문제 접근법 팁',
        '시험 준비를 위한 문제 추천 부탁드립니다',
        '오답노트 작성법 공유',
        '프로그래밍 문제 해결 전략',
        '수학 경시대회 문제 분석',
      ];

      const authors = [
        '수학자',
        '코딩고수',
        '알고리즘마스터',
        '문제해결사',
        '수학덕후',
        '코드닌자',
        '퍼즐러버',
        '학생123',
        '교사456',
        '개발자789',
      ];
      const categories = [
        '공지사항',
        '질문',
        '팁과 노하우',
        '자유게시판',
        '버그 제보',
      ];

      const posts = [];

      for (let i = 1; i <= 100; i++) {
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        const randomAuthor =
          authors[Math.floor(Math.random() * authors.length)];
        const randomCategory =
          categories[Math.floor(Math.random() * categories.length)];
        const randomViews = Math.floor(Math.random() * 1000) + 10;
        const randomComments = Math.floor(Math.random() * 20);

        // 날짜 생성 (최근 30일 내)
        const randomDate = new Date();
        randomDate.setDate(
          randomDate.getDate() - Math.floor(Math.random() * 30)
        );
        const formattedDate = `${randomDate.getFullYear()}-${String(
          randomDate.getMonth() + 1
        ).padStart(2, '0')}-${String(randomDate.getDate()).padStart(2, '0')}`;

        posts.push({
          id: 100 - i + 1, // 최근 글이 위로 오도록 ID 부여
          title: randomTitle,
          author: randomAuthor,
          category: randomCategory,
          date: formattedDate,
          views: randomViews,
          comments: randomComments,
        });
      }

      // ID 기준 내림차순 정렬 (최신순)
      return posts.sort((a, b) => b.id - a.id);
    };

    const randomPosts = generateRandomPosts();
    setAllPosts(randomPosts);
    setFilteredPosts(randomPosts);
  }, []);

  // 필터 적용
  const applyFilters = () => {
    let filtered = [...allPosts];

    // 카테고리 필터 적용
    if (selectedCategory !== '전체') {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // 검색어 필터 적용
    if (searchTerm.trim() !== '') {
      if (searchBy === '제목') {
        filtered = filtered.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else if (searchBy === '작성자') {
        filtered = filtered.filter((post) =>
          post.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    }

    setFilteredPosts(filtered);
    setCurrentPage(1); // 필터 적용 시 첫 페이지로 리셋
  };

  // 검색 핸들러
  const handleSearch = (e) => {
    e.preventDefault();
    applyFilters();
  };

  // 카테고리 변경 핸들러
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      applyFilters();
    }, 0);
  };

  // 현재 페이지에 표시할 게시글 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className='board-container'>
      <div className='board-header'>
        <h2>게시판</h2>

        {/* 카테고리 탭 */}
        <div className='category-tabs'>
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 검색 영역 */}
        <div className='search-section'>
          <form onSubmit={handleSearch} className='search-form'>
            <select
              className='search-select'
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
            >
              <option value='제목'>제목</option>
              <option value='작성자'>작성자</option>
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
          <Link to='/write-post' className='write-button'>
            글쓰기
          </Link>
        </div>
      </div>

      {/* 게시글 목록 */}
      <div className='posts-table-container'>
        <table className='posts-table'>
          <thead>
            <tr>
              <th className='post-id'>번호</th>
              <th className='post-category'>카테고리</th>
              <th className='post-title'>제목</th>
              <th className='post-author'>작성자</th>
              <th className='post-date'>작성일</th>
              <th className='post-views'>조회수</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <tr key={post.id} className='post-row'>
                <td className='post-id'>{post.id}</td>
                <td className='post-category'>
                  <span
                    className={`category-badge ${post.category.replace(
                      /\s+/g,
                      ''
                    )}`}
                  >
                    {post.category}
                  </span>
                </td>
                <td className='post-title'>
                  <Link to={`/board/${post.id}`}>
                    {post.title}
                    {post.comments > 0 && (
                      <span className='comment-count'>[{post.comments}]</span>
                    )}
                  </Link>
                </td>
                <td className='post-author'>{post.author}</td>
                <td className='post-date'>{post.date}</td>
                <td className='post-views'>{post.views}</td>
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
                Math.ceil(filteredPosts.length / postsPerPage)
              ),
            },
            (_, i) => {
              // 현재 페이지를 중심으로 앞뒤로 2페이지씩 표시
              let pageNum;
              if (Math.ceil(filteredPosts.length / postsPerPage) <= 5) {
                pageNum = i + 1;
              } else {
                const middleIndex = Math.min(
                  Math.max(currentPage, 3),
                  Math.ceil(filteredPosts.length / postsPerPage) - 2
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
              Math.min(prev + 1, Math.ceil(filteredPosts.length / postsPerPage))
            )
          }
          disabled={
            currentPage === Math.ceil(filteredPosts.length / postsPerPage)
          }
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Board;
