import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../assets/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Header() {
  const [pageState, setPageState] = useState('Sign in');
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Profile');
      } else {
        setPageState('Sign in');
      }
    });
  });

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
                onClick={() => navigate('/profile')}
              >
                {pageState}
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
