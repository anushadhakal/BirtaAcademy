import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          {/* Logo placeholder */}
          <div className={styles.logo}>
            <img src={logo} alt="Birta Academy Logo" />
          </div>
          <span className={styles.brandName}>Birta <span> Academy </span> </span>
        </div>

        <div className={`${styles.mobileMenuButton} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}><a href="#home">Home</a></li>
          <li className={styles.navItem}><a href="#about">About</a></li>
          <li className={styles.navItem}><a href="#courses">Courses</a></li>
          <li className={styles.navItem}><a href="#testimonials">Testimonials</a></li>
          <li className={styles.navItem}><a href="#contact">Contact</a></li>
          <li className={styles.navItem}>
            <a href="#enroll" className={styles.enrollButton} style={{color:'white'}}>
              Enroll Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;