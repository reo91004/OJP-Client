import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Register from './pages/Register';
import Login from './pages/Login';
import ProblemList from './pages/ProblemList';
import Board from './pages/Board';
import WritePost from './pages/WritePost';
import PostDetail from './pages/PostDetail';
import HomePage from './pages/HomePage'; // 새로 추가한 HomePage 컴포넌트 import

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // 로그인 처리 함수
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // 로그아웃 처리 함수
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      {/* 모든 페이지에 공통으로 Navbar 적용 */}
      <Navbar isLoggedIn={loggedIn} onLogout={handleLogout} />

      <Routes>
        {/* 루트 경로에 HomePage 컴포넌트 연결 */}
        <Route path='/' element={<HomePage />} />
        <Route path='/problems' element={<ProblemList />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/:postId' element={<PostDetail />} />
        <Route path='/write-post' element={<WritePost />} />
        <Route
          path='/mypages'
          element={
            <>
              <Sidebar />
            </>
          }
        />
        <Route path='/api' element={<></>} />
        <Route path='/customer-service' element={<></>} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
