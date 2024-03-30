import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SellersLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, for example, make an API call to authenticate the user
    console.log('Email:', email);
    console.log('Password:', password);
    // After successful authentication, you can redirect the user to another page
    // For example, using React Router's history.push('/dashboard');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <Link to={"/home"}>
        <button type="submit">Login</button>
        </Link>
       
      </form>
    </div>
  );
}

export default SellersLogin;
