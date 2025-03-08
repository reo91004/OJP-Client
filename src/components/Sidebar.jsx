// src/components/Sidebar.jsx
import React, { useState } from 'react';
import {
  FaChartBar,
  FaBook,
  FaPen,
  FaPlay,
  FaCog,
  FaMedal,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaLock,
  FaBell,
} from 'react-icons/fa';
import './Sidebar.css';
import './MyPage.css';

function Sidebar() {
  // 활성화된 탭 상태 관리
  const [activeTab, setActiveTab] = useState('report');

  // 사이드바 메뉴 아이템 정의
  const mainMenuItems = [
    { id: 'report', label: '학습 리포트', icon: <FaChartBar /> },
    { id: 'library', label: '문제 라이브러리', icon: <FaBook /> },
    { id: 'notes', label: '오답노트', icon: <FaPen /> },
  ];

  const supportMenuItems = [
    { id: 'start', label: '시작하기', icon: <FaPlay /> },
    { id: 'settings', label: '설정', icon: <FaCog /> },
  ];

  // 탭 변경 핸들러
  const handleMenuClick = (menuId) => {
    setActiveTab(menuId);
  };

  // 샘플 데이터 (실제로는 API에서 가져올 데이터)
  const studyStats = {
    totalSolved: 120,
    correctRate: 75,
    studyDays: 15,
    streak: 7,
    weeklyProgress: [30, 25, 40, 55, 35, 20, 45],
    topCategories: [
      { category: '미적분', score: 85 },
      { category: '확률과통계', score: 72 },
      { category: '기하와벡터', score: 68 },
    ],
    recentProblems: [
      {
        id: 1,
        title: '2024 수능 수학 미적분 15번',
        date: '2024-03-07',
        correct: true,
      },
      {
        id: 2,
        title: '2023 수능 수학 확률과통계 12번',
        date: '2024-03-06',
        correct: false,
      },
      {
        id: 3,
        title: '2022 수능 수학 기하와벡터 8번',
        date: '2024-03-05',
        correct: true,
      },
      {
        id: 4,
        title: '2024 수능 수학 미적분 20번',
        date: '2024-03-04',
        correct: false,
      },
      {
        id: 5,
        title: '2023 수능 수학 확률과통계 18번',
        date: '2024-03-03',
        correct: true,
      },
    ],
  };

  // 오답노트 데이터
  const wrongAnswers = [
    {
      id: 101,
      title: '2024 수능 수학 확률과통계 18번',
      date: '2024-03-07',
      category: '확률과통계',
    },
    {
      id: 102,
      title: '2023 수능 수학 미적분 20번',
      date: '2024-03-05',
      category: '미적분',
    },
    {
      id: 103,
      title: '2022 수능 수학 기하와벡터 16번',
      date: '2024-03-04',
      category: '기하와벡터',
    },
    {
      id: 104,
      title: '2023 수능 수학 확률과통계 12번',
      date: '2024-03-03',
      category: '확률과통계',
    },
    {
      id: 105,
      title: '2024 수능 수학 미적분 9번',
      date: '2024-03-01',
      category: '미적분',
    },
  ];

  // 문제 라이브러리 데이터
  const savedProblems = [
    {
      id: 201,
      title: '2024 수능 수학 미적분 7번',
      date: '2024-03-07',
      category: '미적분',
      note: '치환적분 활용',
    },
    {
      id: 202,
      title: '2023 수능 수학 확률과통계 13번',
      date: '2024-03-06',
      category: '확률과통계',
      note: '이항분포 문제',
    },
    {
      id: 203,
      title: '2022 수능 수학 기하와벡터 5번',
      date: '2024-03-05',
      category: '기하와벡터',
      note: '벡터의 내적',
    },
    {
      id: 204,
      title: '2023 수능 수학 미적분 10번',
      date: '2024-03-04',
      category: '미적분',
      note: '미분 공식 활용',
    },
    {
      id: 205,
      title: '2024 수능 수학 확률과통계 3번',
      date: '2024-03-03',
      category: '확률과통계',
      note: '조건부 확률',
    },
  ];

  // 사용자 프로필 데이터
  const userProfile = {
    name: '박용성',
    email: 'park.yongsung@example.com',
    school: '서울 과학고등학교',
    grade: '고등학교 3학년',
    joinDate: '2023-09-15',
    subscription: '프리미엄',
  };

  // 각 탭 내용 렌더링 함수
  const renderTabContent = () => {
    switch (activeTab) {
      case 'report':
        return (
          <div className='report-container'>
            <h2 className='report-title'>학습 리포트</h2>

            {/* 통계 카드 */}
            <div className='stats-cards'>
              <div className='stat-card'>
                <div className='stat-icon'>
                  <FaBook />
                </div>
                <div className='stat-info'>
                  <h3>총 푼 문제</h3>
                  <p className='stat-value'>{studyStats.totalSolved}문제</p>
                </div>
              </div>

              <div className='stat-card'>
                <div className='stat-icon'>
                  <FaMedal />
                </div>
                <div className='stat-info'>
                  <h3>정답률</h3>
                  <p className='stat-value'>{studyStats.correctRate}%</p>
                </div>
              </div>

              <div className='stat-card'>
                <div className='stat-icon'>
                  <FaCalendarAlt />
                </div>
                <div className='stat-info'>
                  <h3>학습 일수</h3>
                  <p className='stat-value'>{studyStats.studyDays}일</p>
                </div>
              </div>

              <div className='stat-card'>
                <div className='stat-icon'>
                  <FaClock />
                </div>
                <div className='stat-info'>
                  <h3>연속 학습</h3>
                  <p className='stat-value'>{studyStats.streak}일</p>
                </div>
              </div>
            </div>

            {/* 차트 섹션 */}
            <div className='charts-section'>
              <div className='chart-card'>
                <h3 className='chart-title'>주간 학습 추이</h3>
                <div className='weekly-chart'>
                  {studyStats.weeklyProgress.map((count, index) => (
                    <div key={index} className='chart-column'>
                      <div
                        className='chart-bar'
                        style={{ height: `${count * 2}px` }}
                      ></div>
                      <div className='chart-label'>
                        {['월', '화', '수', '목', '금', '토', '일'][index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='chart-card'>
                <h3 className='chart-title'>유형별 성취도</h3>
                <div className='category-scores'>
                  {studyStats.topCategories.map((item, index) => (
                    <div key={index} className='category-score'>
                      <div className='category-name'>{item.category}</div>
                      <div className='score-bar-container'>
                        <div
                          className='score-bar'
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                      <div className='score-value'>{item.score}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 최근 활동 */}
            <div className='recent-activities'>
              <h3 className='chart-title'>최근 학습 활동</h3>
              <div className='activity-list'>
                {studyStats.recentProblems.map((problem) => (
                  <div
                    key={problem.id}
                    className={`activity-item ${
                      problem.correct ? 'correct' : 'incorrect'
                    }`}
                  >
                    <div className='activity-status'>
                      {problem.correct ? '✓' : '✗'}
                    </div>
                    <div className='activity-details'>
                      <div className='activity-title'>{problem.title}</div>
                      <div className='activity-date'>{problem.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'library':
        return (
          <div className='library-container'>
            <h2 className='report-title'>문제 라이브러리</h2>

            {/* 검색 및 필터링 컨트롤 */}
            <div className='library-controls'>
              <input
                type='text'
                className='library-search'
                placeholder='문제 검색...'
              />
              <select className='library-filter'>
                <option value='all'>모든 유형</option>
                <option value='미적분'>미적분</option>
                <option value='확률과통계'>확률과통계</option>
                <option value='기하와벡터'>기하와벡터</option>
              </select>
              <button className='library-add-btn'>+ 문제 추가</button>
            </div>

            {/* 문제 테이블 */}
            <div className='problem-table'>
              <div className='problem-table-header'>
                <div className='problem-id'>ID</div>
                <div className='problem-title'>제목</div>
                <div className='problem-category'>유형</div>
                <div className='problem-date'>저장일</div>
                <div className='problem-note'>메모</div>
                <div className='problem-actions'>작업</div>
              </div>

              {savedProblems.map((problem) => (
                <div key={problem.id} className='problem-row'>
                  <div className='problem-id'>{problem.id}</div>
                  <div className='problem-title'>{problem.title}</div>
                  <div className='problem-category'>
                    <span className={`category-tag ${problem.category}`}>
                      {problem.category}
                    </span>
                  </div>
                  <div className='problem-date'>{problem.date}</div>
                  <div className='problem-note'>{problem.note}</div>
                  <div className='problem-actions'>
                    <button className='action-btn edit'>수정</button>
                    <button className='action-btn delete'>삭제</button>
                  </div>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className='pagination'>
              <button className='page-btn'>&lt;</button>
              <button className='page-btn active'>1</button>
              <button className='page-btn'>2</button>
              <button className='page-btn'>3</button>
              <button className='page-btn'>&gt;</button>
            </div>
          </div>
        );

      case 'notes':
        return (
          <div className='notes-container'>
            <h2 className='report-title'>오답노트</h2>

            {/* 오답노트 헤더 */}
            <div className='notes-header'>
              <div className='notes-stats'>
                <div className='notes-stat'>
                  <span className='stat-label'>총 오답 문제:</span>
                  <span className='stat-value'>{wrongAnswers.length}</span>
                </div>
                <div className='notes-stat'>
                  <span className='stat-label'>최근 복습:</span>
                  <span className='stat-value'>2024-03-08</span>
                </div>
              </div>
              <div className='notes-controls'>
                <button className='btn primary'>새 오답 추가</button>
                <button className='btn secondary'>복습하기</button>
              </div>
            </div>

            {/* 오답노트 목록 */}
            <div className='notes-list'>
              {wrongAnswers.map((problem) => (
                <div key={problem.id} className='note-item'>
                  <div className='note-header'>
                    <h3>{problem.title}</h3>
                    <span className={`note-category ${problem.category}`}>
                      {problem.category}
                    </span>
                  </div>
                  <div className='note-info'>
                    <div className='note-date'>틀린 날짜: {problem.date}</div>
                    <div className='note-actions'>
                      <button className='btn-icon'>
                        <FaPen />
                      </button>
                      <button className='btn-icon'>
                        <FaBook />
                      </button>
                      <button className='btn-icon delete'>
                        <FaLock />
                      </button>
                    </div>
                  </div>
                  <div className='note-content'>
                    <div className='note-mistake'>
                      <h4>틀린 이유</h4>
                      <p>
                        미분 공식을 잘못 적용함. 치환 적분 시 변수 변환에
                        주의해야 함.
                      </p>
                    </div>
                    <div className='note-solution'>
                      <h4>올바른 풀이</h4>
                      <p>
                        u = x^2 + 1로 치환 후 du = 2x dx를 적용하여 적분을
                        진행함.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'start':
        return (
          <div className='start-container'>
            <h2 className='report-title'>시작하기</h2>

            {/* 환영 카드 */}
            <div className='welcome-card'>
              <h3>환영합니다, {userProfile.name}님!</h3>
              <p>
                OJP에서 효과적인 학습을 시작하세요. 아래 튜토리얼을 통해 OJP의
                주요 기능을 알아보세요.
              </p>
            </div>

            {/* 튜토리얼 섹션 */}
            <div className='tutorial-section'>
              <h3 className='chart-title'>빠른 시작 가이드</h3>
              <div className='tutorial-steps'>
                <div className='tutorial-step'>
                  <div className='step-number'>1</div>
                  <div className='step-content'>
                    <h4>문제 풀기</h4>
                    <p>
                      상단 네비게이션의 '문제' 메뉴에서 다양한 유형의 문제를
                      찾아 풀어보세요.
                    </p>
                    <button className='btn tutorial-btn'>문제 풀기</button>
                  </div>
                </div>

                <div className='tutorial-step'>
                  <div className='step-number'>2</div>
                  <div className='step-content'>
                    <h4>오답노트 관리</h4>
                    <p>
                      틀린 문제는 오답노트에 자동으로 저장됩니다. 복습하여
                      실력을 향상시켜보세요.
                    </p>
                    <button className='btn tutorial-btn'>오답노트 가기</button>
                  </div>
                </div>

                <div className='tutorial-step'>
                  <div className='step-number'>3</div>
                  <div className='step-content'>
                    <h4>학습 통계 확인</h4>
                    <p>
                      학습 리포트에서 자신의 진행 상황과 성취도를 확인하세요.
                    </p>
                    <button className='btn tutorial-btn'>리포트 보기</button>
                  </div>
                </div>

                <div className='tutorial-step'>
                  <div className='step-number'>4</div>
                  <div className='step-content'>
                    <h4>커뮤니티 참여</h4>
                    <p>
                      게시판에서 다른 사용자들과 질문하고 정보를 공유하세요.
                    </p>
                    <button className='btn tutorial-btn'>게시판 가기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className='settings-container'>
            <h2 className='report-title'>설정</h2>

            {/* 프로필 설정 섹션 */}
            <div className='settings-section profile-section'>
              <h3>프로필 설정</h3>
              <div className='profile-info'>
                <div className='profile-avatar'>
                  <FaUser className='avatar-icon' />
                  <button className='change-avatar-btn'>+</button>
                </div>
                <div className='profile-details'>
                  <div className='form-group'>
                    <label>이름</label>
                    <input
                      type='text'
                      defaultValue={userProfile.name}
                      className='settings-input'
                    />
                  </div>
                  <div className='form-group'>
                    <label>이메일</label>
                    <input
                      type='email'
                      defaultValue={userProfile.email}
                      className='settings-input'
                    />
                  </div>
                  <div className='form-group'>
                    <label>학교</label>
                    <input
                      type='text'
                      defaultValue={userProfile.school}
                      className='settings-input'
                    />
                  </div>
                  <div className='form-group'>
                    <label>학년</label>
                    <select
                      className='settings-input'
                      defaultValue={userProfile.grade}
                    >
                      <option>고등학교 1학년</option>
                      <option>고등학교 2학년</option>
                      <option>고등학교 3학년</option>
                      <option>대학생</option>
                      <option>기타</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className='btn save-profile-btn'>프로필 저장</button>
            </div>

            {/* 계정 설정 섹션 */}
            <div className='settings-section account-section'>
              <h3>계정 설정</h3>
              <div className='form-group'>
                <label>비밀번호 변경</label>
                <input
                  type='password'
                  placeholder='현재 비밀번호'
                  className='settings-input'
                />
                <input
                  type='password'
                  placeholder='새 비밀번호'
                  className='settings-input'
                />
                <input
                  type='password'
                  placeholder='새 비밀번호 확인'
                  className='settings-input'
                />
                <button className='btn change-password-btn'>
                  비밀번호 변경
                </button>
              </div>

              <div className='form-group'>
                <label>알림 설정</label>
                <div className='notification-options'>
                  <div className='notification-option'>
                    <input
                      type='checkbox'
                      id='email-notifications'
                      defaultChecked
                    />
                    <label htmlFor='email-notifications'>이메일 알림</label>
                  </div>
                  <div className='notification-option'>
                    <input
                      type='checkbox'
                      id='browser-notifications'
                      defaultChecked
                    />
                    <label htmlFor='browser-notifications'>브라우저 알림</label>
                  </div>
                  <div className='notification-option'>
                    <input type='checkbox' id='study-reminders' />
                    <label htmlFor='study-reminders'>학습 리마인더</label>
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label>멤버십 정보</label>
                <div className='membership-info'>
                  <p>
                    <strong>현재 멤버십:</strong> {userProfile.subscription}
                  </p>
                  <p>
                    <strong>가입일:</strong> {userProfile.joinDate}
                  </p>
                  <button className='btn upgrade-btn'>멤버십 업그레이드</button>
                </div>
              </div>
            </div>

            {/* 위험 영역 */}
            <div className='danger-zone'>
              <h3>위험 구역</h3>
              <button className='btn danger-btn'>계정 삭제</button>
            </div>
          </div>
        );

      default:
        return <div>내용을 불러올 수 없습니다.</div>;
    }
  };

  return (
    <>
      {/* 사이드바 */}
      <nav className='sidebar'>
        <ul className='sidebar__menu'>
          {mainMenuItems.map((item) => (
            <li
              key={item.id}
              className={`sidebar__menu-item ${
                activeTab === item.id ? 'active' : ''
              }`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className='sidebar__icon'>{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className='sidebar__support-label'>Support</div>
        <ul className='sidebar__menu'>
          {supportMenuItems.map((item) => (
            <li
              key={item.id}
              className={`sidebar__menu-item ${
                activeTab === item.id ? 'active' : ''
              }`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className='sidebar__icon'>{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* 콘텐츠 영역 */}
      <div className='sidebar__content'>{renderTabContent()}</div>
    </>
  );
}

export default Sidebar;
