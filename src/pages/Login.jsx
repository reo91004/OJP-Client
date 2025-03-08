// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logoOjp from '../assets/logo-ojp.svg';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (!email || !password) {
      setError('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    // 실제로는 API 호출이 필요하지만, 여기서는 모의 로그인 구현
    // 임의의 이메일과 비밀번호로 로그인 성공 처리
    if (email === 'test@example.com' && password === 'password') {
      // 로그인 성공
      if (onLogin) {
        onLogin();
      }
      navigate('/');
    } else {
      setError('이메일 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className='login-container'>
      {/* Logo & Title */}
      <div className='logo-section'>
        <img src={logoOjp} alt='OJP Logo' className='ojp-logo' />
      </div>

      {/* Form Section */}
      <div className='form-section'>
        {error && <div className='error-message'>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='이메일을 입력하세요...'
            className='login-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='비밀번호'
            className='login-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='login-options'>
            <div className='remember-me'>
              <input type='checkbox' id='remember' />
              <label htmlFor='remember'>로그인 상태 유지</label>
            </div>
            <a href='#' className='forgot-password'>
              비밀번호 찾기
            </a>
          </div>
          <button type='submit' className='login-button'>
            로그인
          </button>
        </form>
        <div className='login-footer'>
          <span>계정이 없으신가요?</span>
          <a href='/register' className='register-link'>
            회원가입
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
