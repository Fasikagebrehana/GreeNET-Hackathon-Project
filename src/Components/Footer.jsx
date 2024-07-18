import React from "react";
import vectorimg2 from "../assets/images/Vector2.svg";
import vectorimg1 from "../assets/images/Vector.svg";
import logo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="svgimgs">
        <img src={vectorimg2} alt="leaf" />
      </div>
      <div className="svgimgs-right">
        <img src={vectorimg1} alt="leaf" />
      </div>
      <div className="footernavbar">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "38px", height: "32px" }}
          />
          <p>GreeNet.</p>
        </div>
        <ul>
          {/* <li className='logo'>
            <img src={logo} alt="logo" />
            <p>GreeNet</p>
          </li> */}
          <li>Home</li>
          <li>Dashboard</li>
          <li>About Us</li>
          <li>FAQs</li>
        </ul>
        <div className="socialmedia">
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>© 2024 GreeNet. All rights reserved.</p>
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
