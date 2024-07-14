import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
    <div>
        <div>
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
            <button>SignUp</button>
            <div className='or'><span>Or</span></div>
          </form>
        </div>
    </div>
  )
}

export default SignUp