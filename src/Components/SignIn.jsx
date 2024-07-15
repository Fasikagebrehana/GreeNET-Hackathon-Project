import React, { useState, useCallback } from "react";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PropTypes from "prop-types";
import "./SignIn.css";

// Importing images
import emailIcon from "../assets/icons/email-icon.svg";
import callIcon from "../assets/icons/vuesaxlinearcallcalling.svg";
import googleIcon from "../assets/icons/googlecoloricon-1.svg";
import line34 from "../assets/icons/line-34.svg";

const SignIn = ({ className = "" }) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	const onFrameContainerClick = useCallback(() => {
		// Please sync "signup" to the project
	}, []);

	return (
		<div className={`login ${className}`}>
			<section className="frame-parent wholesignin">
				<div
					className="welcome-to-greenet-parent"
					onClick={onFrameContainerClick}
				>
					<h1 className="welcome-to-greenet">Welcome To GreeNet</h1>
					<div className="embrace-sustainability-foster">
						Embrace sustainability, foster connections, and transform the future
						of agriculture with GreeNet.
					</div>
				</div>
				<form className="auth-options">
					<div className="greenet-wrapper">
						<div className="greenet">GreeNet</div>
					</div>
					<div className="email-parent">
						<div className="email">Email</div>
						<TextField
							className="email-field"
							placeholder="@username or example@gmail.com"
							variant="outlined"
							InputProps={{
								endAdornment: (
									<img
										width="18.7px"
										height="14px"
										src={emailIcon}
										alt="email"
									/>
								),
							}}
							sx={{
								"& fieldset": { borderColor: "rgba(0, 0, 0, 0.08)" },
								"& .MuiInputBase-root": {
									height: "53px",
									paddingRight: "12px",
									borderRadius: "7.35px",
									fontSize: "14px",
								},
								"& .MuiInputBase-input": {
									color: "black",
									textTransform: "lowercase",
								},
							}}
						/>
					</div>
					<div className="password-parent">
						<div className="password">Password</div>
						<TextField
							type={showPassword ? "text" : "password"}
							className="pass-field"
							placeholder="password"
							variant="outlined"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											onClick={handleTogglePasswordVisibility}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
							sx={{
								"& fieldset": { borderColor: "rgba(0, 0, 0, 0.08)" },
								"& .MuiInputBase-root": {
									height: "53px",
									paddingRight: "12px",
									borderRadius: "7.35px",
									fontSize: "14px",
								},
								"& .MuiInputBase-input": {
									color: "black",
									textTransform: "lowercase",
								},
							}}
						/>
						<div className="forget-password-wrapper">
							<b className="forget-password">Forget password?</b>
						</div>
					</div>
					<Button
						className="auth-options-child"
						disableElevation
						variant="contained"
						sx={{
							textTransform: "none",
							color: "#fff",
							fontSize: "13.7",
							background: "#29bb49",
							borderRadius: "9.13px",
							"&:hover": { background: "#29bb49" },
							height: 46,
						}}
					>
						Login
					</Button>
					<div className="auth-options-inner">
						<div className="vector-parent">
							<img
								className="frame-child"
								loading="lazy"
								alt="line"
								src={line34}
							/>
							<div className="rectangle-parent">
								<div className="frame-item" />
								<div className="or">Or</div>
							</div>
						</div>
					</div>
					<Button
						className="phone-option"
						startIcon={
							<img width="21.7px" height="21.7px" src={callIcon} alt="phone" />
						}
						disableElevation
						variant="contained"
						sx={{
							textTransform: "none",
							color: "#fff",
							fontSize: "13.7",
							background: "#000",
							borderRadius: "9.13px",
							"&:hover": { background: "#000" },
							height: 49.7,
						}}
					>
						Continue with Phone number
					</Button>
					<Button
						className="phone-option1"
						startIcon={
							<img
								width="21.3px"
								height="21.7px"
								src={googleIcon}
								alt="google"
							/>
						}
						disableElevation
						variant="contained"
						sx={{
							textTransform: "none",
							color: "rgba(0, 0, 0, 0.7)",
							fontSize: "13.7",
							background: "rgba(111, 108, 143, 0.02)",
							border: "rgba(111, 108, 143, 0.77) solid 0.6px",
							borderRadius: "9.13px",
							"&:hover": { background: "rgba(111, 108, 143, 0.02)" },
							height: 49.7,
						}}
					>
						Continue with Google
					</Button>
					<div className="frame-div">
						<div className="dont-have-account-yet-parent">
							<div className="dont-have-account">Don’t have Account yet ?</div>
							<div className="signup">SignUp</div>
						</div>
					</div>
				</form>
			</section>
		</div>
	);
};

SignIn.propTypes = {
	className: PropTypes.string,
};

export default SignIn;
