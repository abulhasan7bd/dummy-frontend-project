import React, { useState } from "react";
import { imgComponents } from "../../../Data";
import "./best-product.scss";
const Bestproduct = () => {
  const [slidingcount, setSlidingcount] = useState(1);
  // left side
  const handleLeftside = () => {
    setSlidingcount(slidingcount-1)
  };
  // right side
  const habdlerightside = () => {
    setSlidingcount(slidingcount+1)
  };
  const sliding = {

    // transform: "translateX(-290px)"
    transform: `translateX(-${slidingcount * 297}px)`
  };
  return (
    <div className="best-product">
      <div className="best-product-container">
        <div className="best-procut-content">
          <div className="best-product-title">
            <h1>Best Product</h1>
          </div>
          <div className="best-product-slide-container">
            <div className="slide-button">
              <button onClick={handleLeftside}><i class="ri-arrow-left-s-line"></i></button>
              <button onClick={habdlerightside}><i class="ri-arrow-right-s-line"></i></button>
            </div>
            <div className="product-images-container">
              {/* 1 */}
              {imgComponents.map((item, id) => {
                return (
                  <div className="product-img" style={sliding}>
                    <div className="product-duble-img">
                      {/* default img  */}
                      <div className="single-img">
                        <img src={`${item.img}`} alt="" />
                      </div>
                      {/* hover show img  */}
                      <div className="hover-img" id="hover-imgx">
                        <img src={`${item.hoverimg}`} alt="" />
                      </div>
                    </div>
                    {/* text box */}
                    <div className="product-img-text">
                      <h2 className="product-tittle">title</h2>
                      <span className="product-price">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
              
                      </span>
                      <p>$18</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestproduct;
