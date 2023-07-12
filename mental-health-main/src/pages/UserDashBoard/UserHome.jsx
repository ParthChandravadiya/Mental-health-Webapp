import React from 'react'
import UserDashNav from './UserDashNav'
import "./UserHome.css";
import Experts from "../../assets/Experts.svg";
import Plans from "../../assets/Plans.svg";
import Support from "../../assets/Support.svg";
import Next from "../../assets/Next.svg";
import { useNavigate } from "react-router-dom";

const UserHome = () => {

  const navigate = useNavigate();
    
  return (
    <>
    <UserDashNav/>
    <div className='Userhome-main'>
      <div className='Userhome-left'>
        <div className='Userhome-cta'>
          <div className='Userhome-cta-top'>
            <img src={Experts} alt="" />
            <h3>Experts</h3>
            <img src={Next} alt=""  onClick={()=> navigate('/counsellor')}/>
          </div>
          <p>Lorem ipsum dolor sit amet. Qui consequatur eveniet et dolor mollitia aut internos totam ut </p>
        </div>
        <div className='Userhome-cta'>
          <div className='Userhome-cta-top'>
            <img src={Plans} alt="" />
            <h3>Plans</h3>
            <img src={Next} alt="" onClick={()=> navigate('/plans')}/>
          </div>
          <p>Lorem ipsum dolor sit amet. Qui consequatur eveniet et dolor mollitia aut internos totam ut </p>
        </div>
        <div className='Userhome-cta'>
          <div className='Userhome-cta-top'>
            <img src={Support} alt="" />
            <h3>Support</h3>
            <img src={Next} alt="" onClick={()=> navigate('/support')}/>
          </div>
          <p>Lorem ipsum dolor sit amet. Qui consequatur eveniet et dolor mollitia aut internos totam ut </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserHome