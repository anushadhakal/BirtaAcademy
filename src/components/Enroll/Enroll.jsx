// components/Enroll/Enroll.jsx
import React, { useState } from 'react';
import styles from './Enroll.module.css';

const Enroll = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <section id="enroll" className={styles.enroll}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Start Your Journey Today</h2>
            <p className={styles.description}>
              Enroll in our courses and take the first step towards a successful career in technology. 
              Our expert instructors and comprehensive curriculum will help you achieve your goals.
            </p>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className={styles.featureText}>
                  <h3>Hands-on Learning</h3>
                  <p>Practical projects and real-world applications</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-users"></i>
                </div>
                <div className={styles.featureText}>
                  <h3>Expert Instructors</h3>
                  <p>Learn from industry professionals</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-certificate"></i>
                </div>
                <div className={styles.featureText}>
                  <h3>Certification</h3>
                  <p>Receive recognized certification upon completion</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
              <h3 className={styles.formTitle}>Enroll <span> Now </span> </h3>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="course">Select Course</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="Full Stack Web Development">Full Stack Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Data Science">Data Science and Machine Learning</option>
                    <option value="UI/UX Design">UI/UX Design Fundamentals</option>
                    <option value="Frontend Development">Frontend Development with React</option>
                    <option value="Backend Development">Backend Development with Node.js</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any additional information you'd like to share"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enroll;