import React, {useState} from 'react';
import backgroundImg from '../assets/background.png';
import heroImg from '../assets/hero-img.png';

const Hero = ({setShowPopUp}) => {

  

  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="hero-content">
        <h1>Maximize the Potential of Your Enterprise With <span className="highlight">fastra <br /><span className="highlight-red">suite</span></span></h1>
        <p>Seamlessly integrated, endlessly scalable, and <br /> designed to elevate your operations to new heights.</p>
        <button onClick={() => setShowPopUp(prevState => !prevState)} className="cta-button">Get started for free!</button>
      </div>
      <img src={heroImg} alt="Hero" className="hero-image" />
    </div>
  );
};

export default Hero;
