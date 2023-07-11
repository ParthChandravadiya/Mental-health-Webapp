import React from 'react'
import './Download.css';
import GooglePlay from '../assets/GooglePlay.svg';
import AppStore from '../assets/AppStore.svg';
import DownloadLeft from '../assets/DownloadLeft.svg';

const Download = () => {
  return (
    <div className='download-main'>
      <div className='download-left'>
        <img src={DownloadLeft} alt="" />
      </div>
      <div className='download-right'>
        <div className='download-right-text'>
          <div className='download-text1'>We provide mental <span>support</span> when and where you need it.</div>
          <div className='download-text2'>
          We make you fit in a sustainable manner by using the science of fitness and providing constant support. Our certified and top-rated professional..
          </div>
        </div>
        <div className='download-data'>
          <div> <h2>100+</h2> <p>Experts</p> </div>
          <div> <h2>99.13%</h2> <p>Success rate</p> </div>
          <div> <h2>200k+</h2> <p>Lives impacted</p> </div>
          <div> <h2>150k+</h2> <p>Users in India</p> </div>
        </div>
        <div className='download-buttons'>
          <button className='down-play'>
            <img src={GooglePlay} alt="Play store" />
          </button>
          <button className='down-apple'>
            <img src={AppStore} alt="App store" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Download