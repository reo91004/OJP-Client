// src/pages/ApiPage.jsx
import React from 'react';
import { FaCode, FaRocket, FaLock, FaTools } from 'react-icons/fa';
import './ApiPage.css';
import Footer from '../components/Footer';

function ApiPage() {
  return (
    <div className='api-page-container'>
      {/* 헤더 섹션 */}
      <div className='api-header'>
        <div className='header-content'>
          <h1>OJP API</h1>
          <p className='header-description'>
            OJP의 강력한 API를 통해 수학 문제와 풀이 시스템을 여러분의
            애플리케이션에 통합하세요.
          </p>
          <div className='header-buttons'>
            <button className='primary-button'>API 키 발급받기</button>
            <button className='secondary-button'>문서 보기</button>
          </div>
        </div>
      </div>

      {/* 특징 섹션 */}
      <section className='api-features-section'>
        <h2 className='section-title'>API 특징</h2>
        <div className='features-grid'>
          <div className='feature-card'>
            <div className='feature-icon'>
              <FaRocket />
            </div>
            <h3>쉬운 통합</h3>
            <p>
              RESTful API로 어떤 프로그래밍 언어에서도 쉽게 사용 가능합니다.
            </p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'>
              <FaLock />
            </div>
            <h3>보안 인증</h3>
            <p>API 키 기반 인증으로 데이터를 안전하게 보호합니다.</p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'>
              <FaCode />
            </div>
            <h3>다양한 언어 지원</h3>
            <p>
              Python, JavaScript, Java 등 다양한 언어를 위한 라이브러리
              제공합니다.
            </p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'>
              <FaTools />
            </div>
            <h3>강력한 기능</h3>
            <p>문제 검색, 풀이 제출, 학습 분석 등 다양한 기능을 제공합니다.</p>
          </div>
        </div>
      </section>

      {/* 사용 예시 섹션 */}
      <section className='api-example-section'>
        <h2 className='section-title'>API 사용 예시</h2>
        <div className='code-example'>
          <div className='code-header'>
            <span>Python</span>
            <button className='copy-button'>복사</button>
          </div>
          <pre className='code-block'>
            {`import requests

# OJP API 엔드포인트와 API 키 설정
API_KEY = "your_api_key_here" 
BASE_URL = "https://api.ojp.com/v1"

# 문제 목록 가져오기
def get_problems(category=None, limit=10):
    url = f"{BASE_URL}/problems"
    
    params = {
        "api_key": API_KEY,
        "limit": limit
    }
    
    if category:
        params["category"] = category
        
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: {response.status_code}")
        return None

# 사용 예시
problems = get_problems(category="미적분", limit=5)
print(problems)`}
          </pre>
        </div>
      </section>

      {/* 요금제 섹션 */}
      <section className='api-pricing-section'>
        <h2 className='section-title'>API 요금제</h2>
        <div className='pricing-cards'>
          <div className='pricing-card'>
            <h3>Basic</h3>
            <div className='price'>무료</div>
            <ul>
              <li>월 1,000 API 호출</li>
              <li>공개된 문제만 접근 가능</li>
              <li>기본 문서 및 지원</li>
            </ul>
            <button className='pricing-button'>시작하기</button>
          </div>

          <div className='pricing-card featured'>
            <div className='popular-tag'>인기</div>
            <h3>Professional</h3>
            <div className='price'>₩50,000/월</div>
            <ul>
              <li>월 50,000 API 호출</li>
              <li>모든 문제 및 풀이 접근 가능</li>
              <li>학습 분석 기능</li>
              <li>우선 기술 지원</li>
            </ul>
            <button className='pricing-button primary'>무료 체험</button>
          </div>

          <div className='pricing-card'>
            <h3>Enterprise</h3>
            <div className='price'>문의</div>
            <ul>
              <li>무제한 API 호출</li>
              <li>모든 기능 접근 가능</li>
              <li>맞춤형 통합 지원</li>
              <li>SLA 및 전담 지원</li>
            </ul>
            <button className='pricing-button'>문의하기</button>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className='api-faq-section'>
        <h2 className='section-title'>자주 묻는 질문</h2>
        <div className='faq-list'>
          <div className='faq-item'>
            <h3>API 키는 어떻게 얻을 수 있나요?</h3>
            <p>
              API 키를 얻으려면 OJP 계정에 로그인한 후 개발자 설정에서 "API 키
              생성" 버튼을 클릭하세요.
            </p>
          </div>

          <div className='faq-item'>
            <h3>API를 통해 어떤 데이터를 얻을 수 있나요?</h3>
            <p>
              OJP API를 통해 수학 문제, 풀이, 학습자 진행 상황, 통계 데이터 등에
              접근할 수 있습니다.
            </p>
          </div>

          <div className='faq-item'>
            <h3>API 응답 형식은 무엇인가요?</h3>
            <p>
              모든 API 응답은 JSON 형식으로 제공됩니다. 응답에는 요청된 데이터와
              함께 상태 코드가 포함됩니다.
            </p>
          </div>

          <div className='faq-item'>
            <h3>개발자 지원은 어떻게 받을 수 있나요?</h3>
            <p>
              기술적인 지원이 필요하시면 api-support@ojp.com으로 문의하거나
              개발자 포럼을 이용하세요.
            </p>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className='api-cta-section'>
        <div className='cta-content'>
          <h2>지금 바로 OJP API를 경험해보세요</h2>
          <p>
            무료 API 키로 시작하여 OJP의 모든 기능을 여러분의 애플리케이션에
            통합하세요.
          </p>
          <button className='cta-button'>API 키 발급받기</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ApiPage;
