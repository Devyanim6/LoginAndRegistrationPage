import React, { useState } from 'react';
import Captcha from './Captcha';

function Signup() {
  const [captchaValid, setCaptchaValid] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const namePattern = /^[A-Za-z]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // First name validation
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    } else if (!namePattern.test(firstName)) {
      newErrors.firstName = 'First name can only contain letters.';
    }

    // Last name validation
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    } else if (!namePattern.test(lastName)) {
      newErrors.lastName = 'Last name can only contain letters.';
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Invalid email format.';
    }

    // Mobile number validation
    if (!/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be a 10-digit number.';
    }

    // Password validation
    if (!passwordPattern.test(password)) {
      newErrors.password =
        'Password must be at least 8 char, an upper letter,number,a special char.';
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    // Captcha validation
    if (!captchaValid) {
      newErrors.captcha = 'Please complete the captcha.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email ID:', email);
      console.log('Mobile Number:', mobileNumber);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      alert('Registration successful!');
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter 10-digit mobile number"
            required
          />
          {errors.mobileNumber && <p style={{ color: 'red' }}>{errors.mobileNumber}</p>}
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

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
        </div>

        <Captcha onValidate={setCaptchaValid} />
        {errors.captcha && <p style={{ color: 'red' }}>{errors.captcha}</p>}

        <div className="button-group">
          <button type="submit" className="register-btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
