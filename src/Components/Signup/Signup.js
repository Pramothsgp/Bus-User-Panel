import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, password, userType });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <div className="form-group">
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          id="password"
          placeholder="Create a Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <small>*Must be at least 8 characters</small>
      </div>
      <div className="form-group">
        <label>You Are</label>
        <div>
          <input
            type="radio"
            id="individual"
            name="userType"
            value="individual"
            onChange={(e) => setUserType(e.target.value)}
            required
          />
          <label htmlFor="individual">INDIVIDUAL</label>
        </div>
        <div>
          <input
            type="radio"
            id="businessStaff"
            name="userType"
            value="businessStaff"
            onChange={(e) => setUserType(e.target.value)}
          />
          <label htmlFor="businessStaff">BUSINESS STAFF</label>
        </div>
      </div>
      <button type="submit" className="create-account-btn">CREATE AN ACCOUNT</button>
      <button type="button" className="google-signup-btn">SIGN UP WITH GOOGLE</button>
      <p>Already have an account? <Link to = "/">Log In</Link></p>
    </form>
  );
};

export default Signup;
