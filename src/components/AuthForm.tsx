import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest, signupRequest } from '../store/actions/authActions';

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'login') {
      dispatch(loginRequest(email, password));
    } else {
      dispatch(signupRequest(email, password, isActive));
    }
  };

  const handleClear = () => {
    setEmail('');
    setPassword('');
    setIsActive(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {type === 'signup' && (
        <div>
          <label>
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
            Is Active
          </label>
        </div>
      )}
      <button type="submit">Submit</button>
      <button type="button" onClick={handleClear}>Clear</button>
    </form>
  );
};

export default AuthForm;
