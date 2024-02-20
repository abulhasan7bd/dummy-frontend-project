import React, { useState } from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
const Menu = ({ setModal }) => {
    const [zeropx,setpx]=useState(0);
    const [zeropx2,setpx2]=useState(0);
  const handleClick = () => {
    setModal(false);
  };
  const submenOpen = () => {
    if(zeropx===0){
        setpx(100)
    }if(zeropx===100){
        setpx(0)
    }
  };
  const submenOpen2 = () => {
    if(zeropx2===0){
        setpx2(100)
    }if(zeropx2===100){
        setpx2(0)
    }
  };
  return (
    <div className="menubaroper">
      <div className="imges">
        <img src="https://solplant.netlify.app/images/logo2.png" alt="" />
      </div>
      <div className="lists">
        <ul>
          <li>
            <Link className="border-active" onClick={submenOpen}>
              Home <i class="ri-arrow-down-s-fill"></i>
            </Link>
            <div className="sub-menuopen" style={{height:`${zeropx}px`}}>
              <ul>
                <li>Home1</li>
                <li>Home2</li>
              </ul>
            </div>
          </li>
          <li>
            <Link>Product</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
          <li>
            <Link className="border-active"  onClick={submenOpen2}>
              Pages <i class="ri-arrow-down-s-fill"></i>
             
            </Link>
            <div className="sub-menuopen2" style={{height:`${zeropx2}px`}}>
              <ul>
                <li>Home1</li>
                <li>Home2</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <button className="removebutton" onClick={handleClick}> <i class="ri-close-fill"></i></button>
    </div>
  );
};

export default Menu;
