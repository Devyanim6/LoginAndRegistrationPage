import React, { useState, useEffect } from 'react';

function Captcha({ onValidate }) {
  const [captchaText, setCaptchaText] = useState('');

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaText(captcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="captcha-group">
      <div className="captcha-box">
        <span id="captcha-text">{captchaText}</span>
        <button type="button" className="refresh-btn" onClick={generateCaptcha}>
          ⟳
        </button>
      </div>
      <input
        type="text"
        placeholder="Enter Captcha"
        onBlur={(e) => onValidate(e.target.value === captchaText)}
        required
      />
    </div>
  );
}

export default Captcha;
