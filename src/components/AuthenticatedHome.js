// src/components/AuthenticatedHome.js

import { h } from 'preact';
import { useAuth } from '../context/AuthContext';

const AuthenticatedHome = () => {
  const { currentUser, signOut } = useAuth();

  // Handler for the logout button
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div>
      <h1>Welcome, {currentUser.email}</h1> {/* Display the user's email */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AuthenticatedHome;
