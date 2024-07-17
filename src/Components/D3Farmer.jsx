import React, { useState } from "react";
import personal from "../assets/images/personalizatio-1.svg";
import left from "../assets/icons/right-1-1.svg";
import right from "../assets/icons/right-1-2.svg";
import "./D3Farmer.css";

const D3Farmer = () => {
	const [selectedTechniques, setSelectedTechniques] = useState([]);
	const [selectedAlerts, setSelectedAlerts] = useState([]);

	const handleTechniqueClick = (technique) => {
		setSelectedTechniques((prevSelected) =>
			prevSelected.includes(technique)
				? prevSelected.filter((item) => item !== technique)
				: [...prevSelected, technique]
		);
	};

	const handleAlertClick = (alert) => {
		setSelectedAlerts((prevSelected) =>
			prevSelected.includes(alert)
				? prevSelected.filter((item) => item !== alert)
				: [...prevSelected, alert]
		);
	};

	return (
		<div className="d-3-farmer">
			<section className="personalization">
				<div className="movie-card-parent">
					<div className="movie-card">
						<img
							className="personalizatio-1-icon"
							loading="lazy"
							alt="Personal"
							src={personal}
						/>
					</div>
					<div className="insight-content-parent">
						<div className="insight-content">
							<h1 className="personal-details">Personal details</h1>
							<div className="discover-a-diverse">
								Discover a diverse array of valuable insights and updates shared
								by our community on GreenNet.
							</div>
						</div>
						<div className="progress">
							<div className="progress-container">
								<div className="progress-bar">
									<div className="progress-fill">1</div>
								</div>
								<div className="progress-container-inner">
									<div className="frame-child" />
								</div>
							</div>
							<div className="progress-container">
								<div className="wrapper">
									<div className="div">2</div>
								</div>
								<div className="progress-container-inner">
									<div className="frame-child" />
								</div>
							</div>
							<div className="progress-container">
								<div className="container">
									<div className="div1">3</div>
								</div>
								<div className="progress-container-inner">
									<div className="frame-child" />
								</div>
							</div>
							<div className="progress-label-wrapper">
								<div className="progress-label">4</div>
							</div>
						</div>
					</div>
				</div>
				<div className="farming-techniques-parent">
					<div className="farming-techniques">
						<div className="what-farming-techniques">
							What farming techniques do you use or are interested in?
						</div>
					</div>
					<div className="technique-options">
						<div className="technique-list">
							<div
								className={`technique-items option1 ${
									selectedTechniques.includes("Organic Farming")
										? "selected"
										: ""
								}`}
								onClick={() => handleTechniqueClick("Organic Farming")}
							>
								<input
									className="technique-item"
									type="checkbox"
									checked={selectedTechniques.includes("Organic Farming")}
									readOnly
								/>
								<div className="organic-farming">Organic Farming</div>
							</div>
							<div
								className={`technique-items option2 ${
									selectedTechniques.includes("Irrigation Methods")
										? "selected"
										: ""
								}`}
								onClick={() => handleTechniqueClick("Irrigation Methods")}
							>
								<input
									className="frame-input"
									type="checkbox"
									checked={selectedTechniques.includes("Irrigation Methods")}
									readOnly
								/>
								<div className="irrigation-methods">Irrigation Methods</div>
							</div>
							<div
								className={`technique-items option3 ${
									selectedTechniques.includes("Modern") ? "selected" : ""
								}`}
								onClick={() => handleTechniqueClick("Modern")}
							>
								<input
									className="frame-input1"
									type="checkbox"
									checked={selectedTechniques.includes("Modern")}
									readOnly
								/>
								<div className="modern">Modern</div>
							</div>
							<div
								className={`technique-items option4 ${
									selectedTechniques.includes("Traditional") ? "selected" : ""
								}`}
								onClick={() => handleTechniqueClick("Traditional")}
							>
								<input
									className="frame-input2"
									type="checkbox"
									checked={selectedTechniques.includes("Traditional")}
									readOnly
								/>
								<div className="traditional">Traditional</div>
							</div>
						</div>
						<div className="alerts-question">
							<div className="what-types-of">
								What types of alerts would you like to receive?
							</div>
						</div>
					</div>
					<div className="alert-options">
						<div
							className={`alert-items alert1 ${
								selectedAlerts.includes("Price Changes") ? "selected" : ""
							}`}
							onClick={() => handleAlertClick("Price Changes")}
						>
							<input
								className="alert-item"
								type="checkbox"
								checked={selectedAlerts.includes("Price Changes")}
								readOnly
							/>
							<div className="price-changes">Price Changes</div>
						</div>
						<div
							className={`alert-items alert2 ${
								selectedAlerts.includes("Weather Updates") ? "selected" : ""
							}`}
							onClick={() => handleAlertClick("Weather Updates")}
						>
							<input
								className="frame-input3"
								type="checkbox"
								checked={selectedAlerts.includes("Weather Updates")}
								readOnly
							/>
							<div className="weather-updates">Weather Updates</div>
						</div>
						<div
							className={`alert-items alert3 ${
								selectedAlerts.includes("Demand Spikes") ? "selected" : ""
							}`}
							onClick={() => handleAlertClick("Demand Spikes")}
						>
							<input
								className="frame-input4"
								type="checkbox"
								checked={selectedAlerts.includes("Demand Spikes")}
								readOnly
							/>
							<div className="demand-spikes">Demand Spikes</div>
						</div>
					</div>
				</div>
				<div className="navigation">
					<button className="back-button-container-parent">
						<div className="back-button-container">
							<img className="right-1-icon1" alt="Left Arrow" src={left} />
						</div>
						<div className="go-back">Go Back</div>
					</button>
					<button className="next-parent">
						<b className="next">Next</b>
						<img className="right-1-icon2" alt="Right Arrow" src={right} />
					</button>
				</div>
			</section>
		</div>
	);
};

export default D3Farmer;
