import React, { useState } from "react";
import "./D4Farmer.css";
import personalDetail4 from "../assets/images/personalization4-1.svg";
import left from "../assets/icons/right-1-1.svg";
import right from "../assets/icons/right-1-2.svg";

const D4Farmer = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	return (
		<div className="d-4-farmer">
			<div className="personalization">
				<div className="movie-card-parent">
					<div className="movie-card">
						<img
							className="personalization-4-1-icon"
							alt=""
							src={personalDetail4}
						/>
					</div>
					<div className="frame-parent">
						<div className="trending-parent">
							<div className="trending">
								<div className="almost-finished">Almost finished</div>
							</div>
							<div className="discover-a-diverse">
								Discover a diverse array of valuable insights and updates shared
								by our community on GreenNet.
							</div>
						</div>
						<div className="progress">
							<div className="frame-group">
								<div className="wrapper">
									<div className="almost-finished">1</div>
								</div>
								<div className="frame-child" />
							</div>
							<div className="frame-group">
								<div className="wrapper">
									<div className="almost-finished">2</div>
								</div>
								<div className="frame-child" />
							</div>
							<div className="frame-group">
								<div className="wrapper">
									<div className="almost-finished">3</div>
								</div>
								<div className="frame-child" />
							</div>
							<div className="wrapper">
								<div className="almost-finished">4</div>
							</div>
						</div>
					</div>
				</div>
				<div className="personalization-inner">
					<div className="frame-parent1">
						<div className="what-types-of-crops-do-you-gro-wrapper">
							<div className="what-types-of">
								What types of crops do you grow?
							</div>
						</div>
						<div className="frame-parent2">
							<div
								className={`frame-parent3  ${
									selectedOption === "Maize" ? "selected" : ""
								}`}
								onClick={() => handleOptionClick("Maize")}
							>
								<div className="frame-wrapper">
									<div
										className={`frame-child1 ${
											selectedOption === "Maize" ? "active" : ""
										}`}
									/>
								</div>
								<div className="maize-wrapper">
									<div className="maize">Maize</div>
								</div>
							</div>
							<div
								className={`frame-parent3 ${
									selectedOption === "Wheat" ? "selected" : ""
								}`}
								onClick={() => handleOptionClick("Wheat")}
							>
								<div className="frame-wrapper">
									<div
										className={`frame-child1 ${
											selectedOption === "Wheat" ? "active" : ""
										}`}
									/>
								</div>
								<div className="maize-wrapper">
									<div className="maize">Wheat</div>
								</div>
							</div>
							<div
								className={`frame-parent3 ${
									selectedOption === "Barley" ? "selected" : ""
								}`}
								onClick={() => handleOptionClick("Barley")}
							>
								<div className="frame-wrapper">
									<div
										className={`frame-child1 ${
											selectedOption === "Barley" ? "active" : ""
										}`}
									/>
								</div>
								<div className="maize-wrapper">
									<div className="maize">Barley</div>
								</div>
							</div>
							<div
								className={`frame-parent3  ${
									selectedOption === "Other" ? "selected" : ""
								}`}
								onClick={() => handleOptionClick("Other")}
							>
								<div className="frame-wrapper">
									<div
										className={`frame-child1 ${
											selectedOption === "Other" ? "active" : ""
										}`}
									/>
								</div>
								<div className="maize-wrapper">
									<div className="maize">Other</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frame-parent7">
					<button className="right-1-group">
						<img className="right-1-icon" alt="" src={left} />
						<div className="maize">Back</div>
					</button>
					<button className="finish-parent">
						<b className="maize">Finish</b>
						<img className="right-1-icon2" alt="" src={right} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default D4Farmer;
