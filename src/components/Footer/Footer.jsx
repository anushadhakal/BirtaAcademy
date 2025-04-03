// components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.logoContainer}>
              {/* <img src={logo} alt="Birta Academy Logo" className={styles.logo} /> */}
              <h3 className={styles.logoText}>Birta <span>Academy</span></h3>
            </div>
            <p className={styles.description}>
              Birta Academy is a premier coding and technology training institute dedicated to empowering students with cutting-edge skills for the digital economy.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/birtasoft" target = "_blank" className={styles.socialLink}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/birtasoft_/" target = "_blank" className={styles.socialLink}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/bimalcodes/" target = "_blank" className={styles.socialLink}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Quick Links</h4>
              <ul className={styles.links}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Courses</h4>
              <ul className={styles.links}>
                <li><a href="#web">Web Development</a></li>
                <li><a href="#mobile">Mobile App Development</a></li>
                <li><a href="#data">Data Science</a></li>
                <li><a href="#design">UI/UX Design</a></li>
                <li><a href="#ai">Artificial Intelligence</a></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Contact Info</h4>
              <ul className={styles.contactInfo}>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Pokhara, Nepal</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span>9861474074 9703602478</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@birtasoft.com</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Birta Academy. All Rights Reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;