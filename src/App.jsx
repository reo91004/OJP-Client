// 기존 App.jsx를 업데이트하여 새로운 페이지를 라우팅에 추가

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Register from './pages/Register';
import Login from './pages/Login';
import ProblemList from './pages/ProblemList';
import Board from './pages/Board';
import WritePost from './pages/WritePost';
import PostDetail from './pages/PostDetail';
import HomePage from './pages/HomePage';
import RequireAuth from './components/RequireAuth';
import ApiPage from './pages/ApiPage'; // 새로 추가된 API 페이지
import CustomerServicePage from './pages/CustomerServicePage'; // 새로 추가된 고객센터 페이지

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/problems' element={<ProblemList />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/:postId' element={<PostDetail />} />
        <Route
          path='/write-post'
          element={
            <RequireAuth>
              <WritePost />
            </RequireAuth>
          }
        />
        <Route
          path='/mypages'
          element={
            <RequireAuth>
              <div
                className='mypage-wrapper'
                style={{ minHeight: 'calc(100vh - 70px)' }}
              >
                <Sidebar />
              </div>
            </RequireAuth>
          }
        />
        <Route path='/api' element={<ApiPage />} /> {/* API 페이지 라우트 */}
        <Route
          path='/customer-service'
          element={<CustomerServicePage />}
        />{' '}
        {/* 고객센터 페이지 라우트 */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
