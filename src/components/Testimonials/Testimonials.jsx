/*
import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const testimonials = [
    {
      id: 1,
      name: 'Shital Sharma',
      role: 'Web Developer',
      company: 'TechSolutions',
      image: 'https://placehold.co/600x400',
      text: 'The Full Stack Web Development course at Birta Academy completely transformed my career. The hands-on approach and expert guidance helped me land my dream job. I highly recommend their courses to anyone serious about a tech career.',
    },
    {
      id: 2,
      name: 'Ram Patel',
      role: 'Mobile App Developer',
      company: 'AppWorks',
      image: 'https://placehold.co/600x400',
      text: 'Learning Flutter at Birta Academy was one of the best decisions I\'ve made. The curriculum is comprehensive and the instructors are always available to help. Within months of completing the course, I started freelancing and building my own apps.',
    },
    {
      id: 3,
      name: 'Laxman Kumar',
      role: 'Data Scientist',
      company: 'DataInsights',
      image: 'https://placehold.co/600x400',
      text: 'As someone with no prior experience in programming, I was skeptical about learning Data Science. However, the step-by-step approach at Birta Academy made it accessible and engaging. Now I\'m working as a junior data scientist at a growing startup.',
    },
    {
      id: 4,
      name: 'Bharat Koirala',
      role: 'UI/UX Designer',
      company: 'DesignHub',
      image: 'https://placehold.co/600x400',
      text: 'The UI/UX Design course exceeded my expectations. The projects were practical and relevant to industry standards. The feedback from instructors was invaluable in improving my design skills. I\'m now working with clients from around the world.',
    },
  ];

  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    
    // Resume auto-playing after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    setIsAutoPlaying(false);
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Student <span>Testimonials</span></h2>
          <p className={styles.sectionDescription}>
            Hear what our students have to say about their learning experiences at Birta Academy.
          </p>
        </div>
        
        <div className={styles.testimonialSlider}>
          <div className={styles.testimonialWrapper} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialItem}>
                <div className={styles.testimonialContent}>
                  <div className={styles.quoteMark}>"</div>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorImage}>
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>{testimonial.name}</h4>
                      <p className={styles.authorRole}>{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.sliderControls}>
            <button className={styles.sliderButton} onClick={handlePrevClick}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className={styles.sliderDots}>
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`${styles.sliderDot} ${index === currentSlide ? styles.active : ''}`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
            <button className={styles.sliderButton} onClick={handleNextClick}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
*/