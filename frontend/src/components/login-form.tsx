import React, { useState } from 'react';
import "../App.css";

// login component

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="LoginContainer">
      <div className="LoginToggle">
        <button
          className={`ToggleButton ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`ToggleButton ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      {isLogin ? (
        <div className="Form LoginForm">
          <div className="LoginFormContent">
            <label>Email</label>
            <input type="email" placeholder="name@company.com" required />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            <button type="submit" className="SignInButton">
              Sign in
            </button>
          </div>
        </div>
      ) : (
        <div className="Form RegisterForm">
          <div className="LoginFormContent">
            <label>Company Name</label>
            <input type="text" placeholder="Your company inc." required />
            <label>Email</label>
            <input type="email" placeholder="name@company.com" required />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            <button type="submit" className="SignInButton">
              Create account
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
