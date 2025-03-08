// src/components/LoginRequiredModal.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

// 로그인이 필요한 기능을 사용할 때 띄우는 재사용 가능한 모달 컴포넌트
function LoginRequiredModal({ isOpen, onClose, message }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onClose();
    navigate('/login');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='로그인 필요'>
      <div className='login-alert'>
        <div className='login-alert-icon'>🔒</div>
        <p>{message || '이 기능은 로그인 후 이용할 수 있습니다.'}</p>
        <div className='modal-buttons'>
          <button className='modal-button secondary' onClick={onClose}>
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

export default LoginRequiredModal;
