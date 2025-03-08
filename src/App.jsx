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
              <Sidebar />
            </RequireAuth>
          }
        />
        <Route path='/api' element={<></>} />
        <Route path='/customer-service' element={<></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
