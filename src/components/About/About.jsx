import React, { useEffect } from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaChartLine } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  
  
  const stats = [
    {
      icon: <FaUserGraduate />,
      number: "1st Batch Loading...",
      text: "Students Enrolled"
    },
    {
      icon: <FaChalkboardTeacher />,
      number: "3+",
      text: "Expert Instructors"
    },
    {
      icon: <FaBook />,
      number: "3+",
      text: "Professional Courses"
    },
    // {
    //   icon: <FaChartLine />,
    //   number: "95%",
    //   text: "Success Rate"
    // }
  ];
  
  return (
    <section id='about' className={styles.aboutSection}>
      
      <div className={styles.aboutContainer}>
        <div className={styles.photoSection}>
          <div className={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Students learning"
              className={styles.aboutImage}
            />
          </div>
        </div>
        
        <div className={styles.contentSection}>
          <h2 className={styles.aboutTitle}>About <span>Us</span> </h2>
          <div className={styles.separator}></div>
          <p className={styles.aboutText}>
          Birta Academy is a place where creativity meets technology. We help students build real skills in Full Stack Web Development, Mobile Application Development, and Graphics Designing. Our courses are hands-on, beginner-friendly, and focused on practical learning. <br />

          Whether you want to create websites, build mobile apps, or design eye-catching graphics, we guide you every step of the way. Our goal is to make learning fun, engaging, and useful for the real world. At Birta Academy, we don’t just teach skills—we help you build a future in the digital world.
          </p>
        </div>
      </div>
      
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div className={styles.statCard} key={index}>
            <div className={styles.iconContainer}>
              {stat.icon}
            </div>
            <h3 className={styles.statNumber}>{stat.number}</h3>
            <p className={styles.statText}>{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;