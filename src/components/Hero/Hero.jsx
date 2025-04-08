import React, { useState } from "react";
import styles from "./Hero.module.css";
import image from "../../assets/cuteGirl10.webp"; 
import EnrollmentModal from "../Enroll/Enroll"; 

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <button 
              onClick={openModal} 
              className={styles.secondaryButton}
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img
              src={image}
              alt="Students coding"
            />
          </div>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
        </div>
        <div>
          <a
            href={`https://wa.me/9861474074`}
            className={styles.whatsappFloat} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp Chat"
              className={styles.whatsappIcon} 
            />
          </a>
        </div>
      </div>
      
      <EnrollmentModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default Hero;