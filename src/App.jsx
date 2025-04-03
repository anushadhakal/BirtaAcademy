// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Courses from './components/Courses/Courses';
import Enroll from './components/Enroll/Enroll';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About/>
      <Courses />
      <Enroll />
      <Testimonials />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;