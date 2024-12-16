import React, { useState } from 'react';
import Captcha from './Captcha';

function Login() {
  const [captchaValid, setCaptchaValid] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ userId: '', password: '', captcha: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = { userId: '', password: '', captcha: '' };

    // User ID validation
    if (!userId.trim()) {
      newErrors.userId = 'User ID is required.';
      valid = false;
    }

    // Password validation
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 8 characters long.';
      valid = false;
    }

    // Captcha validation
    if (!captchaValid) {
      newErrors.captcha = 'Please complete the captcha.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log('User ID:', userId);
      console.log('Password:', password);
      alert('Login successful!');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="userid">User ID</label>
          <input
            type="text"
            id="userid"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          {errors.userId && <p style={{ color: 'red' }}>{errors.userId}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <Captcha onValidate={setCaptchaValid} />
        {errors.captcha && <p style={{ color: 'red' }}>{errors.captcha}</p>}

        <div className="button-group">
          <button type="submit" className="login-btn">
            Login
          </button>
          <button
            type="button"
            className="register-btn"
            onClick={() => (window.location.href = '/signup')}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
