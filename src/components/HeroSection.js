import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <img className='background' src='images/hero-bg.png' /> */}
      <h1>Great Things Are Coming</h1>
      <p>Want to know more?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Sign Up to be notified <i class="fas fa-chevron-right"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        // onClick={console.log('hey')}
        >
          More Information
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
