// src/components/About.js
import React from 'react';
import './About.css';
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Us</h2>
        <p>
          Welcome to She/Her, a dedicated platform committed to providing a safe space for women to voice their concerns and seek help. Our mission is to empower women by offering them a reliable and secure environment where they can report issues, get support, and find resources to address their needs.
        </p>
        <p>
          At She/Her, we believe in the power of community and the importance of standing together. Our platform is built with cutting-edge technology to ensure the privacy and security of our users. Whether you need to report an incident, find legal assistance, or connect with support groups, SafeHer is here for you.
        </p>
        <p>
          Join us in our mission to create a safer world for women. Together, we can make a difference.
        </p>
      </div>
    </section>
  );
};

export default About;
