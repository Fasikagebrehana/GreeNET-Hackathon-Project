import React, { useState, useEffect } from "react";
import "./landing.css";
import vectorimg1 from "../assets/images/Vector.svg";
import vectorimg2 from "../assets/images/Vector2.svg";
import dashimg from "../assets/images/Demo.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUsers,
  faCloudSunRain,
  faMapMarkedAlt,
  faArrowRight,
  faArrowLeft,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Curve } from "../assets/images/curve.svg";
import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/testimonial.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const testimonials = [
  {
    image: img1,
    name: "Zeleke Ashenafi",
    quote:
      "Having access to up-to-date market trends has improved my trading strategies and profitability.",
    role: "Trader",
    rating: 4,
  },
  {
    image: img2,
    name: "Ayele Getachew",
    quote:
      "The real-time market data has enabled me to get better prices for my crops, significantly increasing my income.",
    role: "Farmer",
    rating: 4,
  },
  {
    image: img3,
    name: "Leya Tefera",
    quote:
      "The platform provides us with critical data that aids in policy making and ensuring food security for our region.",
    role: "Government Official",
    rating: 4,
  },
];

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="landingpage">
      <div className="hero-bg"></div>

      <div className="content" style={{ zIndex: 1 }}>
        <div className="svgimg2">
          <img src={vectorimg2} alt="leaf" />
        </div>
        <div className="headline">
          <h1>
            Empowering Farmers and Traders with Real-Time Market{" "}
            <span>Insights</span>
          </h1>
          <p>
            “Connecting you to the best market opportunities, weather forecasts,
            and community support.”
          </p>
        </div>
        <Link to="/sign-in" className="getstarted">
          Get Started
        </Link>
        <div className="svgimg">
          <img src={vectorimg1} alt="leaf" />
        </div>

        <div className="dashboardimg" id="dashboard">
          <img src={dashimg} alt="" />
        </div>

        <div className="landingcontainer">
          <div className="sec-title">Why Choose GreenNet?</div>
          <hr className="l" />
        </div>

        <div className="info-cards">
          <div className="info-card">
            <div className="icon market-data">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Real-Time Market Data</h3>
            <p>
              Stay updated with the latest market prices and trends for your
              crops.
            </p>
          </div>
          <div className="info-card">
            <div className="icon weather-forecasts">
              <FontAwesomeIcon icon={faCloudSunRain} />
            </div>
            <h3>Weather Forecasts</h3>
            <p>
              Plan your activities with accurate weather predictions and alerts.
            </p>
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
            <p>
              Join a network of users and experts for advice and collaboration.
            </p>
          </div>
        </div>

        <div className="how-it-works" id="howitworks">
          <h2>How It Works</h2>
          <hr className="l" />
          <div className="curve-container">
            <Curve className="curve" />
            <div className="steps">
              <div className="step step-1">
                <div className="circle">1</div>
                <div className="step-content">
                  <p>Sign Up and Personalize</p>
                  <span>
                    Create your account and tailor your dashboard to your needs.
                  </span>
                </div>
              </div>
              <div className="step step-2">
                <div className="circle">2</div>
                <div className="step-content">
                  <p>Access Market Data</p>
                  <span>
                    Get real-time market information and weather updates.
                  </span>
                </div>
              </div>
              <div className="step step-3">
                <div className="circle">3</div>
                <div className="step-content">
                  <p>Grow with Insights</p>
                  <span>
                    Utilize our resources and community to enhance your farming
                    or trading operations.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <div className="titletestimony">
            <div className="sec-title">Testimony</div>
            <hr className="l" />
          </div>
          <div className="carousel">
            <button className="carousel-button" onClick={prevTestimonial}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="carousel-testimonials">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial ${
                    index === currentIndex ? "active" : "inactive"
                  }`}
                >
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-quote">" {testimonial.quote} "</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <div className="testimonial-reviews">
                      {"Reviews "}
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className={`star ${
                            starIndex < testimonial.rating ? "filled" : ""
                          }`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-button" onClick={nextTestimonial}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="indicators">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
