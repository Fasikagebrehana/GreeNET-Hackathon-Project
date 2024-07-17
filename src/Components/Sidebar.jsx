import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faChartBar, faMapMarkedAlt, faBell, faSignOutAlt, faMoon, faListAlt } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';
import logo from '../assets/images/logo.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h2>Dashboard</h2>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faTachometerAlt} />
          <span>Overview</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faChartBar} />
          <span>Market Data</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faMapMarkedAlt} />
          <span>Interactive Maps</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faBell} />
          <span>Alerts</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faListAlt} />
          <span>Watch List</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faMoon} />
          <span>Dark Mode</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faSignOutAlt} style={{color: "#29BB49"}} />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
