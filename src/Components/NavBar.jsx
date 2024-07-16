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
    <div className='listnavbar'>
    <div className='logo'>
      <img src={logo} alt="logo" style={{ width: '20px', height: '20px' }} />
      <p>GreeNet.</p>
    </div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#dashboard">Dashboard</a></li>
      <li><a href="#howitworks">How It Works</a></li>
      <li><a href="#help">Help</a></li>
      <li><FontAwesomeIcon icon={faSearch} className='icon' style={{ color: "#34C759" }} /></li>
    </ul>
    <div className='btns'>
      <Link to="/sign-in"><button>Login</button></Link>
      <Link to="/sign-up"><button className='signupbtns'>SignUp</button></Link>
    </div>
  </div>
  )
}

export default NavBar;
