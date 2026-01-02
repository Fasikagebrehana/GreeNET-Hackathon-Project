import React from "react";
import logo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "./LandingPage";
import { useNavigate } from "react-router-dom";

function NavBar() {
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
      <div className="btns">
        <Link className="link-login" to="/sign-in">
          <button className="login">Login</button>
        </Link>
        <Link className="link-signup" to="/sign-up">
          <button className="signupbtns">SignUp</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
