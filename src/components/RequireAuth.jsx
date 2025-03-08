// src/components/RequireAuth.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../states/authSlice';
import Modal from './Modal';

function RequireAuth({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showModal, setShowModal] = useState(!isLoggedIn);
  const navigate = useNavigate();

  const handleLogin = () => {
    setShowModal(false);
    navigate('/login');
  };

  const handleCancel = () => {
    setShowModal(false);
    navigate(-1); // 이전 페이지로 돌아가기
  };

  // 로그인한 경우 바로 콘텐츠 표시
  if (isLoggedIn) {
    return children;
  }

  // 로그인이 필요한 페이지에 접근 시 모달 표시
  return (
    <Modal isOpen={showModal} onClose={handleCancel} title='로그인 필요'>
      <div className='login-alert'>
        <div className='login-alert-icon'>🔒</div>
        <p>
          이 페이지는 로그인 후 이용할 수 있습니다.
          <br />
          로그인 페이지로 이동하시겠습니까?
        </p>
        <div className='modal-buttons'>
          <button className='modal-button secondary' onClick={handleCancel}>
            취소
          </button>
          <button className='modal-button primary' onClick={handleLogin}>
            로그인하기
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default RequireAuth;
