import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faChartBar,
  faMapMarkedAlt,
  faBell,
  faSignOutAlt,
  faMoon,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import logo from "../assets/images/logo.svg";
import over from "../assets/icons/element-equal.svg";
import market from "../assets/icons/status-up.svg";
import weath from "../assets/icons/cloud-plus.svg";
import alarms from "../assets/icons/notification-bing.svg";
import maps from "../assets/icons/map.svg";
import commun from "../assets/icons/people.svg";
import Watch from "../assets/icons/receipt-2.svg";
import Dark from "../assets/icons/brush.svg";
import { Link } from 'react-router-dom'

// import over_a from "../assets/icons/element-equal_a.svg";
// import market_a from "../assets/icons/status-up_a.svg";
// import weath_a from "../assets/icons/cloud-plus_a.svg";
// import alarms_a from "../assets/icons/notification-bing_a.svg";
// import maps_a from "../assets/icons/map_a.svg";
// import commun_a from "../assets/icons/people_a.svg";
// import Watch_a from "../assets/icons/receipt-2_a.svg";
// import Dark_a from "../assets/icons/brush_a.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <div className="side-title">Dashboard</div>
      </div>
      <span
        style={{
          width: "100%",
          margin: "12px 0px",
          fontSize: "14px",
          color: "#00000063",
        }}
      >
        Menu
      </span>
      <ul className="sidebar-menu">
        <Link className="sidebar-item"to="/">
          <svg
            // style={{ stroke: "white" }}
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.25 7.24699V3.71199C19.25 2.32074 18.69 1.76074 17.2988 1.76074H13.7637C12.3725 1.76074 11.8125 2.32074 11.8125 3.71199V7.24699C11.8125 8.63824 12.3725 9.19824 13.7637 9.19824H17.2988C18.69 9.19824 19.25 8.63824 19.25 7.24699Z"
              // stroke="black"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.1875 7.46574V3.49324C9.1875 2.25949 8.6275 1.76074 7.23625 1.76074H3.70125C2.31 1.76074 1.75 2.25949 1.75 3.49324V7.45699C1.75 8.69949 2.31 9.18949 3.70125 9.18949H7.23625C8.6275 9.19824 9.1875 8.69949 9.1875 7.46574Z"
              // stroke="black"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.1875 17.3095V13.7745C9.1875 12.3832 8.6275 11.8232 7.23625 11.8232H3.70125C2.31 11.8232 1.75 12.3832 1.75 13.7745V17.3095C1.75 18.7007 2.31 19.2607 3.70125 19.2607H7.23625C8.6275 19.2607 9.1875 18.7007 9.1875 17.3095Z"
              // stroke="black"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.125 13.5732H18.375"
              // stroke="black"
              stroke-width="1.3125"
              stroke-linecap="round"
            />
            <path
              d="M13.125 17.0732H18.375"
              // stroke="black"
              stroke-width="1.3125"
              stroke-linecap="round"
            />
          </svg>

          <span>Overview</span>
        </Link>
        <Link to="/market-data" className="sidebar-item">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.01953 15.8923V14.0811"
              stroke-width="1.3125"
              stroke-linecap="round"
            />
            <path
              d="M10.5 15.892V12.2695"
              stroke-width="1.3125"
              stroke-linecap="round"
            />
            <path
              d="M14.9805 15.8917V10.4492"
              stroke-width="1.3125"
              stroke-linecap="round"
            />
            <path
              d="M14.9795 5.12939L14.577 5.60189C12.3458 8.20939 9.35328 10.0556 6.01953 10.8869"
              stroke-width="1.3125"
              stroke-linecap="round"
            />
            <path
              d="M12.418 5.12939H14.9817V7.6844"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.875 19.2607H13.125C17.5 19.2607 19.25 17.5107 19.25 13.1357V7.88574C19.25 3.51074 17.5 1.76074 13.125 1.76074H7.875C3.5 1.76074 1.75 3.51074 1.75 7.88574V13.1357C1.75 17.5107 3.5 19.2607 7.875 19.2607Z"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Market Data</span>
        </Link>
        <Link to="/weather" className="sidebar-item">
          <svg
            width="23"
            height="23"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5335 17.5108C15.706 17.5196 16.8348 17.0821 17.701 16.2946C20.5623 13.7921 19.031 8.76957 15.2598 8.29707C13.9123 0.124569 2.12602 3.22207 4.91727 11.0008"
              stroke-opacity="0.7"
              stroke-width="1.3125"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.36945 11.3597C5.9057 11.1235 5.38945 11.001 4.8732 11.0097C0.795704 11.2985 0.804454 17.231 4.8732 17.5197"
              stroke-opacity="0.7"
              stroke-width="1.3125"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.8428 8.66441C14.2978 8.43691 14.7878 8.31441 15.2953 8.30566"
              stroke-opacity="0.7"
              stroke-width="1.3125"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3477 17.5107H7.84766"
              stroke-opacity="0.7"
              stroke-width="1.3125"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.59766 19.2607V15.7607"
              stroke-opacity="0.7"
              stroke-width="1.3125"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Wheather</span>
        </Link>
        <Link className="sidebar-item">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00293 6.81847V15.3322C2.00293 16.9947 3.18418 17.6772 4.61918 16.8547L6.67543 15.6822C7.12168 15.4285 7.86543 15.4022 8.32918 15.6385L12.9229 17.9397C13.3867 18.1672 14.1304 18.1497 14.5767 17.896L18.3654 15.726C18.8467 15.446 19.2492 14.7635 19.2492 14.2035V5.68971C19.2492 4.02721 18.0679 3.34471 16.6329 4.16721L14.5767 5.33972C14.1304 5.59347 13.3867 5.61971 12.9229 5.38346L8.32918 3.09096C7.86543 2.86346 7.12168 2.88096 6.67543 3.13471L2.88668 5.30472C2.39668 5.58472 2.00293 6.26722 2.00293 6.81847Z"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.48828 3.51074V14.8857"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.7637 5.80322V17.5107"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Interactive Maps</span>
          </Link>

        <Link to='/community' className="sidebar-item">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7464 6.27575C15.6939 6.267 15.6327 6.267 15.5802 6.27575C14.3727 6.232 13.4102 5.24324 13.4102 4.01824C13.4102 2.76699 14.4164 1.76074 15.6677 1.76074C16.9189 1.76074 17.9252 2.77574 17.9252 4.01824C17.9164 5.24324 16.9539 6.232 15.7464 6.27575Z"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.8446 12.6459C16.0434 12.8471 17.3646 12.6371 18.2921 12.0159C19.5259 11.1934 19.5259 9.84588 18.2921 9.02338C17.3559 8.40213 16.0171 8.19213 14.8184 8.40213"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.22367 6.27575C5.27617 6.267 5.33742 6.267 5.38992 6.27575C6.59742 6.232 7.55992 5.24324 7.55992 4.01824C7.55992 2.76699 6.55367 1.76074 5.30242 1.76074C4.05117 1.76074 3.04492 2.77574 3.04492 4.01824C3.05367 5.24324 4.01617 6.232 5.22367 6.27575Z"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.12574 12.6459C4.92699 12.8471 3.60574 12.6371 2.67824 12.0159C1.44449 11.1934 1.44449 9.84588 2.67824 9.02338C3.61449 8.40213 4.95324 8.19213 6.15199 8.40213"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.4984 12.8119C10.4459 12.8031 10.3846 12.8031 10.3321 12.8119C9.12461 12.7681 8.16211 11.7794 8.16211 10.5544C8.16211 9.30313 9.16836 8.29688 10.4196 8.29688C11.6709 8.29688 12.6771 9.31188 12.6771 10.5544C12.6684 11.7794 11.7059 12.7769 10.4984 12.8119Z"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.95266 15.5682C6.71891 16.3907 6.71891 17.7382 7.95266 18.5607C9.35266 19.4969 11.6452 19.4969 13.0452 18.5607C14.2789 17.7382 14.2789 16.3907 13.0452 15.5682C11.6539 14.6407 9.35266 14.6407 7.95266 15.5682Z"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Community</span>
          </Link>
        <span
          style={{
            width: "100%",
            margin: "12px 0px",
            fontSize: "14px",
            color: "#00000063",
          }}
        >
          Personal
        </span>

        <a href="#" className="sidebar-item">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88875 17.5886C6.60625 16.8186 7.7 16.8798 8.33 17.7198L9.21375 18.9011C9.9225 19.8373 11.0688 19.8373 11.7775 18.9011L12.6613 17.7198C13.2913 16.8798 14.385 16.8186 15.1025 17.5886C16.66 19.2511 17.9287 18.6998 17.9287 16.3723V6.51107C17.9375 2.98482 17.115 2.10107 13.8075 2.10107H7.1925C3.885 2.10107 3.0625 2.98482 3.0625 6.51107V16.3636C3.0625 18.6998 4.34 19.2423 5.88875 17.5886Z"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.08406 9.97607H7.09192"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.53613 9.97607H14.3486"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.08406 6.47607H7.09192"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.53613 6.47607H14.3486"
              stroke-width="1.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Watch List</span>
        </a>
        <a href="#" className="sidebar-item">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_797_8705)">
              <path
                d="M8.3125 17.4243V16.1118H3.9375C3.45625 16.1118 3.01875 15.9193 2.70375 15.5956C2.38 15.2806 2.1875 14.8431 2.1875 14.3618C2.1875 13.4606 2.8875 12.7081 3.77125 12.6206C3.82375 12.6118 3.87625 12.6118 3.9375 12.6118H17.0625C17.1238 12.6118 17.1763 12.6118 17.2288 12.6206C17.6488 12.6556 18.0162 12.8393 18.2962 13.1281C18.655 13.4781 18.8475 13.9768 18.8037 14.5193C18.725 15.4381 17.8937 16.1118 16.9662 16.1118H12.6875V17.4243C12.6875 18.6318 11.7075 19.6118 10.5 19.6118C9.2925 19.6118 8.3125 18.6318 8.3125 17.4243Z"
                stroke-width="1.3125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.6491 4.99932L17.2291 12.6206C17.1766 12.6118 17.1241 12.6118 17.0629 12.6118H3.93789C3.87664 12.6118 3.82414 12.6118 3.77164 12.6206L3.35164 4.99932C3.19414 3.45057 4.41039 2.11182 5.95914 2.11182H15.0416C16.5904 2.11182 17.8066 3.45057 17.6491 4.99932Z"
                stroke-width="1.3125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.99121 2.11182V6.48682"
                stroke-width="1.3125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 2.11182V3.86182"
                stroke-width="1.3125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_797_8705">
                <rect
                  width="21"
                  height="21"
                  fill="white"
                  transform="translate(0 0.361816)"
                />
              </clipPath>
            </defs>
          </svg>

          <span>Dark Mode</span>
        </a>
        <a href="#" className="sidebar-item x" style={{ margintop: "18px" }}>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            style={{ color: "#29BB49" }}
            className="ic"
          />
          <span>Logout</span>
        </a>
      </ul>
    </div>
  );
}

export default Sidebar;
