import React from 'react'
import './landing.css'
import vectorimg1 from '../assets/images/Vector.svg'
import vectorimg2 from '../assets/images/Vector2.svg'
import dashimg from '../assets/images/dashboard.png'

function LandingPage() {
  return (
    <div className='landingpage'>
        <div className='content'>
            <div className='svgimg2'>
                <img src={vectorimg2} alt="leaf" />
            </div>
            <div className='headline'>
                <h1>Empowering Farmers and Traders with Real-Time Market <span>Insights</span></h1>
                <p>“Connecting you to the best market opportunities, weather forecasts, and community support.”</p>
                <button>Get Started</button>
            </div>
            <div className='svgimg'>
                <img src={vectorimg1} alt="leaf" />
            </div>

            <div className='dashboardimg'>
                <img src={dashimg} alt="" />
            </div>

            <div className='landingcontainer'>
                <p>Why Choose GreenNet?</p>
                <hr className='l' />
            </div>
        </div>
    </div>
  )
}

export default LandingPage