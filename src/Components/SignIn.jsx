import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import sinInImg from "../assets/images/Frame 1000001133.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./SignIn.css";

function SignIn() {
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordVisible(!PasswordVisible);
  };

  const handleLogin = () => {
    login();
    navigate("/homepage");
  };

  return (
    <div className="wholesignin">
      <div className="signinimage">
        <img src={sinInImg} alt="" />
      </div>
      <div className="signincontainer">
        <h1>GreeNet</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>Email</div>
          <div className="inputcontainer">
            <input type="email" placeholder="@username or example@gmail.com" />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icons-field"
              // id="icon-email"
            />
          </div>

          <div>Password</div>
          <div className="inputcontainer">
            <input
              type={PasswordVisible ? "text" : "password"}
              placeholder="password"
            />
            <FontAwesomeIcon
              icon={PasswordVisible ? faEyeSlash : faEye}
              className="icons-field"
              onClick={togglePassword}
            />
          </div>
          <a className="link-forget"> forget password</a>

          <button type="submit" className="signinbtn">
            Login
          </button>
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
              Don't have an account yet? <Link to="/sign-up">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
