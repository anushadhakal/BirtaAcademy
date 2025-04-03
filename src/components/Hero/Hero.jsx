// components/Hero/Hero.jsx
import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Start Your <span className={styles.highlight}>Coding</span> Journey
            Today
          </h1>
          <p className={styles.subtitle}>
            Birta Academy offers comprehensive coding courses designed to
            transform beginners into industry-ready professionals.
          </p>
          <div className={styles.buttons}>
            <a href="#courses" className={styles.primaryButton}>
              Explore Courses
            </a>
            <a href="#enroll" className={styles.secondaryButton}>
              Enroll Now
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img
              src="https://imgs.search.brave.com/5ONY6swdLSLpfRhZ2zTJEPEaS_vVgC8x6tKSokWaQjI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHMtZnMvaHViZnMv/aG93LXRvLXN0YXJ0/LWNvZGluZy0xLmpw/Zz93aWR0aD02MDIm/aGVpZ2h0PTMwMCZu/YW1lPWhvdy10by1z/dGFydC1jb2Rpbmct/MS5qcGc"
              alt="Students coding"
            />
          </div>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
        </div>
        <div>
          <a
            href={`https://wa.me/9867392158`}
            className={styles.whatsappFloat} // Use CSS Module class
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp Chat"
              className={styles.whatsappIcon} // Use CSS Module class
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
