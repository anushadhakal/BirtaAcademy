// ContactUs.jsx
import React, { useState } from 'react';
import styles from './Contact.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div id="contact">

    <section  className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <h2><span > Get </span>In Touch</h2>
          <p>Get in touch with our team for any inquiries.</p>
        </div>

        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
              <h1>For Any <span>Queries</span> </h1>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.infoContent}>
                <h3>Our Location</h3>
                <p>Newroad Pokhara, Nepal</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className={styles.infoContent}>
                <h3>Call Us</h3>
                <p>9861474074</p>
                <p>9703602478</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className={styles.infoContent}>
                <h3>Email Us</h3>
                <p>info@birtasoft.com</p>
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
                    placeholder="Your Email"
                    required
                    />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    />
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
                  </div>
  );
};

export default ContactUs;