//src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import axios from 'axios'; // 필요 없으면 제거
import './App.css';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar'; // UserPageLayout에서 import
import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage';
import ProblemsPage from './pages/ProblemsPage';
import BoardPage from './pages/BoardPage';
import CustomerServicePage from './pages/CustomerServicePage';
import ReportPage from './pages/mypages/ReportPage.jsx';
import LibraryPage from './pages/mypages/LibraryPage';
import NotesPage from './pages/mypages/NotesPage';
import StartPage from './pages/mypages/StartPage';
import SettingsPage from './pages/mypages/SettingsPage';
import UserPageLayout from './pages/mypages/UserPageLayout';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={loggedIn} />
      <div style={{ display: 'flex' }}>
        <Routes>
          <Route path='/' element={<HomePage />} />

          {/* Sidebar가 필요한 페이지 그룹 (UserPageLayout 사용) */}
          <Route path='/mypages/*' element={<UserPageLayout />}>
            <Route path='report' element={<ReportPage />} />
            <Route path='library' element={<LibraryPage />} />
            <Route path='notes' element={<NotesPage />} />
            <Route path='start' element={<StartPage />} />
            <Route path='settings' element={<SettingsPage />} />
            <Route path='' element={<ReportPage />} />
          </Route>

          {/* Sidebar가 필요없는 페이지 */}
          <Route path='/problems' element={<ProblemsPage />} />
          <Route path='/board' element={<BoardPage />} />
          <Route path='/api' element={<></>} />
          <Route path='/customer-service' element={<CustomerServicePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
