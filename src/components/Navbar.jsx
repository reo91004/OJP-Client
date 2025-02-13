import React from 'react';
import './Navbar.css';
import logo from '/app/src/assets/logo-ojp.svg';

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      {/* Left section: logo + 문제/게시판/마이페이지 */}
      <div className="navbar-left">
        <img src={logo} alt="OJP Logo" className="navbar-logo" />
        <ul className="navbar-menu-left">
          <li>문제</li>
          <li>게시판</li>
          <li>마이페이지</li>
        </ul>
      </div>

      {/* Right section: divider + API/고객센터 + login/logout */}
      <div className="navbar-right">
        <div className="vertical-divider"></div>
        <ul className="navbar-menu-right">
          <li>API</li>
          <li>고객센터</li>
          {isLoggedIn ? (
            <li className="nav-button">로그아웃</li>
          ) : (
            <>
              <li className="nav-button">로그인</li>
              <li className="nav-button">회원가입</li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
