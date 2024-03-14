import React, { useState, useEffect, useRef } from "react";
import "../stylesheet/header.css";
import { Outlet, Link } from "react-router-dom";
import instance from "../axiosConfig";

const Header1 = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  // console.log(isMobileNavActive);
  // API FETCH
  const [menu, setmenu] = useState([]);
  // console.log(menu);
  const [logo, setlogo] = useState("");
  console.log(logo);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive((prevState) => !prevState);
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };

  const handleMobileNavToggleClick = () => {
    toggleMobileNav();
  };

  // SMOOTH SCROLL
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const target = event.currentTarget.hash;

      if (target) {
        event.preventDefault();

        const targetElement = document.querySelector(target);
        const headerHeight =
          document.getElementById("header")?.offsetHeight || 0;
        const topSpace = headerHeight;

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - topSpace,
            behavior: "smooth",
          });
        }
      }
    };

    const menuLinks = document.querySelectorAll(
      ".nav-menu a, #mobile-nav a, .scrollto"
    );
    menuLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);
  // SMOOTH HANDLE
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        const targetElement = document.querySelector(window.location.hash);
        const headerHeight =
          document.getElementById("header")?.offsetHeight || 0;
        const topSpace = headerHeight;

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - topSpace,
            behavior: "smooth",
          });
        }
      }, 0);
    }
  }, []);

  useEffect(() => {
    instance
      .get("api/usermodulecategory")
      .then((res) => {
        setmenu(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    instance
      .get("api/usermodulelogo")
      .then((res) => {
        setlogo(res.data.data.companyLogo);
        console.log(logo);
      })
      .catch((err) => {
        console.log(err);
      });

    const stickFunction = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", stickFunction);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", stickFunction);
    };
  }, []);

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 header-top-left no-padding">
              <ul>
                <li>
                  <a>
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 header-top-right no-padding">
              <ul>
                <li>
                  <a>
                    <span className="lnr lnr-phone-handset"></span>
                    <span>+123 456 7890</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="lnr lnr-envelope"></span>
                    <span>
                      <span className="__cf_email__"></span>
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
                <a>
                  <img
                    className="img-fluid"
                    id="logo-main"
                    src={`https://admin.blossomdigitalmedia.com/uploads/logo/${logo}`}
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 logo-right no-padding ads-banner">
              <img
                className="img-fluid"
                src="https://placehold.co/500x100/gray/white"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* NAVBAR WITH MOBILE TOGGLE SECTION */}

      <div
        className={`container main-menu ${
          isMobileNavActive ? "mobile-nav-active" : ""
        } ${isSticky ? "sticky" : ""}`}
        id="main-menu"
      >
        <div className="row align-items-center justify-content-between">
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              {/* Add your menu items here */}
              {menu.map((menus) => (
                <li className="menu-active" key={menus.categoryId}>
                  <Link to={`/categorylist/${menus.categoryId}`}>
                    <a>{menus.categoryName}</a>
                  </Link>
                </li>
              ))}
              {/* Add more menu items here */}
            </ul>
          </nav>
          <div className="navbar-right">{/* Add your search form here */}</div>
        </div>
        <button
          type="button"
          id="mobile-nav-toggle"
          onClick={handleMobileNavToggleClick}
        >
          <i
            className={`lnr ${isMobileNavActive ? "lnr-cross" : "lnr-menu"}`}
          ></i>
          <span className="menu-title">Menu</span>
        </button>
        {isMobileNavActive && (
          <div id="mobile-body-overly" onClick={closeMobileNav}>
            <nav id="mobile-nav">
              <ul className="" style={{ touchAction: "pan-y" }} id="">
                {menu.map((menus) => (
                  <li className="menu-active" key={menus.categoryId}>
                    <Link to={`/categorylist/${menus.categoryId}`}>
                      <a>{menus.categoryName}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header1;
