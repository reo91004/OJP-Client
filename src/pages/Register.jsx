import React from "react";
import "./Register.css";
import logoOjp from "/app/src/assets/logo-ojp.svg";



function Register() {
  return (
    <div className="register-container">
      {/* Logo & Title */}
      <div className="logo-section">
        <img src={logoOjp} alt="OJP Logo" className="ojp-logo" />

      </div>

      {/* Form Section */}
      <div className="form-section">
        <input
          type="email"
          placeholder="이메일을 입력하세요..."
          className="register-input"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="register-input"
        />
        <input
          type="password"
          placeholder="비밀번호 재입력"
          className="register-input"
        />
        <button className="register-button">회원가입</button>
      </div>
    </div>
  );
}

export default Register;
