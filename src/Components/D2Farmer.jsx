import React, { useState } from "react";
import personalDetail from "../assets/images/personalization3-1.svg";
import right2 from "../assets/icons/right-1-2.svg";
import right3 from "../assets/icons/right-1.svg";
import "./D2Farmer.css";

const D2Farmer = ({ className = "" }) => {
	const [selectPermission, setSelectPermission] = useState("");

	const handleRoleSelect = (role) => {
		setSelectPermission(role);
	};

	const handleContinue = () => {
		if (selectPermission) {
			console.log(selectPermission);
			// Add your logic for continuing the process here
		} else {
			console.log("Please select an option");
		}
	};

	const handleGoBack = () => {
		console.log("Go back clicked");
		// Add your logic for going back here
	};

	return (
		<div className={`d-2-farmer ${className}`}>
			<div className="personalization">
				<div className="movie-card-parent">
					<div className="movie-card">
						<img
							className="personalization-3-1-icon"
							alt=""
							src={personalDetail}
						/>
					</div>
					<div className="frame-parent">
						<div className="trending-parent">
							<div className="trending">
								<div className="personal-details">Personal details</div>
							</div>
							<div className="discover-a-diverse">
								Discover a diverse array of valuable insights and updates shared
								by our community on GreenNet.
							</div>
						</div>
						<div className="progress">
							<div className="frame-group">
								<div className="wrapper">
									<div className="personal-details">1</div>
								</div>
								<div className="frame-child" />
							</div>
							<div className="frame-group">
								<div className="wrapper">
									<div className="personal-details">2</div>
								</div>
								<div className="frame-child" />
							</div>
							<div className="frame-div">
								<div className="frame">
									<div className="personal-details">3</div>
								</div>
								<div className="frame-inner" />
							</div>
							<div className="wrapper1">
								<div className="personal-details">4</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frame-parent4">
					<div className="frame-parent5">
						<div className="would-you-like-to-personalize-wrapper">
							<div className="would-you-like">
								Would you like to personalize your experience?
							</div>
						</div>
						<div className="frame-parent6">
							<div
								className={`frame-parent7 backHover1 ${
									selectPermission === "yes" ? "active" : ""
								}`}
								onClick={() => handleRoleSelect("yes")}
							>
								<div className="frame-wrapper">
									<div
										className={`frame-child3 ${
											selectPermission === "yes" ? "selected" : ""
										}`}
									/>
								</div>
								<div className="yes-wrapper">
									<div className="yes">Yes</div>
								</div>
							</div>
							<div
								className={`frame-parent7 backHover2  ${
									selectPermission === "no" ? "active" : ""
								}`}
								onClick={() => handleRoleSelect("no")}
							>
								<div className="frame-wrapper1">
									<div
										className={`frame-child3 ${
											selectPermission === "no" ? "selected" : ""
										}`}
									/>
								</div>
								<div className="yes-wrapper">
									<div className="yes">No</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frame-parent14">
					<div className="right-1-group" onClick={handleGoBack}>
						<img className="right-1-icon" alt="" src={right3} />
						<div className="back">Go Back</div>
					</div>
					<div className="continue-parent" onClick={handleContinue}>
						<b className="back">Continue</b>
						<img className="right-1-icon2" alt="" src={right2} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default D2Farmer;
