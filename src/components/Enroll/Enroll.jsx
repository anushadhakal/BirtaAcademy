import React, { useState, useEffect } from 'react';
import styles from './Enroll.module.css';

const EnrollmentModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [learningMode, setLearningMode] = useState(""); // Changed from "online" to empty string
  const [message, setMessage] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [previousITCourse, setPreviousITCourse] = useState("");
  const [availability, setAvailability] = useState("");
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

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCourse('');
    setLearningMode(''); // Also updated here to reset to empty string
    setMessage('');
    setEducationLevel('');
    setPreviousITCourse('');
    setAvailability('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mdkepalw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          course,
          learningMode,
          educationLevel,
          previousITCourse,
          availability,
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
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder="Enter your full address"
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
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.sectionLabel}>What is your current education level?*</label>
                  <div className={styles.optionsContainer}>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="seeAppeared"
                        name="educationLevel"
                        value="SEE Appeared Students"
                        checked={educationLevel === "SEE Appeared Students"}
                        onChange={() => setEducationLevel("SEE Appeared Students")}
                        required
                      />
                      <label htmlFor="seeAppeared">SEE Appeared Students</label>
                    </div>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="plusTwo"
                        name="educationLevel"
                        value="+2 / College Student"
                        checked={educationLevel === "+2 / College Student"}
                        onChange={() => setEducationLevel("+2 / College Student")}
                      />
                      <label htmlFor="plusTwo">+2 / College Student</label>
                    </div>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="bachelor"
                        name="educationLevel"
                        value="Bachelor's Student"
                        checked={educationLevel === "Bachelor's Student"}
                        onChange={() => setEducationLevel("Bachelor's Student")}
                      />
                      <label htmlFor="bachelor">Bachelor's Student</label>
                    </div>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="otherEducation"
                        name="educationLevel"
                        value="Other"
                        checked={educationLevel === "Other"}
                        onChange={() => setEducationLevel("Other")}
                      />
                      <label htmlFor="otherEducation">Other</label>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.sectionLabel}>Have you taken any IT-related courses before?*</label>
                  <div className={styles.optionsContainer}>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="itYes"
                        name="previousITCourse"
                        value="Yes"
                        checked={previousITCourse === "Yes"}
                        onChange={() => setPreviousITCourse("Yes")}
                        required
                      />
                      <label htmlFor="itYes">Yes</label>
                    </div>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="itNo"
                        name="previousITCourse"
                        value="No"
                        checked={previousITCourse === "No"}
                        onChange={() => setPreviousITCourse("No")}
                      />
                      <label htmlFor="itNo">No</label>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.sectionLabel}>Availability & Learning Preference:*</label>
                  <div className={styles.optionsContainer}>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="morning"
                        name="availability"
                        value="Morning"
                        checked={availability === "Morning"}
                        onChange={() => setAvailability("Morning")}
                        required
                      />
                      <label htmlFor="morning">Morning</label>
                    </div>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="day"
                        name="availability"
                        value="Day"
                        checked={availability === "Day"}
                        onChange={() => setAvailability("Day")}
                      />
                      <label htmlFor="day">Day</label>
                    </div>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="evening"
                        name="availability"
                        value="Evening"
                        checked={availability === "Evening"}
                        onChange={() => setAvailability("Evening")}
                      />
                      <label htmlFor="evening">Evening</label>
                    </div>
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.sectionLabel}>Preferred Learning Mode*</label>
                  <div className={styles.optionsContainer}>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="online"
                        name="learningMode"
                        value="online"
                        checked={learningMode === "online"}
                        onChange={() => setLearningMode("online")}
                        required
                      />
                      <label htmlFor="online">Online Classes</label>
                    </div>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="physical"
                        name="learningMode"
                        value="physical"
                        checked={learningMode === "physical"}
                        onChange={() => setLearningMode("physical")}
                      />
                      <label htmlFor="physical">Physical Classes</label>
                    </div>
                  </div>
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
                
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
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