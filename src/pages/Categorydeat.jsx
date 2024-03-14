import React, { useEffect, useState } from "react";
import Side from "../components/Side";
import Header from "../components/Header";
import Breaknews from "../components/Breaknews";
import Footer from "../components/Footer";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import instance, { frontEndDomain, backEndDomain } from "../axiosConfig";

export default function Categorydeat() {
  const [catnews, setCatnews] = useState([]);
  const [filter, setFilter] = useState([]);
  const pathParams = useParams();
  const baseURL =
    "http://admin.blossomdigitalmedia.com/api/usermodulecategorynews/" +
    pathParams.catid;
  // Your base URL variable is instancemedia
  const baseUploadURL = process.env.REACT_APP_MEDIA_URL;
  useEffect(() => {
    instance
      .get(`api/usermodulecategorynews/${pathParams.catid}`)
      .then((res) => res.data.data)
      .then((catnews) => {
        setCatnews(catnews);
        console.log(catnews);
        const filteredProducts = catnews.map((product) => ({
          ...product,
          firstImage:
            product.imagevideo.length > 0
              ? `${baseUploadURL}/newsImage/${product.imagevideo[0].newsImageVideo}`
              : null,
        }));
        return filteredProducts;
      })
      .then((filteredProducts) => {
        setFilter(filteredProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [baseURL]);
  return (
    <>
      <Header />
      <div className="site-main-container">
        <section className="top-post-area pt-10">
          <div className="container no-padding">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-nav-area">
                  <h1 className="text-white">Posts Category</h1>
                  <p className="text-white link-nav">
                    <a>Home </a>
                    <span className="lnr lnr-arrow-right"></span>
                    <a>Posts Category</a>
                  </p>
                </div>
              </div>
              {/* BREAKNEWS START HERE */}
              <Breaknews />
            </div>
          </div>
        </section>

        <section className="latest-post-area pb-120">
          <div className="container no-padding">
            <div className="row">
              <div className="col-lg-8 post-list">
                <div className="latest-post-wrap">
                  <h4 className="cat-title">Category News</h4>

                  {/* First Post */}
                  {filter.length === 0 ? (
                    <div className="text-center">
                      <div className="col-12">
                        <h2>Currently No Data In This Category</h2>
                      </div>
                    </div>
                  ) : (
                    <div className="div">
                      {filter.map((cat) => (
                        <div className="single-latest-post row align-items-center">
                          <div className="col-lg-5 post-left">
                            <div className="feature-img relative">
                              <div className="overlay overlay-bg"></div>
                              {cat.firstImage && (
                                <img
                                  className="img-fluid"
                                  src={cat.firstImage}
                                  alt=""
                                />
                              )}
                            </div>
                            <ul className="tags">
                              <li>
                                <a>{cat.categoryName}</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-7 post-right">
                            <Link to={`/newscontent/${cat.newsId}`}>
                              <a>
                                <h4>{cat.heading}</h4>
                              </a>
                            </Link>
                            <ul className="meta">
                              <li>
                                <a>
                                  <span className="lnr lnr-user"></span>Mark
                                  wiens
                                </a>
                              </li>
                              <li>
                                <a>
                                  <span className="lnr lnr-calendar-full"></span>
                                  03 April, 2018
                                </a>
                              </li>
                              <li>
                                <a>
                                  <span className="lnr lnr-bubble"></span>06
                                  Comments
                                </a>
                              </li>
                            </ul>
                            <p className="excert">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor
                              incididunt.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Additional posts go here */}

                  <div className="load-more">
                    <a className="primary-btn">Load More Posts</a>
                  </div>
                </div>
              </div>
              <Side />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
