//Smiely part remaining

import React from "react";
import "./Hero.css";
import landingRightImg from "../assets/landingRightImg.svg";
import smile from '../assets/smile.svg';
import call from '../assets/call.svg';
const Home = () => {
  return (
    
    <div className="hero-container">
      <div className="hero_left">
        <div className="hero-text1">There's no one face to Mental <span>Health</span> Conditions</div>
        <div className="hero-text2"> 
        At Mental care, there's no one-size-fit all approach to mental health. We tailor our care plans to fit each person’s unique needs.
        </div>
      <div className="Hero-buttons">
        <button className="hero-cta">Get a counsellor</button>
        <button className="hero-sec"><img src={call} alt="" /> Call now</button>
      </div>
      
      </div>
      <div className="hero-right">
        <img className="hero-image" src={landingRightImg} alt="img" />
        </div>
      
    </div>
  );
};

export default Home;
