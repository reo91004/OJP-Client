// Sidebar.jsx
import React, { useState } from "react";
import {
  FaChartBar,
  FaBook,
  FaPen,
  FaPlay,
  FaCog
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  // Track which "tab" or menu item is active
  const [activeTab, setActiveTab] = useState("report");

  const mainMenuItems = [
    { id: "report", label: "학습 리포트", icon: <FaChartBar /> },
    { id: "library", label: "문제 라이브러리", icon: <FaBook /> },
    { id: "notes",   label: "오답노트", icon: <FaPen /> }
  ];

  const supportMenuItems = [
    { id: "start",   label: "시작하기", icon: <FaPlay /> },
    { id: "settings", label: "설정", icon: <FaCog /> }
  ];

  const handleMenuClick = (menuId) => {
    setActiveTab(menuId);
  };

  // Simple demonstration of "different tab menus"
  let content;
  switch (activeTab) {
    case "report":
      content = <div>학습 리포트 탭 콘텐츠</div>;
      break;
    case "library":
      content = <div>문제 라이브러리 탭 콘텐츠</div>;
      break;
    case "notes":
      content = <div>오답노트 탭 콘텐츠</div>;
      break;
    case "start":
      content = <div>시작하기 탭 콘텐츠</div>;
      break;
    case "settings":
      content = <div>설정 탭 콘텐츠</div>;
      break;
    default:
      content = <div>학습 리포트 탭 콘텐츠</div>;
  }

  return (
    <>
      {/* Sidebar */}
      <nav className="sidebar">
        <ul className="sidebar__menu">
          {mainMenuItems.map((item) => (
            <li
              key={item.id}
              className={`sidebar__menu-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="sidebar__icon">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="sidebar__support-label">Support</div>
        <ul className="sidebar__menu">
          {supportMenuItems.map((item) => (
            <li
              key={item.id}
              className={`sidebar__menu-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="sidebar__icon">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area (to the right) */}
      <div className="sidebar__content">
        <h2>Tab Content</h2>
        {content}
      </div>
    </>
  );
}

export default Sidebar;
