import React, { useEffect } from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaChartLine } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  
  
  const stats = [
    {
      icon: <FaUserGraduate />,
      number: "500+",
      text: "Students Enrolled"
    },
    {
      icon: <FaChalkboardTeacher />,
      number: "15+",
      text: "Expert Instructors"
    },
    {
      icon: <FaBook />,
      number: "10+",
      text: "Professional Courses"
    },
    {
      icon: <FaChartLine />,
      number: "95%",
      text: "Success Rate"
    }
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
          Birta Academy is dedicated to shaping young minds for the future by nurturing creativity, critical thinking, and problem-solving skills. We offer engaging and interactive learning experiences in subjects like coding, robotics, mathematics, and science. Our curriculum is designed to make learning fun and accessible, helping students build a strong foundation in technology and innovation. From developing apps and exploring AI to mastering essential academic skills, Birta Academy empowers learners to thrive in an ever-evolving digital world.
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