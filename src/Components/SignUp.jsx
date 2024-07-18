import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import signupimg from "../assets/images/signup.png";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!PasswordVisible);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="wholesignup">
      <div className="signupcontainer">
        <h1>GreeNet</h1>

        <form action="">
          <div>Email</div>
          <div className="inputcontainer">
            <input type="email" placeholder="@username or example@gmail.com" />
            <FontAwesomeIcon icon={faEnvelope} className="icon-sign" id="" />
          </div>

          <div>Password</div>
          <div className="inputcontainer">
            <input
              type={PasswordVisible ? "text" : "password"}
              placeholder="password"
            />
            <FontAwesomeIcon
              icon={PasswordVisible ? faEyeSlash : faEye}
              className="icon-sign"
              onClick={togglePassword}
            />
          </div>
          <div>Confirm Password</div>
          <div className="inputcontainer">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="password"
            />
            <FontAwesomeIcon
              icon={confirmPasswordVisible ? faEyeSlash : faEye}
              className="icon-sign"
              onClick={toggleConfirmPassword}
            />
          </div>

          <button className="signupbtn">SignUp</button>
          <div className="or">
            <span>Or</span>
          </div>

          <div className="btn">
            <button>
              <div className="align">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="icons"
                  style={{ fontsize: "21px" }}
                />
                <div style={{ width: "100%" }}>Continue with Phone Number</div>
              </div>
            </button>
          </div>

          <div className="btn2">
            <button>
              <div className="align2">
                <FontAwesomeIcon icon={faGoogle} className="icons" />
                <div style={{ width: "100%" }}>Continue with Google</div>
              </div>
            </button>
          </div>
          <div className="signin_link">
            <p>
              Already have an account <Link to="/sign-in">Login</Link>
            </p>
          </div>
        </form>
      </div>
      <div className="signupimage">
        <img src={signupimg} alt="" />
      </div>
    </div>
  );
}

export default SignUp;
