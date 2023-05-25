import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({title,desc,img,index}) => {
  
  return (
    <div className="fet-card">
        <div className='fet-card-left'><img src={img} alt="feature" /></div>
        
        <div className='fet-card-right'>
        <h3>{title}</h3>
        <p>{desc}</p>
        </div>
        
    </div>
  )
}

export default FeatureCard