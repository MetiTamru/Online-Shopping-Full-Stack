import React from "react";
import Promotion from "./assets/promotion.png";
import Sell from "./assets/sell.jpg";
import Track from "./assets/track.png";

const Work = () => {
  const workInfoData = [
    {
      image: Promotion,
      title: "Promotion",
      text: "We offer robust promotion features designed to help you reach your target customers.",
    },
    {
      image: Sell,
      title: "Sell",
      text: "We Offer discounts and deals to attract buyers and drive sales. ",
    },
    {
      image: Track,
      title: "Track Your products",
      text: "Keeping tabs on your inventory is effortless with SHOPIT.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        At SHOPIT, we've streamlined the shopping experience to make it as effortless and enjoyable as possible. Whether you're a seasoned online shopper or new to the world of e-commerce, our intuitive platform is designed to guide you every step of the way. Here's how it works:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;