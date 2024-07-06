import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/assets/images/hero-image.jpg' alt='Hero' className='hero-image' />
      <h1>Welcome to Women Complaint Center</h1>
      <p>We are here to listen and support you.</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
