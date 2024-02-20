/* eslint-disable no-const-assign */
import React from "react";
import "./home.scss";
const imagesArray = [
  "https://solplant.netlify.app/images/home/hero/hero-2.png",
  "https://solplant.netlify.app/images/home/hero/hero-1.png",
  "https://solplant.netlify.app/images/home/hero/hero-3.png",
];
const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="slider-images">
          <img src={imagesArray[2]} alt="" className="active" />
        </div>
        <div className="home-content">
          <h3>Summer Collection 2023</h3>
          <h1>Plants Gonna Make People Happy</h1>
          <div className="home-button">
            <button>Shop Now</button>
            <button>Explore Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
