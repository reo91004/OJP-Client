// src/states/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 로컬 스토리지에서 로그인 상태 불러오기
const loadAuthState = () => {
  try {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    return {
      isLoggedIn,
      user,
    };
  } catch (err) {
    return {
      isLoggedIn: false,
      user: null,
    };
  }
};

const initialState = loadAuthState();

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload || { name: '박용성' };

      // 로컬 스토리지에 저장
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;

      // 로컬 스토리지에서 제거
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;

// 선택자 함수
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
