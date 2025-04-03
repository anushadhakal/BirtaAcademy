// components/CourseDetails/CourseDetails.jsx
import React, { useEffect, useState } from 'react';
import styles from './CourseDetail.module.css';

const CourseDetails = ({ course, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  // Handle closing animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match this with the animation duration
  };

  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Cleanup function to restore scrolling when modal is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  if (!course) return null;

  // Function to handle Apply Now button click
  const handleApplyNow = () => {
    // Close the modal
    handleClose();
    
    // After modal closes, redirect to enroll section
    setTimeout(() => {
      // Get the enroll section element
      const enrollSection = document.getElementById('enroll');
      
      // If the section exists, scroll to it
      if (enrollSection) {
        enrollSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If no specific section exists, you can redirect to a URL
        window.location.href = '/#enroll';
      }
    }, 350); // Slightly longer than modal close animation
  };

  return (
    <div className={`${styles.modalOverlay} ${isClosing ? styles.modalClosing : ''}`}>
      <div className={styles.modalContent}>
        <div className={styles.courseHeader}>
          <h2 className={styles.courseTitle}>{course.title}</h2>
          <div className={styles.closeButtonContainer}>
            <button className={styles.closeButton} onClick={handleClose}>×</button>
          </div>
        </div>
        
        <div className={styles.courseImageContainer}>
          <img src={course.image} alt={course.title} className={styles.courseImage} />
        </div>
        
        <div className={styles.courseInfo}>
          <div className={styles.infoRow}>
            <div className={styles.infoItem}>
              <i className="far fa-clock"></i>
              <span>Duration: {course.duration}</span>
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-tag"></i>
              <span>Price: {course.price}</span>
            </div>
          </div>
        </div>
        
        <div className={styles.courseDescription}>
          <h3>Description</h3>
          <p>{course.description}</p>
        </div>
        
        <div className={styles.courseCurriculum}>
          <h3>Curriculum Highlights</h3>
          <ul>
            {course.category === 'web' && (
              <>
                <li>HTML5, CSS3, and JavaScript Fundamentals</li>
                <li>Responsive Web Design Principles</li>
                <li>Frontend Frameworks and Libraries</li>
                <li>Backend Development and APIs</li>
                <li>Database Design and Integration</li>
              </>
            )}
            {course.category === 'mobile' && (
              <>
                <li>Mobile App UI/UX Design</li>
                <li>Cross-platform Development</li>
                <li>State Management</li>
                <li>API Integration</li>
                <li>App Deployment and Distribution</li>
              </>
            )}
            {course.category === 'data' && (
              <>
                <li>Python Programming</li>
                <li>Data Analysis and Visualization</li>
                <li>Statistical Methods</li>
                <li>Machine Learning Algorithms</li>
                <li>Data Engineering Principles</li>
              </>
            )}
            {course.category === 'design' && (
              <>
                <li>Design Thinking Methodology</li>
                <li>User Research and Testing</li>
                <li>Wireframing and Prototyping</li>
                <li>Visual Design Principles</li>
                <li>Design Systems and Documentation</li>
              </>
            )}
          </ul>
        </div>
        
        <div className={styles.instructorInfo}>
          <h3>Instructor</h3>
          <div className={styles.instructor}>
            <div className={styles.instructorAvatar}>
              <img src="https://placehold.co/100x100" alt="Instructor" />
            </div>
            <div className={styles.instructorDetails}>
              <h4>Expert Instructor</h4>
              <p>Industry professional with over 8 years of experience</p>
            </div>
          </div>
        </div>
        
        <div className={styles.actionButtons}>
          <button className={styles.applyButton} onClick={handleApplyNow}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;