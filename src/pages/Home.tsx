// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSignUp = (action:string) => {
    navigate(action);
  };

  return (
    <div>
      <h1>Welcome to the App</h1>
      <button onClick={()=> handleLoginSignUp('/login')}>Login</button>
      <button onClick={()=> handleLoginSignUp('/signup')}>Sign Up</button>
    </div>
  );
};

export default Home;
