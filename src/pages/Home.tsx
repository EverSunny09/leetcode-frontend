// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); // Redirects to the Login page
  };

  const handleSignUp = () => {
    navigate('/signup'); // Redirects to the Sign Up page
  };

  return (
    <div>
      <h1>Welcome to the App</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Home;
