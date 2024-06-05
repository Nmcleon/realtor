import React, { useState } from 'react';

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <section className="auth-container">
        <h1 className="auth-header">Sign In</h1>
        <div className="auth">
          <div className="auth-img">
            <img
              src={'./images/auth-key.jpg'}
              alt="key"
              className="auth-image"
            />
          </div>
          <div>
            <form className="auth-form">
              <input
                type="email"
                value={email}
                id="email"
                onChange={onChange}
                placeholder="Email"
              />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                id="password"
                onChange={onChange}
                placeholder="Password"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
