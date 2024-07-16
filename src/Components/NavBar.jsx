import React from 'react'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/sign-in');
  };

  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='listnavbar'>
        <div className='logo'>
          <img src={logo} alt="logo" style={{ width: '20px', height: '20px' }} />
          <p>GreeNet.</p>
        </div>
        <ul>
          <ul onClick={handleHomeClick}>Home</ul>
          <ul>Dashboard</ul>
          <ul>How It Work</ul>
          <ul>Help</ul>
          <ul><FontAwesomeIcon icon={faSearch} className='icon' style={{color:"#34C759"}}/></ul>
        </ul>
        <div className='btns'>
          <button onClick={handleSignInClick}>Login</button>
          <button className='signupbtns' onClick={handleSignUpClick}>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
