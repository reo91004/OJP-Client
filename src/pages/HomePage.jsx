import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className='home-container'>
      {/* 대문(Hero) 섹션 */}
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            수학의 모든 것,
            <br />
            OJP와 함께하세요
          </h1>
          <p className='hero-description'>
            맞춤형 문제 풀이와 효율적인 학습 관리로
            <br />
            여러분의 수학 실력을 한 단계 높여드립니다
          </p>
          <div className='hero-buttons'>
            <Link to='/problems' className='hero-button primary'>
              학습 시작하기
            </Link>
            <Link to='/register' className='hero-button secondary'>
              회원가입
            </Link>
          </div>
        </div>
        <div className='hero-illustration'>
          {/* SVG 일러스트레이션 - 이미지 기반으로 개선 */}
          <svg
            width='400'
            height='300'
            viewBox='0 0 400 300'
            xmlns='http://www.w3.org/2000/svg'
            className='math-illustration'
          >
            {/* 배경 */}
            <rect width='400' height='300' fill='#F4FBFD' rx='8' />

            {/* 그리드 라인 */}
            <g stroke='#ddd' strokeWidth='0.5'>
              {/* 수직 그리드 라인 */}
              {Array.from({ length: 8 }, (_, i) => 50 + i * 40).map((x, i) => (
                <line key={`vl-${i}`} x1={x} y1='50' x2={x} y2='250' />
              ))}
              {/* 수평 그리드 라인 */}
              {Array.from({ length: 6 }, (_, i) => 50 + i * 40).map((y, i) => (
                <line key={`hl-${i}`} x1='50' y1={y} x2='350' y2={y} />
              ))}
            </g>

            {/* 좌표축 */}
            <line
              x1='50'
              y1='250'
              x2='370'
              y2='250'
              stroke='#333'
              strokeWidth='2'
            />
            <line
              x1='50'
              y1='250'
              x2='50'
              y2='30'
              stroke='#333'
              strokeWidth='2'
            />

            {/* 화살표 */}
            <polygon points='370,250 363,246 363,254' fill='#333' />
            <polygon points='50,30 46,37 54,37' fill='#333' />

            {/* 그래프 요소 - 사인파 곡선 - 참고 이미지와 유사하게 수정 */}
            <path
              d='M50 180 L90 120 Q125 70, 140 120 T200 180 Q235 230, 260 120 T340 180'
              stroke='#1581FF'
              strokeWidth='3'
              fill='none'
            />

            {/* 수학 기호와 텍스트 - 참고 이미지에 맞게 배치 */}
            <text x='85' y='95' fill='#333' fontFamily='serif' fontSize='14'>
              ∫f(x)dx
            </text>

            <text x='250' y='95' fill='#333' fontFamily='serif' fontSize='14'>
              <tspan>Σ</tspan>
              <tspan fontSize='10' dy='-5'>
                n
              </tspan>
              <tspan fontSize='10' dy='10'>
                i=1
              </tspan>
            </text>

            <text x='320' y='130' fill='#333' fontFamily='serif' fontSize='18'>
              ∞
            </text>

            {/* 빨간 점 - 참고 이미지와 동일하게 배치 */}
            <circle cx='140' cy='120' r='5' fill='#FF5252' />
            <circle cx='260' cy='120' r='5' fill='#FF5252' />

            {/* 축 레이블 */}
            <text x='210' y='275' fill='#333' textAnchor='middle' fontSize='14'>
              x
            </text>
            <text x='30' y='140' fill='#333' textAnchor='middle' fontSize='14'>
              y
            </text>
          </svg>
        </div>
      </section>

      {/* 서비스 특징 섹션 */}
      <section className='features-section'>
        <h2 className='section-title'>OJP의 특별한 장점</h2>
        <div className='features-grid'>
          <div className='feature-card'>
            <div className='feature-icon'>📊</div>
            <h3>맞춤형 학습 분석</h3>
            <p>개인별 학습 패턴을 분석하여 맞춤형 학습 경로를 제공합니다.</p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>📝</div>
            <h3>체계적인 오답 관리</h3>
            <p>
              틀린 문제를 자동으로 정리하고 복습할 수 있는 시스템을 제공합니다.
            </p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>🏆</div>
            <h3>목표 달성 관리</h3>
            <p>
              단계별 목표 설정과 달성 현황을 확인하며 학습 동기를 유지하세요.
            </p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>👨‍👩‍👧‍👦</div>
            <h3>활발한 커뮤니티</h3>
            <p>
              다른 학생들과 지식을 공유하고 함께 성장할 수 있는 환경을
              제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 차별점 섹션 */}
      <section className='difference-section'>
        <h2 className='section-title'>다른 학습 플랫폼과의 차별점</h2>
        <div className='difference-content'>
          <div className='difference-text'>
            <ul className='difference-list'>
              <li>
                <strong>실시간 피드백</strong>
                <p>
                  문제 풀이 과정에서 실시간으로 피드백을 받아 오개념을 즉시
                  수정할 수 있습니다.
                </p>
              </li>
              <li>
                <strong>AI 기반 학습 추천</strong>
                <p>
                  인공지능이 학습 패턴을 분석하여 최적의 학습 자료를 추천해
                  드립니다.
                </p>
              </li>
              <li>
                <strong>통합 학습 관리</strong>
                <p>
                  문제 풀이부터 오답 정리, 성적 관리까지 한 플랫폼에서 모두
                  해결합니다.
                </p>
              </li>
            </ul>
          </div>
          <div className='difference-image'>
            <div className='comparison-chart'>
              {/* 막대 그래프를 SVG로 구현 */}
              <svg width='400' height='320' viewBox='0 0 400 320'>
                {/* 차트 제목 */}
                <text
                  x='200'
                  y='30'
                  textAnchor='middle'
                  fill='#333'
                  fontWeight='bold'
                  fontSize='16'
                >
                  학습자 만족도 비교
                </text>

                {/* Y축 레이블 */}
                <text
                  x='20'
                  y='150'
                  textAnchor='middle'
                  fill='#555'
                  fontSize='12'
                  transform='rotate(-90, 20, 150)'
                >
                  만족도 (%)
                </text>

                {/* X축 레이블 */}
                <text
                  x='200'
                  y='290'
                  textAnchor='middle'
                  fill='#555'
                  fontSize='12'
                >
                  학습 플랫폼
                </text>

                <g className='chart-group'>
                  {/* OJP 막대 */}
                  <rect
                    x='50'
                    y='60'
                    width='60'
                    height='180'
                    fill='#1581FF'
                    rx='4'
                  />
                  <text
                    x='80'
                    y='255'
                    textAnchor='middle'
                    fill='#333'
                    className='chart-label'
                  >
                    OJP
                  </text>
                  <text
                    x='80'
                    y='50'
                    textAnchor='middle'
                    fill='#1581FF'
                    fontWeight='bold'
                    className='chart-value'
                  >
                    90%
                  </text>

                  {/* 타사 A 막대 */}
                  <rect
                    x='130'
                    y='90'
                    width='60'
                    height='150'
                    fill='#1581FF'
                    opacity='0.8'
                    rx='4'
                  />
                  <text
                    x='160'
                    y='255'
                    textAnchor='middle'
                    fill='#333'
                    className='chart-label'
                  >
                    타사 A
                  </text>
                  <text
                    x='160'
                    y='80'
                    textAnchor='middle'
                    fill='#1581FF'
                    fontWeight='bold'
                    className='chart-value'
                  >
                    75%
                  </text>

                  {/* 타사 B 막대 */}
                  <rect
                    x='210'
                    y='110'
                    width='60'
                    height='130'
                    fill='#1581FF'
                    opacity='0.6'
                    rx='4'
                  />
                  <text
                    x='240'
                    y='255'
                    textAnchor='middle'
                    fill='#333'
                    className='chart-label'
                  >
                    타사 B
                  </text>
                  <text
                    x='240'
                    y='100'
                    textAnchor='middle'
                    fill='#1581FF'
                    fontWeight='bold'
                    className='chart-value'
                  >
                    65%
                  </text>

                  {/* 타사 C 막대 */}
                  <rect
                    x='290'
                    y='140'
                    width='60'
                    height='100'
                    fill='#1581FF'
                    opacity='0.4'
                    rx='4'
                  />
                  <text
                    x='320'
                    y='255'
                    textAnchor='middle'
                    fill='#333'
                    className='chart-label'
                  >
                    타사 C
                  </text>
                  <text
                    x='320'
                    y='130'
                    textAnchor='middle'
                    fill='#1581FF'
                    fontWeight='bold'
                    className='chart-value'
                  >
                    50%
                  </text>

                  {/* X축 */}
                  <line
                    x1='30'
                    y1='240'
                    x2='370'
                    y2='240'
                    stroke='#999'
                    strokeWidth='1'
                  />

                  {/* Y축 */}
                  <line
                    x1='30'
                    y1='240'
                    x2='30'
                    y2='40'
                    stroke='#999'
                    strokeWidth='1'
                  />

                  {/* Y축 눈금 */}
                  <line
                    x1='25'
                    y1='60'
                    x2='30'
                    y2='60'
                    stroke='#999'
                    strokeWidth='1'
                  />
                  <text
                    x='20'
                    y='65'
                    textAnchor='end'
                    fill='#666'
                    fontSize='10'
                  >
                    100%
                  </text>

                  <line
                    x1='25'
                    y1='120'
                    x2='30'
                    y2='120'
                    stroke='#999'
                    strokeWidth='1'
                  />
                  <text
                    x='20'
                    y='125'
                    textAnchor='end'
                    fill='#666'
                    fontSize='10'
                  >
                    66%
                  </text>

                  <line
                    x1='25'
                    y1='180'
                    x2='30'
                    y2='180'
                    stroke='#999'
                    strokeWidth='1'
                  />
                  <text
                    x='20'
                    y='185'
                    textAnchor='end'
                    fill='#666'
                    fontSize='10'
                  >
                    33%
                  </text>

                  <line
                    x1='25'
                    y1='240'
                    x2='30'
                    y2='240'
                    stroke='#999'
                    strokeWidth='1'
                  />
                  <text
                    x='20'
                    y='245'
                    textAnchor='end'
                    fill='#666'
                    fontSize='10'
                  >
                    0%
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className='cta-section'>
        <h2>지금 바로 OJP와 함께 수학의 재미를 발견하세요</h2>
        <p>첫 달 무료 체험으로 OJP의 모든 기능을 경험해보세요</p>
        <Link to='/register' className='cta-button'>
          무료로 시작하기
        </Link>
      </section>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}

export default HomePage;
