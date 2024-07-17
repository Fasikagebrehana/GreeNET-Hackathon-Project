import React, { useState } from "react";
import "./D1Farmer.css";
import personalImg from "../assets/icons/personal-detail-1.svg";
import right1 from "../assets/icons/right-1.svg";
import right11 from "../assets/icons/right-11.svg";

const D1Farmer = () => {
	const [selectedRole, setSelectedRole] = useState("");

	const handleRoleSelect = (role) => {
		setSelectedRole(role);
	};

	const handleContinue = () => {
		if (selectedRole) {
			console.log(selectedRole);
		}
	};

	return (
		<div className="d-1-farmer">
			<div className="personalization">
				<div className="frame-parent">
					<div className="movie-card-wrapper">
						<div className="movie-card">
							<img
								className="personal-detail-1-icon"
								alt=""
								src={personalImg}
							/>
						</div>
					</div>
					<div className="frame-group">
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
							<div className="frame-container">
								<div className="wrapper">
									<div className="personal-details">1</div>
								</div>
								<div className="frame-child" />
							</div>
							<div className="frame-div">
								<div className="container">
									<div className="personal-details">2</div>
								</div>
								<div className="frame-item" />
							</div>
							<div className="frame-div">
								<div className="container">
									<div className="personal-details">3</div>
								</div>
								<div className="frame-item" />
							</div>
							<div className="container">
								<div className="personal-details">4</div>
							</div>
						</div>
					</div>
				</div>
				<div className="personalization-inner">
					<div className="frame-parent2">
						<div className="which-best-describes-you-wrapper">
							<div className="personal-details">Which best describes you?</div>
						</div>
						<div className="frame-parent3">
							<div
								className={`frame-parent4 ${
									selectedRole === "Farmer" ? "active" : ""
								}`}
								onClick={() => handleRoleSelect("Farmer")}
							>
								<div className="frame-wrapper">
									<div
										className={`frame-child1 ${
											selectedRole === "Farmer" ? "selected" : ""
										}`}
									/>
								</div>
								<div className="farmer-wrapper">
									<div className="farmer">Farmer</div>
								</div>
							</div>
							<div
								className={`frame-parent5 ${
									selectedRole === "Trader" ? "active" : ""
								}`}
								onClick={() => handleRoleSelect("Trader")}
							>
								<div className="frame-wrapper1">
									<div
										className={`frame-child1 ${
											selectedRole === "Trader" ? "selected" : ""
										}`}
									/>
								</div>
								<div className="farmer-wrapper">
									<div className="farmer">Trader</div>
								</div>
							</div>
							<div
								className={`frame-parent6 ${
									selectedRole === "Gov’t Official" ? "active" : ""
								}`}
								onClick={() => handleRoleSelect("Gov’t Official")}
							>
								<div className="frame-wrapper">
									<div
										className={`frame-child1 ${
											selectedRole === "Gov’t Official" ? "selected" : ""
										}`}
									/>
								</div>
								<div className="govt-official">Gov’t Official</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frame-parent7">
					<div className="right-1-parent">
						<img className="right-1-icon" alt="" src={right1} />
						<div className="farmer">Back</div>
					</div>
					<div className="continue-parent" onClick={handleContinue}>
						<span className="farmer">Continue</span>
						<img className="right-1-icon1" alt="" src={right11} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default D1Farmer;
