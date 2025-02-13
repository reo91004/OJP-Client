// src/pages/mypages/UserPageLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

function UserPageLayout() {
  return (
    <div style={{ display: 'flex' }}>
      {' '}
      {/* Sidebar와 Outlet을 가로로 배치 */}
      <Sidebar />
    </div>
  );
}

export default UserPageLayout;
