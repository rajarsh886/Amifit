import React, { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  const toggleNavbar = () => setNavActive(!navActive);
  const closeNavbar = () => setNavActive(false);

  useEffect(() => {
    const handleScroll = () => setHeaderActive(window.scrollY >= 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${headerActive ? ' active' : ''}`} data-header>
      <div className="container">
        <Link to="/" className="logo">
          AmiFit<span className="span">.</span>
        </Link>

        <nav className={`navbar${navActive ? ' active' : ''}`} data-navbar>
          <button className="nav-toggle-btn" onClick={toggleNavbar} aria-label="close menu">
            <IoCloseOutline />
          </button>

          <ul className="navbar-list">
            {[
              { name: 'Home', path: '/' },
              { name: 'Counter', path: '/counter' },
              { name: 'Course', path: '/course' },
              { name: 'Dite', path: 'https://diet-recommendation-system.streamlit.app/' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <li key={item.name} className="navbar-item">
                <Link to={item.path} className="navbar-link" onClick={closeNavbar}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="btn btn-primary">
        Contact-Us
        </Link>

        <button className="nav-toggle-btn" onClick={toggleNavbar} aria-label="open menu">
          <IoMenuOutline />
        </button>

        <div className={`overlay${navActive ? ' active' : ''}`} onClick={toggleNavbar}></div>
      </div>
    </header>
  );
};

export default Navbar;
