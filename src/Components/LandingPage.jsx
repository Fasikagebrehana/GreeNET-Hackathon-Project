import React from 'react'
import './landing.css'
import vectorimg1 from '../assets/images/Vector.svg'
import vectorimg2 from '../assets/images/Vector2.svg'
import dashimg from '../assets/images/dashboard.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers ,faChartBar, faCloudSunRain, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Curve } from '../assets/images/curve.svg'
import { useState } from 'react'
import testimonialimg from '../assets/images/testimonial.png'
import Footer from './Footer'

const testimonials = [
  {
    image: testimonialimg,
    name: 'Ahmed',
    quote: 'The weather alerts help me plan my logistics better, saving time and money.',
    role: 'Trader',
    rating: 4,
  },
  {
    image: testimonialimg,
    name: 'James', 
    quote: 'The weather alerts help me plan my logistics better, saving time and money.',
    role: 'Trader',
    rating: 4,
  },
  {
    image: testimonialimg,
    name: 'Abebe',
    quote: 'The weather alerts help me plan my logistics better, saving time and money.',
    role: 'Farmer',
    rating: 4,
  },
];
function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
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

            <div className="info-cards">
      <div className="info-card">
        <div className="icon market-data">
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <h3>Real-Time Market Data</h3>
        <p>Stay updated with the latest market prices and trends for your crops.</p>
      </div>
      <div className="info-card">
        <div className="icon weather-forecasts">
          <FontAwesomeIcon icon={faCloudSunRain} />
        </div>
        <h3>Weather Forecasts</h3>
        <p>Plan your activities with accurate weather predictions and alerts.</p>
      </div>
      <div className="info-card">
        <div className="icon interactive-maps">
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </div>
        <h3>Interactive Maps</h3>
        <p>Explore markets and resources with detailed maps.</p>
      </div>
      <div className="info-card">
        <div className="icon sms-market-data">
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <h3>SMS based Market Data</h3>
        <p>Receive instant SMS alerts on market prices and trends.</p>
      </div>
      <div className="info-card">
        <div className="icon community-support">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <h3>Community Support</h3>
        <p>Join a network of users and experts for advice and collaboration.</p>
      </div>
    </div>

    <div className="how-it-works">
      <h2>How It Works</h2>
      <hr className='l' />
      <div className="curve-container">
        <Curve className="curve" />
        <div className="steps">
          <div className="step step-1">
            <div className="circle">1</div>
            <div className="step-content">
              <p>Sign Up and Personalize</p>
              <span>Create your account and tailor your dashboard to your needs.</span>
            </div>
          </div>
          <div className="step step-2">
            <div className="circle">2</div>
            <div className="step-content">
              <p>Access Market Data</p>
              <span>Get real-time market information and weather updates.</span>
            </div>
          </div>
          <div className="step step-3">
            <div className="circle">3</div>
            <div className="step-content">
              <p>Grow with Insights</p>
              <span>Utilize our resources and community to enhance your farming or trading operations.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='testimonials'>
    <div className='titletestimony'>
                <p>Testimony</p>
                <hr className='l' />
            </div>
    <div className="carousel">
      <button className="carousel-button" onClick={prevTestimonial}>&lt;</button>
      <div className="carousel-testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial ${index === currentIndex ? 'active' : 'inactive'}`}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
              <div className="testimonial-reviews">
                {'Reviews '}
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className={`star ${index < testimonial.rating ? 'filled' : ''}`}>&#9733;</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button" onClick={nextTestimonial}>&gt;</button>
    </div>
    </div>
            
        </div>
    </div>
  )
}

export default LandingPage