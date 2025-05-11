import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBrain } from "react-icons/fa"; 
import '../style/global.css';

function Header() {
  const [ dropdownOpen, setDropdownOpen ] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }
  return (
    <header className="header">
      <div className="header-container">
      <FaBrain className="logo-icon" />
        <h1 className="logo">AI RESUME ANALYZER</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/upload-resume" className="nav-link">Upload Resume</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <button onClick={toggleDropdown} className="nav-link-btn">Login</button>
              {dropdownOpen && (
                <div className="dropdown">
                    <Link to="/login" className="nav-link">User</Link>
                    <Link to="/AdminLogin" className="nav-link">Admin</Link>

                </div>
              )}
             </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;