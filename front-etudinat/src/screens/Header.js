import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import logo from '../assets/img/logo 1.png';
import profileIcon from '../assets/img/profile.webp';

function Header() {
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('English');
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user'); 
        setUser(response.data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="login-header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="search-and-language">
        <button className="get-started">Get Started</button>
        <input
          type="search"
          className="search-input"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
          <option value="French">Français</option>
        </select>
        <div className="profile-container">
          <img
            src={profileIcon}
            alt="Profile"
            className="profile-icon"
            onClick={handleProfileClick}
          />
          {showDropdown && (
            <div className="profile-dropdown">
              {user ? (
                <>
                  <div className="profile-email">{user.email}</div>
                  <a href="/my-" className="dropdown-item">Name</a>
                  <a href="/settings" className="dropdown-item">Settings</a>
                  <a href="/logout" className="dropdown-item logout">Log out</a>
                </>
              ) : (
                <button onClick={() => console.log('Login')}>Login</button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
