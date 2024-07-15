import React from 'react'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'

function NavBar() {
  return (
    <div>
      <div className='listnavbar'>
        <div className='logo'>
          <img src={logo} alt="logo" style={{ width: '20px', height: '20px' }} />
          <p>GreeNet.</p>
        </div>
        <ul>
          <ul>Home</ul>
          <ul>Dashboard</ul>
          <ul>How It Work</ul>
          <ul>Help</ul>
          <ul><FontAwesomeIcon icon={faSearch} className='icon' style={{color:"#34C759"}}/></ul>
        </ul>
        <div className='btns'>
          <button>Login</button>
          <button className='signupbtns'>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
