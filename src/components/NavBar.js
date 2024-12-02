import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/Logo.svg'; 

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add effect to reset menu state on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false); // Close menu if switching to desktop view
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" ><img src={Logo} alt="Logo"/> </a>{/* Replace with your logo image path */}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faX : faBars} />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#home">
            Home
            {isMenuOpen && <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />}
          </a>
        </li>
        <li>
          <a href="#contact">
            Join Daforte
            {isMenuOpen && <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />}
          </a>
        </li>
        <li>
          <a href="#contact">
            List Your Property
            {isMenuOpen && <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
