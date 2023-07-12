import React, { useState } from "react";
import "./UserDashNav.css";
import MentalLogo from "../../assets/MentalLogo.svg";
import User from "../../assets/User.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

const UserDashNav = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
        setUser(null);
      }

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="left_nav">
          <ul>
            <li>
            <a href="/">
            <img src={MentalLogo} alt="logo" />
            </a>
            </li>
            <li>
              <NavLink
                to="/counsellors"
                className="nav-link"
                activeClassName="active"
              >
                Counsellors
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="nav-link" activeClassName="active">
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right_nav">
      
          <h3>Welcome <span> Neeraj!</span></h3>
          
            <img src={User} alt="" />
            {/* <NavLink
              className="nav-link"
              activeClassName="active"
              onClick={logout}
            >
              Logout
            </NavLink> */}
        </div>
        
      </nav>
      <hr className="line" />
    </div>
  );
};

export default UserDashNav;
