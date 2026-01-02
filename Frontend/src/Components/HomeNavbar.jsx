import React from "react";
import "./homenavbar.css";
import logo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/images/profile.png";
import NavBar from "./NavBar";

function HomeNavbar() {
  return NavBar;
  <nav className="navbar">
    <div className="navbar-left">
      <img src={logo} alt="GreeNet" className="logo" />
      <span className="brand-name">GreeNet.</span>
    </div>
    <ul className="navbar-links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/dashboard">Dashboard</a>
      </li>
      <li>
        <a href="/how-it-works">How it works</a>
      </li>
      <li>
        <a href="/help">Help</a>
      </li>
    </ul>
    <div className="navbar-right">
      <FontAwesomeIcon icon={faSearch} className="icon" />
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
  </nav>;
}

export default HomeNavbar;
