// src/components/app.js

import { h } from 'preact';
import { Router } from 'preact-router';
import { AuthProvider } from '../context/AuthContext'; // Import the AuthProvider

import Home from '../routes/home';
import Profile from '../routes/profile';
// ... other imports

const App = () => {
  return (
    <AuthProvider> {/* Wrap your component tree with AuthProvider */}
      <div id="app">
        <Header /> {/* Your header might contain the navigation logic */}
        <Router>
          <Home path="/" />
          <Profile path="/profile" />
          {/* ... other routes */}
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
