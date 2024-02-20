import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-grid-container">
          <div className="grid-colum-1 span1">
            {/* img/text  */}
            <div className="home-text">
              <h3>Get 50% Off</h3>
              <h1>Best Selling Shop Now</h1>
              <button>Shop Now</button>
            </div>
            <div className="home-img">
              <img
                src="https://solplant.netlify.app/images/home/selling/best-selling.png"
                alt=""
              />
            </div>
          </div>
          <div className="grid-colum-1">
            {/* img/text  */}
            <div className="home-text home-text1">
              <h1>Big Saving</h1>
              <h3>Flat 50% Of</h3>
            </div>
            <div className="home-img">
              <img
                src="https://solplant.netlify.app/images/home/selling/image.png"
                alt=""
              />
            </div>
          </div>
          <div className="grid-colum-1">
            {/* img/text  */}
            <div className="home-text home-text-4">
              <h3>Summer's Pots</h3>
              {/* <h3>Get 50% Off</h3>
              <h1>Best Selling Shop Now</h1>
              <button>Shop Now</button> */}
            </div>
            <div className="home-img">
              <img
                src="https://solplant.netlify.app/images/home/selling/summer-pots.png"
                alt=""
              />
            </div>
          </div>
          <div className="grid-colum-1">
            {/* img/text  */}
            <div className="home-text home-text-5">
              <h3>Quality Product</h3>
            </div>
            <div className="home-img">
              <img
                src="https://solplant.netlify.app/images/home/selling/quality-products.png"
                alt=""
              />
            </div>
          </div>
          <div className="grid-colum-1">
            {/* img/text  */}
            <div className="home-text home-text1">
              <h3>Green Plants</h3>
              <h1>Flat 50% Off</h1>
            </div>
            <div className="home-img">
              <img
                src="https://solplant.netlify.app/images/home/selling/green-plants.png"
                alt=""
              />
            </div>
          </div>
          <div className="grid-colum-1 span1 ">
            {/* img/text  */}
            <div className="home-text span6">
              <h3>Popular</h3>
              <h1>Collection of Cactus </h1>
              <button>Shop Now</button>
            </div>
            <div className="home-img">
              <img
                src="https://solplant.netlify.app/images/home/selling/popular.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
