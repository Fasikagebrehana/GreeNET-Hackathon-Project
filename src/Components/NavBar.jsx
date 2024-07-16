import React from 'react'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css'
import './LandingPage'
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate()
  const handleSignin = () => {
    navigate('/signin')
  }

  const handleSignup = () => {
    navigate('/signup')
  }
  return (
    <div>
      <div className='listnavbar'>
        <div className='logo'>
          <img src={logo} alt="logo" style={{ width: '20px', height: '20px' }} />
          <p>GreeNet.</p>
        </div>
        <ul>
        <li><a href="#home">Home</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#howitworks">How It Works</a></li>
          <li><a href="#help">Help</a></li>
          <ul><FontAwesomeIcon icon={faSearch} className='icon' style={{color:"#34C759"}}/></ul>
        </ul>
        <div className='btns'>
          <button onClick={handleSignin}>Login</button>
          <button className='signupbtns' onClick={handleSignup}>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
