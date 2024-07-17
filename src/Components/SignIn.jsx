import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import sinInImg from "../assets/images/Frame 1000001133.png";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [PasswordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!PasswordVisible);
  };
//   const onGoogleLoginSucces = () => {
// 	console.log('Clicked on Google Login button');
// 	console.log('Client ID:', process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID);
// 	console.log('Redirect URI:', `${process.env.REACT_APP_BASE_API_URL}/auth/api/login/google/`);
  
// 	// Ensure other code remains unchanged
//   };
  

  // const onGoogleLoginSuccess = () => {
  //   const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
  //   const REDIRECT_URI = 'auth/api/login/google/';

  //   const scope = [
  //     'https://www.googleapis.com/auth/userinfo.email',
  //     'https://www.googleapis.com/auth/userinfo.profile'
  //   ].join(' ');

  //   const params = {
  //     response_type: 'code',
  //     client_id: process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID,
  //     redirect_uri: `${process.env.REACT_APP_BASE_API_URL}/${REDIRECT_URI}`,
  //     prompt: 'select_account',
  //     access_type: 'offline',
  //     scope
  //   };

  //   const urlParams = new URLSearchParams(params).toString();
  //   window.location = `${GOOGLE_AUTH_URL}?${urlParams}`;
  // };

  return (
    <div className="wholesignin">
      <div className="signinimage">
        <img src={sinInImg} alt="" />
      </div>
      <div className="signincontainer">
        <h1>GreeNet</h1>

        <form action="">
          <p>Email</p>
          <div className="inputcontainer">
            <input type="email" placeholder="@username or example@gmail.com" />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>

          <p>Password</p>
          <div className="inputcontainer">
            <input type={PasswordVisible ? "text" : "password"} placeholder="password" />
            <FontAwesomeIcon icon={PasswordVisible ? faEyeSlash : faEye} className="icon" onClick={togglePassword} />
          </div>

          <Link to='/homenav' className="signinbtn">Login</Link>
          <div className="or">
            <span>Or</span>
          </div>

          <div className="btn">
            <button>
              <div className="align">
                <FontAwesomeIcon icon={faPhoneVolume} className="icons" />
                <p>Continue with Phone Number</p>
              </div>
            </button>
          </div>

          <div className="btn2">
            <button >
              <div className="align2">
                <FontAwesomeIcon icon={faGoogle} className="icons" />
                <p>Continue with Google</p>
              </div>
            </button>
          </div>
          <div className="signin_link">
            <p>Don't have an account yet?<Link to='/sign-up'>Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
