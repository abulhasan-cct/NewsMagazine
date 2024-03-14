import Side from "../components/Side";
import Header from "../components/Header";
import Breaknews from "../components/Breaknews";
import Footer from "../components/Footer";
import "../stylesheet/newscontent.css";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import instance from "../axiosConfig";
import instancemedia from "../axiosMedia";

function Newscontent() {
  const { newsId } = useParams();
  const [full, setFull] = useState([]);
  const [filteredUser, setFilteredUser] = useState(null);
  const [filteredWord, setFilter] = useState(null);
  const [isLoading, setLoading] = useState(true); // Add a loading state
  // Your base URL variable is instancemedia
  const baseUploadURL = process.env.REACT_APP_MEDIA_URL;
  // console.log(filteredUser);

  useEffect(() => {
    // Function to fetch data
    const fetchData = () => {
      instance
        .get("api/usermodulenews")
        .then((res) => {
          const fullData = res.data.data;

          // Step 1: Filter and set the selected news based on newsId
          const selectedNews = fullData.find((news) => news.newsId === newsId);
          setFilteredUser(selectedNews);

          // Step 2: Process data to create filteredDataWithFormattedNews
          const filteredDataWithFormattedNews = fullData.map((product) => {
            const { detailedNews, imagevideo } = product;
            const words = detailedNews.split(" ");
            const maxWords = 50;
            const baseUploadURL = instancemedia; // Your base URL variable is instancemedia
            // Create the image URL
            const firstImage =
              imagevideo.length > 0
                ? `${baseUploadURL}/newsImage/${imagevideo[0].newsImageVideo}`
                : null;

            // Format detailedNews with line spacing and limit words
            if (words.length > maxWords) {
              const slicedNews = words.slice(0, maxWords).join(" ");
              product.detailedNews = slicedNews + "..."; // Adding "..." to indicate the text is truncated
            } else {
              product.detailedNews = words.join(" "); // Rejoin the words with a space
            }

            return { ...product, firstImage };
          });

          // Step 3: Set state with the processed data
          setFull(fullData);
          setFilter(filteredDataWithFormattedNews);
          setLoading(false); // Set loading to false when data is loaded
        })
        .catch((error) => {
          console.log(error); // Handle error appropriately
          setLoading(false); // Set loading to false in case of an error
        });
    };

    // Display the loading state for 5 seconds
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Fetch data initially and then set up an interval to fetch data every 3 seconds
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 3000); // Fetch data every 3 seconds (3000 milliseconds)

    // Clean up the timeout and interval when the component unmounts
    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimeout);
    };
  }, [newsId]);

  const handleNext = () => {
    const currentIndex = full.findIndex(
      (news) => news.newsId === filteredUser.newsId
    );
    const nextIndex = currentIndex === full.length - 1 ? 0 : currentIndex + 1;
    setFilteredUser(full[nextIndex]);
    window.scrollTo(0, 0);
  };

  const handlePrev = () => {
    const currentIndex = full.findIndex(
      (news) => news.newsId === filteredUser.newsId
    );
    const prevIndex = currentIndex === 0 ? full.length - 1 : currentIndex - 1;
    setFilteredUser(full[prevIndex]);
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <>
        <div className="main-load">
          <div class="boxes">
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="site-main-container">
        <section className="top-post-area pt-10">
          <div className="container no-padding">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-nav-area">
                  <h1 className="text-white">News Details</h1>
                  <p className="text-white link-nav">
                    <a>Home</a>
                    <span className="lnr lnr-arrow-right"></span>
                    <a>Post Types</a>
                    <span className="lnr lnr-arrow-right"></span>
                    <a>Image Post</a>
                  </p>
                </div>
              </div>
              {/* BREAKNEWS START HERE */}
              <Breaknews />
            </div>
          </div>
        </section>

        <section className="latest-post-area pb-120">
          {filteredUser ? (
            <div className="container no-padding">
              <div className="row">
                <div className="col-lg-8 post-list">
                  <div className="single-post-wrap">
                    <div className="feature-img-thumb relative">
                      <div className="overlay overlay-bg"></div>
                      <img
                        className="img-fluid"
                        src={`${baseUploadURL}/newsImage/${filteredUser.imagevideo[0].newsImageVideo}`}
                        alt=""
                      />
                    </div>
                    <div className="content-wrap">
                      <ul className="tags mt-10">
                        <li>
                          <a>{filteredUser.categoryName}</a>
                        </li>
                      </ul>
                      <a>
                        <h3>{filteredUser.heading}</h3>
                      </a>
                      <ul className="meta pb-20">
                        <li>
                          <a>
                            <span className="lnr lnr-user"></span>Mark wiens
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="lnr lnr-calendar-full"></span>03
                            April, 2018
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="lnr lnr-bubble"></span>06
                          </a>
                        </li>
                      </ul>
                      <p></p>

                      <p>{filteredUser.detailedNews}</p>

                      <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </blockquote>
                      <div className="navigation-wrap justify-content-between d-flex">
                        {filteredUser.newsId !== full[0].newsId && (
                          <a className="prev" onClick={handlePrev}>
                            <span className="lnr lnr-arrow-left"></span>Prev
                            Post
                          </a>
                        )}
                        {filteredUser.newsId !==
                          full[full.length - 1].newsId && (
                          <a className="next" onClick={handleNext}>
                            Next Post
                            <span className="lnr lnr-arrow-right"></span>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="comment-form">
                      <h4>Post Comment</h4>
                      <form>
                        <div className="form-group form-inline">
                          <div className="form-group col-lg-6 col-md-12 name">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Enter Name"
                              onFocus={(e) => (e.target.placeholder = "")}
                              onBlur={(e) =>
                                (e.target.placeholder = "Enter Name")
                              }
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-12 email">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter email address"
                              onFocus={(e) => (e.target.placeholder = "")}
                              onBlur={(e) =>
                                (e.target.placeholder = "Enter email address")
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                            onFocus={(e) => (e.target.placeholder = "")}
                            onBlur={(e) => (e.target.placeholder = "Subject")}
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control mb-10"
                            rows="5"
                            name="message"
                            placeholder="Message"
                            onFocus={(e) => (e.target.placeholder = "")}
                            onBlur={(e) => (e.target.placeholder = "Message")}
                            required
                          ></textarea>
                        </div>
                        <a className="primary-btn text-uppercase">
                          Post Comment
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
                {/* SIDEBAR COMPONENT GO HERE */}
                <Side />
              </div>
            </div>
          ) : (
            <div>no data</div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Newscontent;
