// src/pages/CustomerServicePage.jsx
import React, { useState } from 'react';
import {
  FaHeadset,
  FaComments,
  FaBook,
  FaQuestionCircle,
  FaSearch,
  FaEnvelope,
} from 'react-icons/fa';
import './CustomerServicePage.css';
import Footer from '../components/Footer';

function CustomerServicePage() {
  const [searchTerm, setSearchTerm] = useState('');

  // 자주 묻는 질문 데이터
  const faqs = [
    {
      category: '계정',
      questions: [
        {
          question: '비밀번호를 잊어버렸어요. 어떻게 재설정하나요?',
          answer:
            '로그인 페이지에서 "비밀번호 찾기" 버튼을 클릭하고, 가입 시 사용한 이메일을 입력하시면 비밀번호 재설정 링크를 보내드립니다.',
        },
        {
          question: '계정 정보를 변경하고 싶어요.',
          answer:
            '로그인 후 마이페이지에서 "설정" 탭을 선택하여 프로필 정보, 이메일 주소, 비밀번호 등을 변경할 수 있습니다.',
        },
        {
          question: '회원 탈퇴는 어떻게 하나요?',
          answer:
            '마이페이지의 "설정" 탭에서 하단의 "계정 삭제" 버튼을 클릭하여 회원 탈퇴를 진행할 수 있습니다. 탈퇴 시 모든 데이터가 삭제되므로 신중하게 결정해 주세요.',
        },
      ],
    },
    {
      category: '학습',
      questions: [
        {
          question: '문제 풀이 기록이 저장되지 않아요.',
          answer:
            '문제 풀이 기록은 로그인 상태에서만 저장됩니다. 로그인이 되어 있는지 확인해 주시고, 인터넷 연결이 안정적인지 확인해 주세요. 문제가 지속되면 고객센터에 문의해 주세요.',
        },
        {
          question: '오답노트는 어떻게 활용하나요?',
          answer:
            '오답노트는 틀린 문제를 자동으로 저장하고 복습할 수 있는 기능입니다. 마이페이지의 "오답노트" 탭에서 틀린 문제들을 확인하고, 재학습할 수 있습니다.',
        },
        {
          question: '학습 진도가 초기화되었어요.',
          answer:
            '학습 데이터는 서버에 안전하게 저장되므로 정상적인 상황에서는 초기화되지 않습니다. 브라우저 캐시를 삭제하신 경우 일시적으로 데이터가 보이지 않을 수 있으니, 로그아웃 후 다시 로그인해 보세요.',
        },
      ],
    },
    {
      category: '결제',
      questions: [
        {
          question: '구독 취소는 어떻게 하나요?',
          answer:
            '마이페이지의 "구독 관리" 메뉴에서 "구독 취소" 버튼을 클릭하여 진행할 수 있습니다. 취소 후에도 결제한 기간까지는 서비스를 이용할 수 있습니다.',
        },
        {
          question: '환불 정책은 어떻게 되나요?',
          answer:
            '결제일로부터 7일 이내에는 전액 환불이 가능합니다. 7일 이후에는 잔여 기간에 대한 일할 계산으로 환불됩니다. 환불 요청은 고객센터 이메일(support@ojp.com)로 문의해 주세요.',
        },
        {
          question: '결제 영수증을 받고 싶어요.',
          answer:
            '마이페이지의 "결제 내역" 메뉴에서 각 결제 항목의 "영수증 발급" 버튼을 클릭하면 이메일로 영수증을 받을 수 있습니다.',
        },
      ],
    },
    {
      category: '기술',
      questions: [
        {
          question: '웹사이트가 느리게 로딩돼요.',
          answer:
            '인터넷 연결 상태를 확인하시고, 브라우저 캐시를 삭제해 보세요. 또한 최신 버전의 브라우저를 사용하는 것이 좋습니다. 문제가 지속되면 사용 중인 기기 정보와 함께 고객센터에 문의해 주세요.',
        },
        {
          question: '모바일에서도 이용할 수 있나요?',
          answer:
            'OJP는 모든 디바이스에서 이용 가능한 반응형 웹사이트입니다. 모바일 브라우저에서 접속하시면 최적화된 화면으로 서비스를 이용하실 수 있습니다.',
        },
        {
          question: '지원하는 브라우저는 무엇인가요?',
          answer:
            'Chrome, Firefox, Safari, Edge 등 최신 버전의 모든 주요 브라우저에서 정상적으로 동작합니다. 원활한 이용을 위해 브라우저를 최신 버전으로 업데이트하는 것을 권장합니다.',
        },
      ],
    },
  ];

  // 검색 기능
  const handleSearch = (e) => {
    e.preventDefault();
    // 실제 검색 기능은 여기에 구현
    console.log('검색어:', searchTerm);
  };

  return (
    <div className='customer-service-container'>
      {/* 헤더 섹션 */}
      <div className='cs-header'>
        <div className='header-content'>
          <h1>고객센터</h1>
          <p className='header-description'>
            무엇을 도와드릴까요? OJP 이용 중 궁금한 점이 있으시면 언제든지
            문의해 주세요.
          </p>

          {/* 검색 폼 */}
          <form className='search-form' onSubmit={handleSearch}>
            <div className='search-box'>
              <FaSearch className='search-icon' />
              <input
                type='text'
                placeholder='질문을 검색해보세요'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type='submit'>검색</button>
            </div>
          </form>
        </div>
      </div>

      {/* 지원 옵션 */}
      <section className='support-options-section'>
        <h2 className='section-title'>지원 옵션</h2>
        <div className='support-options'>
          <div className='support-option'>
            <div className='option-icon'>
              <FaHeadset />
            </div>
            <h3>고객센터 문의</h3>
            <p>평일 09:00 - 18:00</p>
            <p className='option-contact'>help@ojp.com</p>
            <button className='option-button'>이메일 문의</button>
          </div>

          <div className='support-option'>
            <div className='option-icon'>
              <FaComments />
            </div>
            <h3>실시간 채팅</h3>
            <p>평일 10:00 - 17:00</p>
            <p className='option-description'>
              즉각적인 도움이 필요하실 때 이용하세요
            </p>
            <button className='option-button'>채팅 시작</button>
          </div>

          <div className='support-option'>
            <div className='option-icon'>
              <FaBook />
            </div>
            <h3>지식 센터</h3>
            <p>24시간 이용 가능</p>
            <p className='option-description'>
              자주 묻는 질문과, 자세한 가이드
            </p>
            <button className='option-button'>가이드 보기</button>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className='faq-section'>
        <h2 className='section-title'>자주 묻는 질문</h2>

        <div className='faq-categories'>
          {faqs.map((category, index) => (
            <div className='faq-category' key={index}>
              <h3 className='category-title'>{category.category}</h3>
              <div className='faq-items'>
                {category.questions.map((faq, faqIndex) => (
                  <div className='faq-item' key={faqIndex}>
                    <div className='faq-question'>
                      <FaQuestionCircle className='question-icon' />
                      <h4>{faq.question}</h4>
                    </div>
                    <div className='faq-answer'>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 문의하기 섹션 */}
      <section className='contact-section'>
        <h2 className='section-title'>문의하기</h2>
        <div className='contact-container'>
          <div className='contact-info'>
            <h3>답변이 도움이 되지 않으셨나요?</h3>
            <p>
              아직 궁금한 점이 있으시면 문의 양식을 작성해 주세요. OJP
              고객지원팀이 최대한 빠르게 답변 드리겠습니다.
            </p>
            <div className='contact-methods'>
              <div className='contact-method'>
                <FaEnvelope className='method-icon' />
                <div className='method-details'>
                  <h4>이메일</h4>
                  <p>help@ojp.com</p>
                </div>
              </div>
              <div className='contact-method'>
                <FaHeadset className='method-icon' />
                <div className='method-details'>
                  <h4>전화</h4>
                  <p>02-123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <form className='contact-form'>
            <div className='form-group'>
              <label htmlFor='name'>이름</label>
              <input
                type='text'
                id='name'
                placeholder='이름을 입력하세요'
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>이메일</label>
              <input
                type='email'
                id='email'
                placeholder='이메일을 입력하세요'
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='subject'>문의 유형</label>
              <select id='subject' required>
                <option value=''>문의 유형을 선택하세요</option>
                <option value='account'>계정 관련</option>
                <option value='learning'>학습 관련</option>
                <option value='payment'>결제 관련</option>
                <option value='technical'>기술적 문제</option>
                <option value='other'>기타</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='message'>문의 내용</label>
              <textarea
                id='message'
                placeholder='궁금한 점을 자세히 알려주세요'
                rows='5'
                required
              ></textarea>
            </div>

            <button type='submit' className='submit-button'>
              문의하기
            </button>
          </form>
        </div>
      </section>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}

export default CustomerServicePage;
