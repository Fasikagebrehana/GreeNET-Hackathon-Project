import React from "react";
import logo from "../assets/images/logo.svg";
import profile from "../assets/images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "./LandingPage";
import { useNavigate } from "react-router-dom";

function NavBarLog() {
  const navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signin");
  };

  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="listnavbar">
      <div className="logo">
        <img src={logo} alt="logo" style={{ width: "38px", height: "32px" }} />
        <p>GreeNet.</p>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#dashboard">Dashboard</a>
        </li>
        <li>
          <a href="#howitworks">How It Works</a>
        </li>
        <li>
          <a href="#help">Help</a>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faSearch}
            className="icon"
            style={{ color: "#34C759" }}
          />
        </li>
      </ul>

      <div className="navbar-right">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <div className="user-profile">
          <img src={profile} alt="User" className="user-avatar" />
          <div className="user-info">
            <span className="user-name">Natnael Meseret</span>
            <span className="user-email">example@gmail.com</span>
          </div>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default NavBarLog;
