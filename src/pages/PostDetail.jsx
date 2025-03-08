// src/pages/PostDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './PostDetail.css';

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);

  // 게시글 데이터 가져오기 (실제로는 API 호출)
  useEffect(() => {
    // 샘플 데이터 생성 (실제로는 API 호출)
    setTimeout(() => {
      const mockPost = {
        id: postId,
        title: '수학 문제 풀이 방법에 대해 질문있습니다',
        content:
          '안녕하세요, OJP 플랫폼에서 수학 문제를 풀고 있는 학생입니다. 최근에 미적분 관련 문제를 풀던 중 어려움을 겪고 있습니다. 특히 치환적분과 부분적분의 차이점과 각각 어떤 상황에서 사용해야 하는지 헷갈립니다. 자세한 설명과 함께 예제를 통해 알려주시면 감사하겠습니다.',
        author: '수학자',
        category: '질문',
        date: '2023-05-15',
        views: 245,
        comments: 3,
      };

      const mockComments = [
        {
          id: 1,
          author: '교사456',
          content:
            '치환적분은 복잡한 함수를 더 간단한 형태로 바꿀 때 사용합니다. 예를 들어 u = g(x)라고 치환하면 적분이 훨씬 쉬워질 때 사용하죠.',
          date: '2023-05-15',
          isReply: false,
        },
        {
          id: 2,
          author: '코딩고수',
          content:
            "부분적분은 두 함수의 곱을 적분할 때 사용합니다. ∫u(x)v'(x)dx = u(x)v(x) - ∫u'(x)v(x)dx 형태로 변환하는 것이죠. 특히 한 함수는 적분하기 쉽고 다른 함수는 미분하기 쉬울 때 활용합니다.",
          date: '2023-05-16',
          isReply: false,
        },
        {
          id: 3,
          author: '알고리즘마스터',
          content:
            "구체적인 예제를 원하시면 ∫xexdx 같은 경우를 살펴보세요. 여기서는 부분적분을 사용하는 것이 효과적입니다. u = x, v' = ex 로 놓고 풀어보세요.",
          date: '2023-05-17',
          isReply: false,
        },
      ];

      setPost(mockPost);
      setComments(mockComments);
      setLoading(false);
    }, 500);
  }, [postId]);

  const handleAddComment = (e) => {
    e.preventDefault();

    if (newComment.trim() === '') return;

    const newCommentObj = {
      id: comments.length + 1,
      author: '로그인사용자', // 실제로는 로그인된 사용자 정보
      content: newComment,
      date: new Date().toISOString().split('T')[0],
      isReply: false,
    };

    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  const handleGoBack = () => {
    navigate('/board');
  };

  if (loading) {
    return <div className='loading'>게시글을 불러오는 중입니다...</div>;
  }

  return (
    <div className='post-detail-container'>
      <div className='post-detail-header'>
        <h2>게시판</h2>
        <div className='post-navigation'>
          <button className='back-button' onClick={handleGoBack}>
            목록
          </button>
        </div>
      </div>

      <div className='post-content-wrapper'>
        {/* 게시글 헤더 */}
        <div className='post-header'>
          <div className='post-info'>
            <h1 className='post-title'>{post.title}</h1>
            <div className='post-meta'>
              <span className='post-author'>{post.author}</span>
              <span className='post-date'>{post.date}</span>
              <span className='post-views'>조회수 {post.views}</span>
            </div>
          </div>
          <div className='post-category'>
            <span
              className={`category-badge ${post.category.replace(/\s+/g, '')}`}
            >
              {post.category}
            </span>
          </div>
        </div>

        {/* 게시글 본문 */}
        <div className='post-content'>
          <p>{post.content}</p>
        </div>

        {/* 게시글 하단 버튼 */}
        <div className='post-actions'>
          <div className='post-action-buttons'>
            <button className='action-button'>좋아요</button>
            <button className='action-button'>싫어요</button>
            <button className='action-button'>신고</button>
          </div>
          <div className='post-edit-buttons'>
            <button className='edit-button'>수정</button>
            <button className='delete-button'>삭제</button>
          </div>
        </div>
      </div>

      {/* 댓글 섹션 */}
      <div className='comments-section'>
        <h3 className='comments-title'>댓글 {comments.length}개</h3>

        {/* 댓글 목록 */}
        <div className='comments-list'>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={`comment ${comment.isReply ? 'reply' : ''}`}
            >
              <div className='comment-info'>
                <span className='comment-author'>{comment.author}</span>
                <span className='comment-date'>{comment.date}</span>
              </div>
              <div className='comment-content'>
                <p>{comment.content}</p>
              </div>
              <div className='comment-actions'>
                <button className='reply-button'>답글</button>
              </div>
            </div>
          ))}
        </div>

        {/* 댓글 작성 폼 */}
        <form className='comment-form' onSubmit={handleAddComment}>
          <textarea
            className='comment-input'
            placeholder='댓글을 작성하세요'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          ></textarea>
          <button type='submit' className='comment-submit'>
            등록
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostDetail;
