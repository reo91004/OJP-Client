import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '/app/src/assets/logo-ojp.svg';

function Navbar({ isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="OJP Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-menu-left">
          <li><Link to="/problems">문제</Link></li>
          <li><Link to="/board">게시판</Link></li>
          <li><Link to="/mypages">마이페이지</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="vertical-divider"></div>
        <ul className="navbar-menu-right">
          <li><Link to="/api">API</Link></li>
          <li><Link to="/customer-service">고객센터</Link></li>
          {isLoggedIn ? (
            <li className="nav-button" onClick={() => console.log('logout')}>로그아웃</li>
          ) : (
            <>
              <li className="nav-button"><Link to="/login">로그인</Link></li>
              <li className="nav-button"><Link to="/register">회원가입</Link></li>
            </>
          )}
        </ul>
      </div>

      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
        <div className="mobile-menu-content" onClick={handleMenuClick}>
          <ul>
            <li><Link to="/problems" onClick={toggleMenu}>문제</Link></li>
            <li><Link to="/board" onClick={toggleMenu}>게시판</Link></li>
            <li><Link to="/mypages" onClick={toggleMenu}>마이페이지</Link></li>

            <hr className="horizontal-bar"/>
            
            <li><Link to="/api" onClick={toggleMenu}>API</Link></li>
            <li><Link to="/customer-service" onClick={toggleMenu}>고객센터</Link></li>
            {isLoggedIn ? (
              <li onClick={() => { console.log('logout'); toggleMenu(); }}>로그아웃</li>
            ) : (
              <>
                <li><Link to="/login" onClick={toggleMenu}>로그인</Link></li>
                <li><Link to="/register" onClick={toggleMenu}>회원가입</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
