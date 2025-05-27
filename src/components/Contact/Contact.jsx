// ContactUs.jsx
import React, { useState } from 'react';
import styles from './Contact.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const validateEmail = (email) => {
    if (!email.endsWith('@gmail.com')) {
      return 'Email must end with @gmail.com';
    }
    return '';
  };

  const validatePhone = (phone) => {
    if (phone && (phone.length !== 10 || !/^\d+$/.test(phone))) {
      return 'Phone number must be exactly 10 digits';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear errors when user starts typing
    if (name === 'email' || name === 'phone') {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    
    if (emailError || phoneError) {
      setErrors({
        email: emailError,
        phone: phoneError
      });
      
      if (emailError) {
        toast.error(emailError);
      }
      
      if (phoneError) {
        toast.error(phoneError);
      }
      
      return;
    }

    // Form is valid - process submission
    toast.success('Message sent successfully!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <ToastContainer position="top-right" autoClose={3000} />
        
        <div className={styles.contactHeader}>
          <h2><span>Get</span> In Touch</h2>
          <p>Get in touch with our team for any inquiries.</p>
        </div>

        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
              <h1>For Any <span>Queries</span></h1>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.infoContent}>
                <h3>Our Location</h3>
                <p>Panthi Galli-04, Pokhara</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className={styles.infoContent}>
                <h3>Call Us</h3>
                <p>9766051371, 9861474074, 9856021350</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className={styles.infoContent}>
                <h3>Email Us</h3>
                <p>official.birtaacademy@gmail.com</p>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email "
                    required
                  />
                  {errors.email && (
                    <span className={styles.errorText}>{errors.email}</span>
                  )}
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone "
                    required
                  />
                  {errors.phone && (
                    <span className={styles.errorText}>{errors.phone}</span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="6"
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;