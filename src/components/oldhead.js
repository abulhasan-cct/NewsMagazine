import React, { useEffect, useState } from "react";
import "../stylesheet/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const handleToggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  const handleSubMenuToggle = (e) => {
    e.currentTarget.classList.toggle("lnr-chevron-up");
    e.currentTarget.classList.toggle("lnr-chevron-down");
    e.currentTarget.nextSibling.classList.toggle("menu-item-active");
    e.currentTarget.nextSibling.nextSibling.slideToggle();
  };

  const handleOverlayClick = () => {
    setMobileNavActive(false);
  };

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 header-top-left no-padding">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 header-top-right no-padding">
              <ul>
                <li>
                  <a href="tel:+440 012 3654 896">
                    <span className="lnr lnr-phone-handset"></span>
                    <span>+440 012 3654 896</span>
                  </a>
                </li>
                <li>
                  <a href="https://preview.colorlib.com/cdn-cgi/l/email-protection#87f4f2f7f7e8f5f3c7e4e8ebe8f5ebeee5a9e4e8ea">
                    <span className="lnr lnr-envelope"></span>
                    <span>
                      <span
                        className="__cf_email__"
                        data-cfemail="57242227273825231734383b38253b3e357934383a"
                      >
                        [email&#160;protected]
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-md-4 col-sm-12 logo-left no-padding">
              <Link to="/">
                <a href="index-2.html">
                  <img className="img-fluid" src="img/logo.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 logo-right no-padding ads-banner">
              <img className="img-fluid" src="img/banner-ad.jpg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`main-menu container ${
          isMobileNavActive ? "mobile-nav-active" : ""
        }`}
      >
        <div className="row align-items-center justify-content-between">
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="index-2.html">Home</a>
              </li>
              <li>
                <a href="archive.html">Archive</a>
              </li>
              <li>
                <a href="category.html">Category</a>
              </li>
              <li className="menu-has-children">
                <a href="#">Post Types</a>
                <ul>
                  <li>
                    <a href="standard-post.html">Standard Post</a>
                  </li>
                  <li>
                    <a href="image-post.html">Image Post</a>
                  </li>
                  <li>
                    <a href="gallery-post.html">Gallery Post</a>
                  </li>
                  <li>
                    <a href="video-post.html">Video Post</a>
                  </li>
                  <li>
                    <a href="audio-post.html">Audio Post</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu Toggle */}
          {/* Toggle Button for Mobile Navigation */}
          <button type="button" id="mobile-nav-toggle">
            <i
              className={`lnr ${isMobileNavActive ? "lnr-cross" : "lnr-menu"}`}
              onClick={handleToggleMobileNav}
            ></i>
            <span className="menu-title">Menu</span>
          </button>
          {/* Overlay to close Mobile Navigation */}
          {isMobileNavActive && (
            <nav id="nav-menu-container">
              <ul className="main-menu">
                <li className="menu-active">
                  <a href="index-2.html">Home</a>
                </li>
                <li>
                  <a href="archive.html">Archive</a>
                </li>
                <li>
                  <a href="category.html">Category</a>
                </li>

                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          )}
          {/* Mobile Menu */}
          {/* Mobile Navigation Menu */}
          <div
            className={`main-menu ${
              isMobileNavActive ? "mobile-nav-active" : ""
            }`}
          >
            {/* Assuming you have this mobile version of the menu */}

            {/* ... */}
          </div>
          <div className="navbar-right">
            <form className="Search">
              <input
                type="text"
                className="form-control Search-box"
                name="Search-box"
                id="Search-box"
                placeholder="Search"
              />
              <label htmlFor="Search-box" className="Search-box-label">
                <span className="lnr lnr-magnifier"></span>
              </label>
              <span className="Search-close">
                <span className="lnr lnr-cross"></span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
