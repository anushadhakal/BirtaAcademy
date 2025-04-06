import React, { useState } from 'react';
import styles from './Courses.module.css';
import CourseDetails from '../CourseDetail/CourseDetail';
import fullStack from '../../assets/fullstack8.jpg';
import mobileApp from '../../assets/mobileimage.avif';
import graphicsDesign from '../../assets/graphics1.jpg';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile App' },
    // { id: 'data', name: 'Data Science' },
    { id: 'design', name: 'Graphics Design' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a complete web developer.',
      // price: 'Rs. 40,000',
      duration: '3 months',
      category: 'web',
      image: fullStack,
    },
    {
      id: 2,
      title: 'Mobile Application Development',
      description: 'Build beautiful native apps for Android and iOS with a single codebase using Flutter and Dart.',
      // price: 'Rs. 35,000',
      duration: '3 months',
      category: 'mobile',
      image: mobileApp,
    },
    // {
    //   id: 3,
    //   title: 'Data Science and Machine Learning',
    //   description: 'Master data analysis, visualization, and machine learning with Python, Pandas, and TensorFlow.',
    //   price: 'Rs. 45,000',
    //   duration: '5 months',
    //   category: 'data',
    //   image: 'https://placehold.co/600x400',
    // },
    {
      id: 4,
      title: 'Graphics Design Fundamentals',
      description: 'Learn design principles, user research, and  with Adobe Photo Shop.',
      // price: 'Rs. 30,000',
      duration: '3 months',
      category: 'design',
      image: graphicsDesign,
    }
    // {
    //   id: 5,
    //   title: 'Frontend Development with React',
    //   description: 'Master modern frontend development with React, Redux, and related tools and libraries.',
    //   price: 'Rs. 28,000',
    //   duration: '2.5 months',
    //   category: 'web',
    //   image: 'https://placehold.co/600x400',
    // },
    // {
    //   id: 6,
    //   title: 'Backend Development with Node.js',
    //   description: 'Build robust server-side applications with Node.js, Express, and MongoDB.',
    //   price: 'Rs. 32,000',
    //   duration: '3 months',
    //   category: 'web',
    //   image: 'https://placehold.co/600x400',
    // },
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  const handleViewCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <section id="courses" className={styles.courses}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our <span>Courses</span></h2>
          <p className={styles.sectionDescription}>
            Explore our industry-relevant courses designed by experts to help you build a successful career in tech.
          </p>
        </div>

        <div className={styles.categories}>
          {categories.map(category => (
            <button 
              key={category.id} 
              className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={styles.courseGrid}>
          {filteredCourses.map(course => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.courseImage}>
                <img src={course.image} alt={course.title} />
              </div>
              <div className={styles.courseDetails}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDescription}>{course.description}</p>
                <div className={styles.courseInfo}>
                  <div className={styles.courseInfoItem}>
                    <i className="far fa-clock"></i>
                    <span>{course.duration}</span>
                  </div>
                  {/* <div className={styles.courseInfoItem}> */}
                    {/* <i className="fas fa-tag"></i> */}
                    {/* <span>{course.price}</span> */}
                  {/* </div> */}
                </div>
                <button 
                  className={styles.viewCourseButton}
                  onClick={() => handleViewCourse(course)}
                >
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <CourseDetails 
          course={selectedCourse} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default Courses;