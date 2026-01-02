import React from "react";
import "./container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faCloud,
  faTemperatureHigh,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MarketStatus from "./MarketStatus";
import CropList from "./CropList";
import InteractiveMap from "./InteractiveMap";
import Weekly from "./Weekly";
import Dashboard from "./Dashboard";
import HomeNavbar from "./HomeNavbar";
import Sidebar from "./Sidebar";

function container() {
  return (
    <div className="container">
      <div className="column left">
        <Sidebar />
      </div>
      <div className="column center">
        <OverviewContent />
      </div>
      <div className="column right" style={{ width: "448px" }}>
        <Weekly />
      </div>
    </div>
  );
}

function OverviewContent() {
  return (
    <div className="overview-content">
      <div className="dash-title">Overview</div>
      <div className="overview-cards">
        <div className="overview-card">
          <div className="top-t">
            <div className="title">Temperature</div>
            <div className="change-indicator up">
              <FontAwesomeIcon icon={faArrowUp} /> <span>5%</span>
            </div>
          </div>
          <div
            className="circular-progress-wrapper"
            style={{
              stroke: "#29BB49",
              strokedasharray: "289.027px, 289.027px",
              strokedashoffset: "0px",
            }}
          >
            <CircularProgressbar
              value={37}
              text={`${37}°C`}
              styles={buildStyles({
                pathColor: "#fff",
                textColor: "#000",
                trailColor: "#32b871",
              })}
            />
          </div>
          {/* <FontAwesomeIcon icon={faTemperatureHigh} className="weather-icon" /> */}
        </div>
        <div className="overview-card">
          <div className="top-t">
            <div className="title">Humidity</div>
            <div className="change-indicator down">
              <FontAwesomeIcon icon={faArrowDown} /> 5%
            </div>
          </div>
          <div className="circular-progress-wrapper">
            <CircularProgressbar
              value={10}
              text={`${10}%`}
              styles={buildStyles({
                pathColor: "#fff",
                textColor: "#000",
                trailColor: "#32b871",
              })}
            />
          </div>
          {/* <FontAwesomeIcon icon={faTint} className="weather-icon" /> */}
        </div>
        <div className="overview-card">
          <div className="top-t">
            <div className="title">Precipitation</div>
            <div className="change-indicator up">
              <FontAwesomeIcon icon={faArrowUp} /> <span>7%</span>
            </div>
          </div>
          <div className="circular-progress-wrapper">
            <CircularProgressbar
              value={37}
              text={`${37}°C`}
              styles={buildStyles({
                pathColor: "#fff",
                textColor: "#000",
                trailColor: "#32b871",
              })}
            />
          </div>
          {/* <FontAwesomeIcon icon={faTemperatureHigh} className="weather-icon" /> */}
        </div>
      </div>
      <MarketStatus />
      <CropList />
      <InteractiveMap />
    </div>
  );
}

export default container;
