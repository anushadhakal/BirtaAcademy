import React, { useState } from 'react';
import styles from './Enroll.module.css';

const Enroll = () => {
 let [name,setName]=useState("");
 let [email,setEmail]=useState("");
  let [phone,setPhone]=useState("");  
  let [course,setCourse]=useState("");
  let [message,setMessage]=useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
    setCourse('');
    setMessage('');
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
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
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
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
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
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="course">Select Course</label>
                  <select
                    id="course"
                    name="course"
                    value={course}
                    onChange={(e)=>setCourse(e.target.value)}
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
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
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