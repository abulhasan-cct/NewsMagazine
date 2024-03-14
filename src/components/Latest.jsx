import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import "../stylesheet/latest.css";
import instance from "../axiosConfig";
// import instancemedia from "../axiosMedia";
import Breaknews from "./Breaknews";

function Latest() {
  const [latnews, setLatnews] = useState([]);
  const [firstNews, setFirstNews] = useState(null);
  // console.log(firstNews);
  const [secondData, setSecondData] = useState(null);
  // console.log(secondData);
  const [thirdData, setThirdData] = useState(null);
  // console.log(thirdData);
  // Your base URL variable is instancemedia
  const baseUploadURL = process.env.REACT_APP_MEDIA_URL;
  // console.log(baseUploadURL);
  useEffect(() => {
    //  TRENDING #1 AXIO CALL
    instance
      .get("api/usermodulenews")
      .then((res) => res.data.data)
      .then((latnews) => {
        setLatnews(latnews);
        if (latnews.length > 0) {
          const firstNewsItem = {
            ...latnews[0],
            firstImage:
              latnews[0].imagevideo.length > 0
                ? `${baseUploadURL}/newsImage/${latnews[0].imagevideo[0].newsImageVideo}`
                : null,
          };
          return firstNewsItem;
        } else {
          return null;
        }
      })
      .then((firstNewsItem) => {
        setFirstNews(firstNewsItem);
        // console.log(firstNewsItem);
      })
      .catch((error) => {
        // Handle error
      });
    //  TRENDING #2 AXIO CALL
    instance
      .get("api/usermodulenews")
      .then((res) => res.data.data)
      .then((data) => {
        if (data.length > 1) {
          const secondNewsItem = {
            ...data[1],
            secondImage:
              data[1].imagevideo.length > 0
                ? `${baseUploadURL}/newsImage/${data[1].imagevideo[0].newsImageVideo}`
                : null,
          };
          setSecondData(secondNewsItem);
          console.log(secondData);
        } else {
          // Handle the case when the array has less than 2 items
          console.warn("The array has less than two items.");
        }
      })
      .catch((error) => {
        // Handle error here
        console.error("Error fetching data:", error);
      });
    //  TRENDING #3 AXIO CALL
    instance
      .get("api/usermodulenews")
      .then((res) => res.data.data)
      .then((data) => {
        if (data.length > 2) {
          const thirdNewsItem = {
            ...data[2],
            thirdImage:
              data[2].imagevideo.length > 0
                ? `${baseUploadURL}/newsImage/${data[2].imagevideo[0].newsImageVideo}`
                : null,
          };
          setThirdData(thirdNewsItem);
          console.log(thirdNewsItem);
        } else {
          // Handle the case when the array has less than 3 items
          console.warn("The array has less than three items.");
        }
      })
      .catch((error) => {
        // Handle error here
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div className="site-main-container">
        <section className="top-post-area pt-10">
          <div className="container no-padding">
            <div className="row small-gutters">
              {/* TRENDING #1 NEWS */}
              {firstNews ? (
                <div className="col-lg-8 top-post-left">
                  <Link to={`/newscontent/${firstNews.newsId}`}>
                    <div className="feature-image-thumb relative">
                      <div className="overlay overlay-bg"></div>

                      <img
                        className="img-fluid fixed-size-image"
                        src={firstNews.firstImage}
                        alt=""
                      />
                    </div>
                    <div className="top-post-details">
                      <ul className="tags">
                        <li>
                          <a>#TRENDING 1</a>
                        </li>
                      </ul>
                      <a>
                        <h3>{firstNews.heading}</h3>
                      </a>
                      <ul className="meta">
                        <li>
                          <a>
                            <span className="lnr lnr-user"></span>
                            {firstNews.author} author
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="lnr lnr-calendar-full"></span>
                            {firstNews.newsDate}
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="lnr lnr-bubble"></span>
                            {firstNews.comments}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </div>
              ) : null}
              {/* END TRENDING ONE NEWS */}
              <div className="col-lg-4 top-post-right">
                {secondData ? (
                  <Link to={`/newscontent/${secondData.newsId}`}>
                    <div className="single-top-post">
                      <div className="feature-image-thumb relative">
                        <div className="overlay overlay-bg"></div>
                        <img
                          className="img-fluid fixed-size-image2"
                          src={secondData.secondImage}
                          alt=""
                        />
                      </div>
                      <div className="top-post-details">
                        <ul className="tags">
                          <li>
                            <a>#TRENDING 2</a>
                          </li>
                        </ul>
                        <a>
                          <h4>
                            {/* Checking heading length */}
                            {secondData.heading.length > 10
                              ? secondData.heading.substring(0, 30) + "..." // Adding "..." if heading is longer than 10 words
                              : secondData.heading}
                          </h4>
                        </a>
                        <ul className="meta">
                          <li>
                            <a>
                              <span className="lnr lnr-user"></span>
                              {secondData.author}
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className="lnr lnr-calendar-full"></span>
                              {secondData.newsDate}
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className="lnr lnr-bubble"></span>
                              {secondData.comments}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                ) : null}
                {/* END TRENDING TWO NEWS */}

                {/* TRENDING THREE NEWS */}
                {thirdData ? (
                  <Link to={`/newscontent/${secondData.newsId}`}>
                    <div className="single-top-post mt-10">
                      <div className="feature-image-thumb relative">
                        <div className="overlay overlay-bg"></div>
                        <img
                          className="img-fluid fixed-size-image2"
                          src={thirdData.thirdImage}
                          alt=""
                        />
                      </div>
                      <div className="top-post-details">
                        <ul className="tags">
                          <li>
                            <a>#TRENDING 3</a>
                          </li>
                        </ul>
                        <a>
                          <h4>
                            {" "}
                            {/* Checking heading length */}
                            {thirdData.heading.length > 10
                              ? thirdData.heading.substring(0, 30) + "..." // Adding "..." if heading is longer than 10 words
                              : thirdData.heading}
                          </h4>
                        </a>
                        <ul className="meta">
                          <li>
                            <a>
                              <span className="lnr lnr-user"></span>
                              {thirdData.author}
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className="lnr lnr-calendar-full"></span>
                              {thirdData.newsDate}
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className="lnr lnr-bubble"></span>
                              {thirdData.comments}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                ) : null}
              </div>
              {/*END TRENDING THREE NEWS */}
              <Breaknews />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Latest;
