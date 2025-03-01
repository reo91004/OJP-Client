import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Box from './components/Navbar';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Register from './pages/Register';
import ProblemList from './pages/ProblemList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={loggedIn} />

      {/* <Link to ="/">Home</Link>
      <Link to ="/login">Login</Link> */}
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <div className='main-bg'></div>
            </div>
          }
        />
        <Route path='/problems' element={<ProblemList />} />
        <Route path='/board' element={<></>} />
        <Route
          path='/mypages'
          element={
            <>
              <Sidebar></Sidebar>
            </>
          }
        />
        <Route path='/api' element={<></>} />
        <Route path='/customer-service' element={<></>} />
        <Route path='/login' element={<>로그인페이지</>} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
