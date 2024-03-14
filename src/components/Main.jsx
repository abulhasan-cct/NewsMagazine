import Side from "../components/Side";
import Bannerad from "../components/Bannerad";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import "../stylesheet/main.css";
import instance, { frontEndDomain, backEndDomain } from "../axiosConfig";

function Main() {
  const [latnews, setLatnews] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    instance
      .get("api/usermodulenews")
      .then((res) => res.data.data)
      .then((latnews) => {
        // Skip the first three elements of the array
        const startIndex = 3;
        const filteredData = latnews.slice(startIndex).map((product) => ({
          ...product,
          firstImage:
            product.imagevideo.length > 0
              ? `https://admin.blossomdigitalmedia.com/uploads/newsImage/${product.imagevideo[0].newsImageVideo}`
              : null,
        }));

        setFilter(filteredData);
        console.log(filteredData);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);
  return (
    <>
      <section className="latest-post-area pb-120">
        <div className="container no-padding">
          <div className="row">
            <div className="col-lg-8 post-list">
              <div className="latest-post-wrap">
                <h4 className="cat-title">Latest News</h4>
                {filter.map((news) => (
                  <div className="single-latest-post row align-items-center">
                    <div className="col-lg-5 post-left">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg"></div>
                        {news.firstImage && (
                          <img
                            className="img-fluid"
                            id="fixed-size-image"
                            src={news.firstImage}
                            alt=""
                          />
                        )}
                      </div>
                      <ul className="tags">
                        <li id="cat-fix">{news.categoryName}</li>
                      </ul>
                    </div>
                    <div className="col-lg-7 post-right">
                      <Link to={`/newscontent/${news.newsId}`}>
                        <h4>
                          {news.heading.length > 30
                            ? news.heading.slice(0, 30) + "..."
                            : news.heading}
                        </h4>
                      </Link>
                      <ul className="meta">
                        <li>
                          <span className="lnr lnr-user"></span>Mark wiens
                        </li>
                        <li>
                          <span className="lnr lnr-calendar-full"></span>
                          {news.newsDate}
                        </li>
                        <li>
                          <span className="lnr lnr-bubble"></span>06 Comments
                        </li>
                      </ul>
                      <p className="excert">
                        {news.detailedNews.length > 60
                          ? news.detailedNews.slice(0, 60) + "..."
                          : news.detailedNews}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Add more single-latest-post blocks with different data */}
              </div>

              <Bannerad />
              {/* POPULAR SECTION */}
              <div className="popular-post-wrap">
                <h4 className="title">Popular Posts</h4>
                <div className="feature-post relative">
                  <div className="feature-img relative">
                    <div className="overlay overlay-bg"></div>
                    <img className="img-fluid" src="img/f1.jpg" alt="" />
                  </div>
                  <div className="details">
                    <ul className="tags">
                      <li>
                        <a href="#">Food Habit</a>
                      </li>
                    </ul>
                    <h3>A Discount Toner Cartridge Is Better Than Ever.</h3>
                    <ul className="meta">
                      <li>
                        <span className="lnr lnr-user"></span>Mark wiens
                      </li>
                      <li>
                        <span className="lnr lnr-calendar-full"></span>03 April,
                        2018
                      </li>
                      <li>
                        <span className="lnr lnr-bubble"></span>06 Comments
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Add more popular posts using similar structure */}
                <div className="row mt-20 medium-gutters">
                  <div className="col-lg-6 single-popular-post">
                    <div className="feature-img-wrap relative">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg"></div>
                        <img className="img-fluid" src="img/f2.jpg" alt="" />
                      </div>
                      <ul className="tags">
                        <li>
                          <a href="#">Travel</a>
                        </li>
                      </ul>
                    </div>
                    <div className="details">
                      <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
                      <ul className="meta">
                        <li>
                          <span className="lnr lnr-user"></span>Mark wiens
                        </li>
                        <li>
                          <span className="lnr lnr-calendar-full"></span>03
                          April, 2018
                        </li>
                        <li>
                          <span className="lnr lnr-bubble"></span>06
                        </li>
                      </ul>
                      <p className="excert">
                        Lorem ipsum dolor sit amet, consecteturadip isicing
                        elit, sed do eiusmod tempor incididunt ed do eius.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 single-popular-post">
                    <div className="feature-img-wrap relative">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg"></div>
                        <img className="img-fluid" src="img/f3.jpg" alt="" />
                      </div>
                      <ul className="tags">
                        <li>
                          <a href="#">Travel</a>
                        </li>
                      </ul>
                    </div>
                    <div className="details">
                      <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
                      <ul className="meta">
                        <li>
                          <span className="lnr lnr-user"></span>Mark wiens
                        </li>
                        <li>
                          <span className="lnr lnr-calendar-full"></span>03
                          April, 2018
                        </li>
                        <li>
                          <span className="lnr lnr-bubble"></span>06
                        </li>
                      </ul>
                      <p className="excert">
                        Lorem ipsum dolor sit amet, consecteturadip isicing
                        elit, sed do eiusmod tempor incididunt ed do eius.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* POPULAR SECTION END */}

              {/* RELAVANT STORIES */}
              <div className="relavent-story-post-wrap mt-30">
                <h4 className="title">Relavent Stories</h4>
                <div className="relavent-story-list-wrap">
                  <div className="single-relavent-post row align-items-center">
                    <div className="col-lg-5 post-left">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg"></div>
                        <img className="img-fluid" src="img/r1.jpg" alt="" />
                      </div>
                      <ul className="tags">
                        <li>
                          <a href="#">Lifestyle</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-7 post-right">
                      <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
                      <ul className="meta">
                        <li>
                          <span className="lnr lnr-user"></span>Mark wiens
                        </li>
                        <li>
                          <span className="lnr lnr-calendar-full"></span>03
                          April, 2018
                        </li>
                        <li>
                          <span className="lnr lnr-bubble"></span>06 Comments
                        </li>
                      </ul>
                      <p className="excert">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </div>
                  {/* Add more relevant stories using similar structure */}
                </div>
              </div>
            </div>
            {/* RELAVANT STORIES END */}
            {/* SIDE BAR SECTION */}
            <Side />
            {/* SIDE BAR SECTION END */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
