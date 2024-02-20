import React from "react";
import "./product.scss";
import { newArrivalButton ,imgComponents} from "../../../Data";
const Product = () => {
  console.log(imgComponents);
  return (
    <div className="product-section">
      <div className="product-container">
        {/* tittle box  */}
        <div className="product-title-box">
          <h1 className="title">New Arrival</h1>
          <div className="product-button-box">
            {newArrivalButton.map((item) => (
              <button>{item}</button>
            ))}
          </div>
        </div>
        {/* product container  */}
        <div className="product-images-container">
          {/* 1 */}
          {
            imgComponents.map((item,id)=>{
              return(
                <div className="product-img">
                <div className="product-duble-img">
                  {/* default img  */}
                  <div className="single-img">
                    <img
                      src={`${item.img}`}
                      alt=""
                    />
                  </div>
                  {/* hover show img  */}
                  <div className="hover-img" id="hover-imgx">
                    <img
                      src={`${item.hoverimg}`}
                      alt=""
                    />
                    <div className="hover-text-show">
                      {/* <h1>Abul hasascn</h1> */}
                      <div className="button-div">
                        <button>
                          <i class="ri-eye-line"></i>
                        </button>
                        <button>
                          <i class="ri-shopping-cart-2-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* text box */}
                <div className="product-img-text">
                  <div className="starts">
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </div>
                  <h2 className="product-tittle">{item.title}</h2>
                  <span className="product-price">{item.price}</span>
                </div>
              </div>
              )
            })
          }
         
       
        </div>
      </div>
    </div>
  );
};

export default Product;
