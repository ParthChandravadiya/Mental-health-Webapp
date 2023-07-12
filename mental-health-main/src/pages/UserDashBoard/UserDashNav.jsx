import React, { useState, useEffect, useRef } from "react";
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
  const [popupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    if (popupOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [popupOpen]);

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
                to="/counsellor"
                className="nav-link"
                activeClassName="active"
              >
                Counsellors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="nav-link"
                activeClassName="active"
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right_nav">
          <h3>
            Welcome <span>Neeraj!</span>
          </h3>

          <div className="user-popup" ref={popupRef}>
            <img
              src={User}
              alt=""
              onClick={togglePopup}
            />
            {popupOpen && (
              <div className="popup-content">
                <ul>
                  <li>
                    <NavLink
                      className="popup-link"
                      activeClassName="active"
                      to="/profile"
                      onClick={closePopup}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="popup-link"
                      activeClassName="active"
                      to="/support"
                      onClick={closePopup}
                    >
                      Support
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="popup-link"
                      activeClassName="active"
                      to="/"
                      onClick={() => {
                        closePopup();
                        logout();
                      }}
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <hr className="line" />
    </div>
  );
};

export default UserDashNav;
