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
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
	const [PasswordVisible, setPasswordVisible] = useState(false);

	const togglePassword = () => {
		setPasswordVisible(!PasswordVisible);
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
							type={PasswordVisible ? "text" : "password"}
							placeholder="password"
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
								<FontAwesomeIcon icon={faPhoneVolume} className="icons" />
								<p>Continue with Phone Number</p>
							</div>
						</button>
					</div>

					<div className="btn2">
						<button>
							<div className="align2">
								<FontAwesomeIcon icon={faGoogle} className="icons" />
								<p>Continue with Google</p>
							</div>
						</button>
					</div>
					<div className="signin_link">
						<p>Already have account?</p>
						<a href="#">SignIn</a>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignIn;
