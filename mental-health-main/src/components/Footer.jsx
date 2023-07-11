import React from 'react';
import './Footer.css';
import GooglePlay from '../assets/GooglePlay.svg';
import AppStore from '../assets/AppStore.svg';
import MentalLogo from '../assets/MentalLogo.svg';
import youtube_dark from '../assets/youtube_dark.svg';
import instagram_dark from '../assets/instagram_dark.svg';
import twitter_dark from '../assets/twitter_dark.svg';
import facebook_dark from '../assets/facebook_dark.svg';

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-content'>
        <div className='footer-left'>
          <div className='footer-logo'>
            <img src={MentalLogo} alt="Mindcare" />
          </div>
          <div className='footer-buttons'>
            <button className='footer-play'>
              <img src={GooglePlay} alt="Play store" />
            </button>
            <button className='footer-apple'>
              <img src={AppStore} alt="App store" />
            </button>
          </div>
          <div className='footer-social'>
            <img src={youtube_dark} alt="youtube" />
            <img src={instagram_dark} alt="instagram" />
            <img src={twitter_dark} alt="twitter" />
            <img src={facebook_dark} alt="youtube" />
          </div>
          <div className='footer-para'>
          Lorem ipsum dolor sit amet. Qui veritatis odit aut amet atque ut inventore quasi ut voluptas laboriosam eos voluptatibus ullam.
          </div>
        </div>
        <div className='footer-right'></div>
      </div>
      <div className='footer-bottom'>
      Copyright fit4sure © 2022 All Rights Reserved
      </div>
    </div>
  )
}

export default Footer