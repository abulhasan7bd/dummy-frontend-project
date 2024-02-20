import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-top-content">
           <div className="footer-top-text">
           <div className="foote1">
              <div>
              <i class="ri-text-spacing"></i>
              </div>
              <div>
                <h2>Free Shipping Order</h2>
                <span>On orders over $100</span>
              </div>
            </div>
            <div  className="foote1">
              <div>
              <i class="ri-text-spacing"></i>
              </div>
              <div>
                <h2>Special Gift Card</h2>
                <span>Special Gift Card</span>
              </div>
            </div>

            <div  className="foote1">
              <div>
              <i class="ri-text-spacing"></i>
              </div>
              <div>
                <h2>Return & Exchanger</h2>
                <span>Free return within 3 days</span>
              </div>
            </div>
            <div  className="foote1">
              <div>
              <i class="ri-text-spacing"></i>
              </div>
              <div>
                <h2>Support 24 / 7</h2>
                <span>Customer Support</span>
              </div>
            </div>
           </div>
          </div>
          <div className="footer-footer">
            <div className="main-footer">
              <div>
                <div className="footer-logo">
                  <img
                    src="https://solplant.netlify.app/images/footer/logo.png"
                    alt="Footer Logo"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed nulla eu dui suscipit ultricies. Mauris vestibulum
                  volutpat nisl vel cursus. Cras finibus nec mauris tincidunt
                  condimentum.
                </p>
                <div className="footer-social-icons">
                  <i class="ri-facebook-fill"></i>
                  <i class="ri-facebook-fill"></i>
                  <i class="ri-facebook-fill"></i>
                  <i class="ri-facebook-fill"></i>
                </div>
              </div>
              <div>
                <h1>Link</h1>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Blog</li>
                  <li>Products</li>
                </ul>
              </div>
              <div>
                <h1>Get In Touch</h1>
                <ul>
                  <li>
                    <i class="fa-solid fa-phone"></i>0928372927
                  </li>
                  <li>
                    <i class="fa-regular fa-envelope"></i> abulhasan18@gmai.com
                  </li>
                  <li>
                    <i class="ri-map-pin-line"></i>29 Washington Pl, New York,
                    NY 10003, USA
                  </li>
                </ul>
              </div>
              <div>
                <h1>Other Links</h1>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom-hr">
              <div className="title">
                <span>Copyright & Design by SolPlant-2023</span>
              </div>
              <div className="paymentcards">
                <img
                  src="https://solplant.netlify.app/images/footer/1.png"
                  alt=""
                />
                <img
                  src="https://solplant.netlify.app/images/footer/2.png"
                  alt=""
                />
                <img
                  src="https://solplant.netlify.app/images/footer/3.png"
                  alt=""
                />
                <img
                  src="https://solplant.netlify.app/images/footer/4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
