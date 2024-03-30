import React from 'react'
import backGround from '../assets/home-banner-background.png'
import {FiArrowRight} from 'react-icons/fi'
import bga from '../assets/bg6.jpg'
import Work from '../Work'
import Contact from '../Contact'
import Footer from '../Footer'
import About from '../About'
import { Link } from 'react-router-dom'
const BuyersHome = () => {
  return (
    <div className="home-container">
      
    <div className="home-banner-container">
      <div className="home-bannerImage-container">
       <img src={backGround} alt="" />
      </div>
      <div className="home-text-section">
        <h2 className="primary-heading-buyer">
        
        Welcome to SHOPIT <br/>
        </h2>
        <p className="primary-text">
        Where Your Perfect Purchase Awaits!
        your one-stop destination for all your shopping needs
        </p>
        <Link to={"/buyerview"} style={{textDecoration:"none"}} >
          <button className="secondary-button">
          View Items <FiArrowRight />{" "}
          </button>
        </Link>
        
      </div>
      <div className="home-image-section">
        <img src={bga} alt="" style={{borderRadius:"70px"}} />
      </div>
    </div>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
  </div>
  )
}

export default BuyersHome
