import React, { useState } from "react";
import './index.css';

const AuthSection = () => {
  const [isSignupModalVisible, setSignupModalVisible] = useState(false);
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  const handleSignupClick = () => {
    setSignupModalVisible(true);
  };

  const handleLoginClick = () => {
    setLoginModalVisible(true);
  };

  const handleSignupClose = () => {
    setSignupModalVisible(false);
  };

  const handleLoginClose = () => {
    setLoginModalVisible(false);
  };
  
  return (
    <div className="container">
      <div className="banner-text">
        <h1>Coding Practice</h1>
        <p>Learn how to code</p>
      </div>
      <div className="btns">
        <button className="btn login-btn" onClick={handleLoginClick}>Login</button>
        <button className="btn signup-btn" onClick={handleSignupClick}>Sign Up</button>
      </div>
      <div className={`form-container ${(isLoginModalVisible || isSignupModalVisible) ? 'disable' : ''}`}>
        <div className={`signup-form-wrapper modal ${isSignupModalVisible ? 'display' : ''}`}>
          <div className="x-btn signup-x" onClick={handleSignupClose}>
            &times;
          </div>
          <div className="form-header">
            <h1>Coding Practice</h1>
            <h3>Join Us</h3>
          </div>
          <form className="form">
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
              <i className="far fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <i className="fas fa-key"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="button">Sign Up</button>
          </form>
        </div>
        <div className={`login-form-wrapper modal ${isLoginModalVisible ? 'display' : ''}`}>
          <div className="x-btn login-x" onClick={handleLoginClose}>
            &times;
          </div>
          <div className="form-header">
            <h1>Coding Practice</h1>
            <h3>Login</h3>
          </div>
          <form className="form">
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
              <i className="fas fa-key"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;