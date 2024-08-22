import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });

    const logindata = [{
      email,
      password
    }]

    localStorage.setItem('userdata', JSON.stringify(logindata));

    navigate('/home-map');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>log in</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group remember-me">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />  
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <button type="submit" className="login-btn">LOG IN</button>
      <p><a href="/forgot-password">Forgot password?</a></p>
      <button type="button" className="create-account-btn"><Link to = '/SignUp'>CREATE AN ACCOUNT</Link></button>
    </form>
  );
};

export default Login;
