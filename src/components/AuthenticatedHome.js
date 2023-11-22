// src/components/AuthenticatedHome.js

import { h } from 'preact';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const AuthenticatedHome = () => {
  const { currentUser, signOut } = useAuth(); // Access the current user and signOut function

  // Handler for the logout button
  const handleLogout = async () => {
    try {
      await signOut(); // Call the signOut function from the context
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div>
      <h1>Welcome, {currentUser.email}</h1> {/* Display the user's email or name */}
      <button onClick={handleLogout}>Logout</button> {/* Logout button */}
      {/* Insert additional content for your authenticated homepage here */}
    </div>
  );
};

export default AuthenticatedHome;
