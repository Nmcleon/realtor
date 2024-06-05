import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <>
      <div className="header-container">
        <header className="header">
          <div className="header-logo">
            <img
              src={logo}
              className="logo"
              alt="logo"
              onClick={() => navigate('/')}
            />
          </div>
          <div className="header-items">
            <ul className="header-links">
              <li
                className={`header-link ${pathMatchRoute('/') ? 'active' : ''}`}
                onClick={() => navigate('/')}
              >
                Home
              </li>
              <li
                className={`header-link ${
                  pathMatchRoute('/offers') ? 'active' : ''
                }`}
                onClick={() => navigate('/offers')}
              >
                Offers
              </li>
              <li
                className={`header-link ${
                  pathMatchRoute('/sign-in') ? 'active' : ''
                }`}
                onClick={() => navigate('/sign-in')}
              >
                Sign in
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
