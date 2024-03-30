import React from "react";
import photo from './assets/bg3.jpg'
import {BsFillPlayCircleFill, BsFill0CircleFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about-section-container">
      
    <div className="about-background-image-container">
      <img src={photo}alt=""  style={{ borderRadius:"25%"}}/>
    </div>
    <div className="about-section-image-container">
      <img src="" alt="" />
    </div>
    <div className="about-section-text-container">
      <p className="primary-subheading">About</p>
      <h1 className="primary-heading">
      Make your shoping experience more exiting.
      </h1>
      <p className="primary-text">
      At SHOPIT, we believe that every click should lead to discovery, every purchase should be an experience, and every customer should feel like they've found their digital haven.
      </p>
     
      <div className="about-buttons-container">
        <Link to={"/aboutus"} style={{textDecoration:"none"}}>
        <button className="secondary-button">Learn More</button>
        </Link>
       
        <button className="watch-video-button">
          <BsFillPlayCircleFill /> Watch Video
        </button>
      </div>
    </div>
  </div>
   );
}

export default About;