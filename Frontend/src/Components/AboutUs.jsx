import React from 'react';
import photo from './assets/bg3.jpg';
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={photo} alt="Background" style={{ borderRadius: "25%" }} />
      </div>
      <div className="about-section-image-container">
        <img src=""  />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Make your shopping experience more exciting.
        </h1>
        <p className="primary-text">
          At SHOPIT, we believe that every click should lead to discovery, every purchase should be an experience, and every customer should feel like they've found their digital haven.
        </p>
        <p className="secondary-heading">Our Mission</p>
        <p className="secondary-text">
          Our mission is to redefine online shopping by providing a seamless and enjoyable experience for our customers. We aim to offer a curated selection of products, personalized recommendations, and exceptional customer service to create lasting relationships with our shoppers.
        </p>
        <p className="secondary-heading">Our Values</p>
        <ul className="value-list">
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Community</li>
        </ul>
        <Link to="/contact" className="btn" style={{textDecoration:"none"}}><button className="secondary-button">Contact Us </button></Link>
      </div>
    </div>
  );
}

export default AboutUs;
