import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/birtaLogo10.webp';
import EnrollmentModal from '../Enroll/Enroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

  const openModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <img src={logo} alt="Birta Academy Logo" />
            </div>
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
            {/* <li className={styles.navItem}><a href="#testimonials">Testimonials</a></li> */}
            <li className={styles.navItem}><a href="#contact">Contact</a></li>
            <li className={styles.navItem}>
              <a href="#enroll" className={styles.enrollButton} style={{color:'white'}} onClick={openModal}>
                Enroll Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      <EnrollmentModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;