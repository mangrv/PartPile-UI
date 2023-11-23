// src/components/app.js

import { h } from 'preact';
import { Router } from 'preact-router';
import { AuthProvider } from '../context/AuthContext'; // Import the AuthProvider

import Home from '../routes/home'; // Looks for ../routes/home/index.js
import Profile from '../routes/profile'; // Looks for ../routes/profile/index.js
import Header from '../components/header';


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
