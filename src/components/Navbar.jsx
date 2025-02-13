// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-ojp.svg';

function Navbar({ isLoggedIn }) {
  return (
    <nav className='navbar'>
      {/* Left section: logo + 문제/게시판/마이페이지 */}
      <div className='navbar-left'>
        <Link to='/'>
          <img src={logo} alt='OJP Logo' className='navbar-logo' />
        </Link>
        <ul className='navbar-menu-left'>
          <li>
            <Link to='/problems'>문제</Link>
          </li>
          <li>
            <Link to='/board'>게시판</Link>
          </li>
          <li>
            <Link to='/mypages'>마이페이지</Link>
          </li>
        </ul>
      </div>

      {/* Right section: divider + API/고객센터 + login/logout */}
      <div className='navbar-right'>
        <div className='vertical-divider'></div>
        <ul className='navbar-menu-right'>
          <li>
            <Link to='/api'>API</Link>
          </li>
          <li>
            <Link to='/customer-service'>고객센터</Link>
          </li>
          {isLoggedIn ? (
            <li className='nav-button'>
              <span onClick={() => console.log('handle logout')}>로그아웃</span>
            </li>
          ) : (
            <>
              <li className='nav-button'>
                <Link to='/login'>로그인</Link>
              </li>
              <li className='nav-button'>
                <Link to='/register'>회원가입</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
