// src/components/auth/Login.js

import { h } from 'preact';
import { useState } from 'preact/hooks';
import { useAuth } from '../../context/AuthContext'; // Import useAuth

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser, signOut } = useAuth(); // Use the auth context

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic to handle login
    // This will depend on your Firebase setup and the methods you've provided
  };

  // If a currentUser exists, display a logout button instead of the login form
  return currentUser ? (
    <div>
      <h1>Welcome, {currentUser.email}</h1>
      <button onClick={signOut}>Logout</button>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
