import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faEye,
	faEyeSlash,
	faPhone,
	faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import sinInImg from "../assets/images/Frame 1000001133.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { Margin } from "@mui/icons-material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
// require('dotenv').config()

function SignIn() {
	const [PasswordVisible, setPasswordVisible] = useState(false);

	const togglePassword = () => {
		setPasswordVisible(!PasswordVisible);
	};

  const navigate = useNavigate();


  const onGoogleLoginSuccess = () => {
    const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
    const REDIRECT_URI = 'auth/api/login/google/';
  
    const scope = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' ');
  
    const params = {
      response_type: 'code',
      client_id: process.env.GOOGLE_OAUTH2_CLIENT_ID,
      redirect_uri: `${process.env.BASE_API_URL}/${REDIRECT_URI}`,
      prompt: 'select_account',
      access_type: 'offline',
      scope
    };
  
    const urlParams = new URLSearchParams(params).toString();
    window.location = `${GOOGLE_AUTH_URL}?${urlParams}`;
  };

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
						<input
							type={PasswordVisible ? "text" : "Password"}
							placeholder="Insert Password Here"
						/>
						<FontAwesomeIcon
							icon={PasswordVisible ? faEyeSlash : faEye}
							className="icon"
							onClick={togglePassword}
						/>
					</div>

					<button className="signinbtn">Login</button>
					<div className="or">
						<span>Or</span>
					</div>

					<div className="btn">
						<button>
							<div className="align">
								<FontAwesomeIcon icon={faPhoneVolume} className="icons" style={{marginTop:7,marginRight:5}}/>
								<p>Continue with Phone Number</p>
							</div>
						</button>
					</div>

					<div className="btn2">
						<button type="button" onClick={onGoogleLoginSuccess}>
							<div className="align2">
								<FontAwesomeIcon icon={faGoogle} className="icons" style={{marginTop:9,marginRight:5}}/>
								<p>Continue with Google</p>
							</div>
						</button>
					</div>
          <div className="btn3">
						<button type="button" onClick={() => navigate('/otp-login')}>
							<div className="align3">
								<FontAwesomeIcon icon={faPhone} className="icons" style={{marginTop:9,marginRight:5}}/>
								<p>Single Time OTP</p>
							</div>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignIn;
