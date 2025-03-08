// src/pages/WritePost.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WritePost.css';

function WritePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('자유게시판');
  const [content, setContent] = useState('');

  const categories = [
    '공지사항',
    '질문',
    '팁과 노하우',
    '자유게시판',
    '버그 제보',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // 여기서는 실제 저장 대신 리스트 페이지로 돌아가기만 합니다
    alert('게시글이 작성되었습니다.');
    navigate('/board');
  };

  const handleCancel = () => {
    if (
      window.confirm(
        '작성 중인 내용이 저장되지 않습니다. 정말 취소하시겠습니까?'
      )
    ) {
      navigate('/board');
    }
  };

  return (
    <div className='write-post-container'>
      <div className='write-post-header'>
        <h2>게시글 작성</h2>
      </div>

      <form className='write-post-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='category'>카테고리</label>
          <select
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className='form-row'>
          <label htmlFor='title'>제목</label>
          <input
            type='text'
            id='title'
            placeholder='제목을 입력하세요'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className='form-row'>
          <label htmlFor='content'>내용</label>
          <textarea
            id='content'
            placeholder='내용을 입력하세요'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={15}
            required
          ></textarea>
        </div>

        <div className='form-buttons'>
          <button
            type='button'
            className='cancel-button'
            onClick={handleCancel}
          >
            취소
          </button>
          <button type='submit' className='submit-button'>
            등록
          </button>
        </div>
      </form>
    </div>
  );
}

export default WritePost;
