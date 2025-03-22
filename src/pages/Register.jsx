import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logoOjp from '../assets/logo-ojp.svg';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (!email || !password || !confirmPassword || !name) {
      setError('모든 필드를 입력해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 여기서는 실제 회원가입 처리 대신 성공 알림만 표시
    alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
    window.location.href = '/login';
  };

  return (
    <div className='register-container'>
      {/* Logo & Title */}
      <div className='logo-section'>
        <img src={logoOjp} alt='OJP Logo' className='ojp-logo' />
      </div>

      {/* Form Section */}
      <div className='form-section'>
        {error && <div className='error-message'>{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='이름'
            className='register-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='이메일을 입력하세요'
            className='register-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='비밀번호'
            className='register-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            placeholder='비밀번호 재입력'
            className='register-input'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type='submit' className='register-button'>
            회원가입
          </button>

          <div className='register-footer'>
            <span>이미 계정이 있으신가요?</span>
            <Link to='/login' className='login-link'>
              로그인
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
