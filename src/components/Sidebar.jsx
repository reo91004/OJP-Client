// src/components/Sidebar.jsx
import React from 'react';
import { FaChartBar, FaBook, FaPen, FaPlay, FaCog } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom'; // Outlet 추가
import './Sidebar.css';

function Sidebar() {
  const mainMenuItems = [
    { id: 'report', label: '학습 리포트', icon: <FaChartBar /> },
    { id: 'library', label: '문제 라이브러리', icon: <FaBook /> },
    { id: 'notes', label: '오답노트', icon: <FaPen /> },
  ];

  const supportMenuItems = [
    { id: 'start', label: '시작하기', icon: <FaPlay /> },
    { id: 'settings', label: '설정', icon: <FaCog /> },
  ];

  return (
    <>
      <nav className='sidebar'>
        <ul className='sidebar__menu'>
          {mainMenuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={`/mypages/${item.id}`}
                className={({ isActive }) =>
                  isActive ? 'sidebar__menu-item active' : 'sidebar__menu-item'
                }
              >
                <span className='sidebar__icon'>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='sidebar__support-label'>Support</div>
        <ul className='sidebar__menu'>
          {supportMenuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={`/mypages/${item.id}`}
                className={({ isActive }) =>
                  isActive ? 'sidebar__menu-item active' : 'sidebar__menu-item'
                }
              >
                <span className='sidebar__icon'>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* Main Content Area */}
      <div className='sidebar__content'>
        <Outlet />
      </div>
    </>
  );
}

export default Sidebar;
