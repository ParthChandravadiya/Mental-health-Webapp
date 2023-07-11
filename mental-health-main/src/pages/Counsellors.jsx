import React from 'react'
import './Counsellors.css';
import down from '../assets/down.svg'
import { AllExpertsData } from '../data'
import { ExpertCard } from '../components'

const Counsellors = () => {
  return (
    <div className='counsellors-main'>
      <div className='counsellors-top'>
        <div className='cou-top-left'>
          <h3>We have the best professionals - licensed and verified, who can help you heal!</h3>
          <p>Not sure how to choose a counselling therapist?</p>
        </div>
        <button>Get a recommendation</button>
      </div>
      <div className='counsellors-filters'>
        <button className='selected-filter'>Career problems</button>
        <button className='each-filter'>Merital problems</button>
        <button className='each-filter'>Self confidence</button>
        <button className='each-filter'>Sleep issues</button>
        <button className='each-filter'>Sexual issues</button>
        <button className='each-filter'>Depression</button>
        <select><img src={down} alt="" />
          <option>more</option>
          <option value="LGBTQ+">LGBTQ+</option>
          <option value="meat">Relationship</option>
          <option value="meat">Relationship</option>
        </select>
      </div>
      <div className='counsellors-bottom'>
      <div className='counsellors-all'>
      {
        AllExpertsData.map((Expert_options) => (

          <ExpertCard 
            key={Expert_options.id}
            img={Expert_options.img}
            Expert_name={Expert_options.Expert_name}
            Expert_star={Expert_options.Expert_star}
            Expert_degree={Expert_options.Expert_degree}
          />
        ))
      }
      </div>
      <button className='Load-more'>Load more counsellors</button>
      </div>
    </div>
  )
}

export default Counsellors;