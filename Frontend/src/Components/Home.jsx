import React from 'react'
import backGround from './assets/home-banner-background.png'
import {FiArrowRight} from 'react-icons/fi'
import bga from './assets/bg6.jpg'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'
import About from './About'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home-container">
      
    <div className="home-banner-container">
      <div className="home-bannerImage-container">
       <img src={backGround} alt="" />
      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">
        
           Promote And Sell Your Goods Here
        </h1>
        <p className="primary-text">
        Welcome to SHOPIT, Where Your Perfect Purchase Awaits!
       
        </p>
        <Link to={"/create"} style={{textDecoration:"none"}} >
          <button className="secondary-button">
          Add Your Item <FiArrowRight />{" "}
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

export default Home
