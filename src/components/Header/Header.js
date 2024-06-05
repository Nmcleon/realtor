import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </>
  );
}
