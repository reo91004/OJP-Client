import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-ojp.svg';

function Navbar({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState('사용자');

  // 로그인 상태가 변경될 때 사용자 정보 설정
  useEffect(() => {
    if (isLoggedIn) {
      // 실제 API에서 가져와야 함
      setUsername('박용성');
    }
  }, [isLoggedIn]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setDropdownOpen(false);
    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='navbar'>
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
            <li className='user-profile'>
              <div className='profile-trigger' onClick={toggleDropdown}>
                <span className='profile-name'>{username}</span>
                <span className='profile-icon'>▾</span>
              </div>
              {dropdownOpen && (
                <div className='profile-dropdown'>
                  <Link to='/mypages' className='dropdown-item'>
                    마이페이지
                  </Link>
                  <Link to='/settings' className='dropdown-item'>
                    설정
                  </Link>
                  <div className='dropdown-divider'></div>
                  <div className='dropdown-item logout' onClick={handleLogout}>
                    로그아웃
                  </div>
                </div>
              )}
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

      <div
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={handleOverlayClick}
      >
        <div className='mobile-menu-content' onClick={handleMenuClick}>
          <ul>
            <li>
              <Link to='/problems' onClick={toggleMenu}>
                문제
              </Link>
            </li>
            <li>
              <Link to='/board' onClick={toggleMenu}>
                게시판
              </Link>
            </li>
            <li>
              <Link to='/mypages' onClick={toggleMenu}>
                마이페이지
              </Link>
            </li>

            <hr className='horizontal-bar' />

            <li>
              <Link to='/api' onClick={toggleMenu}>
                API
              </Link>
            </li>
            <li>
              <Link to='/customer-service' onClick={toggleMenu}>
                고객센터
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to='/mypages' onClick={toggleMenu}>
                    내 프로필
                  </Link>
                </li>
                <li>
                  <Link to='/settings' onClick={toggleMenu}>
                    설정
                  </Link>
                </li>
                <li
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                >
                  로그아웃
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to='/login' onClick={toggleMenu}>
                    로그인
                  </Link>
                </li>
                <li>
                  <Link to='/register' onClick={toggleMenu}>
                    회원가입
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
