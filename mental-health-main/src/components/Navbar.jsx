import React,{useState} from 'react'
import './Navbar.css'
import MentalLogo from '../assets/MentalLogo.svg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
    <nav className='nav'>
        <div className='left_nav'><a href='/'><img src={MentalLogo} alt="logo" /></a></div>
        <ul>
        <li>
            <NavLink to='/counsellors' className='nav-link' activeClassName='active'>Counsellors</NavLink>
          </li>
          <li>
            <NavLink to='/aboutus' className='nav-link' activeClassName='active'>About Us</NavLink>
          </li>
          <li>
            <NavLink to='/plans' className='nav-link' activeClassName='active'>Plans</NavLink>
          </li>
          <li>
            <NavLink to='/career' className='nav-link' activeClassName='active'>Career</NavLink>
          </li>
          <li>
            <NavLink to='/contactus' className='nav-link' activeClassName='active'>Contact us</NavLink>
          </li>
          <li>
            <NavLink to='/signin' className='nav-link' activeClassName='active'>Signin</NavLink>
          </li>
        </ul>
        
    </nav>
        <hr className='line'/>
        </div>

  )
}

export default Navbar