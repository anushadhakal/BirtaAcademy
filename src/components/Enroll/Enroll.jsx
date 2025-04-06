import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import styles from './Enroll.module.css';

const EnrollmentModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleRecaptchaChange = (value) => {
    setVerified(!!value);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCourse('');
    setMessage('');
    setVerified(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verified) {
      alert("Please verify that you are not a robot");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mblgzngb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          course,
          message,
        }),
      });
      
      if (response.ok) {
        setFormStatus('success');
        resetForm();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={onClose}>×</button>
          
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Enroll <span>Now</span></h3>
            
            {formStatus === 'success' ? (
              <div className={styles.successMessage}>
                <h4>Thank you for your application!</h4>
                <p>We'll contact you shortly with the next steps.</p>
                <button className={styles.submitButton} onClick={onClose}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPhone(e.target.value)}
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
                    onChange={(e) => setCourse(e.target.value)}
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="Full Stack Web Development">Full Stack Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Graphics Design">Graphics Design Fundamentals</option>
                    {/* <option value="Data Science">Data Science and Machine Learning</option>
                    <option value="Frontend Development">Frontend Development with React</option>
                    <option value="Backend Development">Backend Development with Node.js</option> */}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Any additional information you'd like to share"
                    rows="4"
                  ></textarea>
                </div>
                
                <div className={styles.recaptchaContainer}>
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleRecaptchaChange}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting || !verified}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                
                {formStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;