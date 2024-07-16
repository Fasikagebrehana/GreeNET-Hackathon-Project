import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import signupimg from "../assets/images/signup.png"
import {Link} from 'react-router-dom';
import "./SignUp.css"

function SignUp() {
  const [PasswordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

  const togglePassword = () => {
    setPasswordVisible(!PasswordVisible)
  }

  const toggleConfirmPassword = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible)
  }

  return (
    <div className='wholesignup'>
        <div className='signupcontainer'>
          <h1>GreeNet</h1>

          <form action="">

            <p>Email</p>
            <div className='inputcontainer'>
              <input type="email" placeholder='@username or example@gmail.com' />
              <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            </div>
            
            <p>Password</p>
            <div className='inputcontainer'>
              <input type={PasswordVisible ? 'text' : "password"} placeholder='password'/>
              <FontAwesomeIcon icon={PasswordVisible ? faEyeSlash : faEye}  className='icon' onClick={togglePassword}/>
            </div>
            <p>Confirm Password</p>
            <div className='inputcontainer'>
              <input type={confirmPasswordVisible ? 'text' : "password"} placeholder='password'/>
              <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye}  className='icon' onClick={toggleConfirmPassword}/>
            </div>

            <button className='signupbtn'>SignUp</button>
            <div className='or'><span>Or</span></div>

            <div className='btn'>
              <button>
                <div className='align'>
                  <FontAwesomeIcon icon={faPhoneVolume} className='icons'/>
                <p>Continue with Phone Number</p>
                </div>
                
              </button>
              </div>

            <div className='btn2'>
              <button>
                <div className='align2'>
                <FontAwesomeIcon icon={faGoogle} className='icons'/>
                <p>Continue with Google</p>
                </div>
              </button>
            </div>
            <p>already have account? <a href="#">SignIn</a></p>

          </form>
        </div>
            <div className='signupimage'>
              <img src={signupimg} alt="" />
            </div>
    </div>
  )
}

export default SignUp