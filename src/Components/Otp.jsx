import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Otp() {
  return (
    <div>
        <h3>Enter Your Phone Number</h3>
        <p>Phone Number</p>
          <div className="inputcontainer">
            <input type="email" placeholder="@username or example@gmail.com" />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
    </div>
  )
}

export default Otp