import React from 'react'
import UserDashNav from './UserDashNav'
import "./UserHome.css";
import Experts from "../../assets/Experts.svg";
import Plans from "../../assets/Plans.svg";
import Support from "../../assets/Support.svg";
import Next from "../../assets/Next.svg";

const UserHome = () => {
    
  return (
    <>
    <UserDashNav/>
    <div className='Userhome-main'>
      <div className='Userhome-left'>
        <div className='Userhome-cta'>
          <div className='Userhome-cta-top'>
            <img src={Experts} alt="" />
            <h3>Experts</h3>
            <img src={Next} alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet. Qui consequatur eveniet et dolor mollitia aut internos totam ut </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserHome