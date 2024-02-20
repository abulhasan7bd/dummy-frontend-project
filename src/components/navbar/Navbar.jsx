import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Menu from "./menu/Menu";
const Navbar = () => {
  const [menuopen, menuClose] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (windowSize < 1200) {
      menuClose(true);
    } else {
      menuClose(false);
      setModal(false);
    }
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  const modalOpen = () => {
    setModal(true);
  };
  return (
    <nav>
      {modal ? <Menu setModal={setModal} /> : null}
      <div className="navbar">
        {/* nav Logo  */}
        <div className="nav__logo">
          <img
            src="https://solplant.netlify.app/images/logo.png"
            alt="Navbar logo"
          />
        </div>
        {/* nav list  */}
        <div className="nav__list">
          {/* Hyperlinks */}

          {!menuopen ? (
            <ul className="nav__links">
              <li className="li">
                <Link>
                  home <i class="ri-arrow-down-s-line"></i>
                  <div className="submenu">
                    <li>
                      <Link>Home1</Link>
                    </li>
                    <li>
                      <Link>Home2</Link>
                    </li>
                  </div>
                </Link>
              </li>
              <li>
                <Link>about us</Link>
              </li>
              <li>
                <Link>
                  page <i class="ri-arrow-down-s-line"></i>
                  <div className="submenu">
                    <li>
                      <Link>Home1</Link>
                    </li>
                    <li>
                      <Link>Home2</Link>
                    </li>
                    <li>
                      <Link>Home2</Link>
                    </li>
                    <li>
                      <Link>Home2</Link>
                    </li>
                    <li>
                      <Link>Home2</Link>
                    </li>
                    <li>
                      <Link>Home2</Link>
                    </li>
                    <li>
                      <Link>Home2</Link>
                    </li>
                    <li>
                      <Link>Home2</Link>
                    </li>
                  </div>
                </Link>
              </li>
              <li>
                <Link>product</Link>
              </li>
              <li>
                <Link>blog</Link>
              </li>
              <li>
                <Link>contact us</Link>
              </li>
            </ul>
          ) : null}
          {/* social links  */}
          <div className="social__medialinks">
            <div className="search">
              <i class="ri-search-line"></i>
            </div>
            <div className="shopping">
              <i class="ri-shopping-cart-line"></i>
              <span>3</span>
            </div>
            <div className="user">
              <i class="ri-user-3-line"></i>
            </div>
            {menuopen ? (
              <div className="menubar" onClick={modalOpen}>
                <i class="ri-menu-line"></i>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
