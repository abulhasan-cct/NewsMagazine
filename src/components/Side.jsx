import React from "react";

function Side() {
  return (
    <>
      <div className="col-lg-4">
        <div className="sidebars-area">
          {/* Editor’s Pick */}
          <div className="single-sidebar-widget editors-pick-widget">
            <h6 className="title">Editor’s Pick</h6>
            <div className="editors-pick-post">
              {/* Editor's Pick Post */}
              <div className="feature-img-wrap relative">
                <div className="feature-img relative">
                  <div className="overlay overlay-bg"></div>
                  <img
                    className="img-fluid"
                    src="https://placehold.co/600x400/000000/FFF"
                    alt=""
                  />
                </div>
                <ul className="tags">
                  <li>
                    <a>Travel</a>
                  </li>
                </ul>
              </div>
              <div className="details">
                <a>
                  <h4 className="mt-20">
                    A Discount Toner Cartridge Is Better Than Ever.
                  </h4>
                </a>
                <ul className="meta">
                  <li>
                    <a h>
                      <span className="lnr lnr-user"></span>Mark wiens
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="lnr lnr-calendar-full"></span>03 April,
                      2018
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="lnr lnr-bubble"></span>06
                    </a>
                  </li>
                </ul>
                <p className="excert">
                  Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed
                  do eiusmod tempor incididunt ed do eius.
                </p>
              </div>

              {/* Other Posts */}
              <div className="post-lists">
                <div className="single-post d-flex flex-row">
                  <div className="thumb">
                    <img src="img/e2.jpg" alt="" />
                  </div>
                  <div className="detail">
                    <a>
                      <h6>Help Finding Information Online is so easy</h6>
                    </a>
                    <ul className="meta">
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
                  </div>
                </div>
                {/* More posts... */}
              </div>
            </div>
          </div>

          {/* Ads Widget */}
          <div className="single-sidebar-widget ads-widget">
            <img className="img-fluid" src="img/sidebar-ads.jpg" alt="" />
          </div>

          {/* Newsletter Widget */}
          <div className="single-sidebar-widget newsletter-widget">
            <h6 className="title">Newsletter</h6>
            <p>
              Here, I focus on a range of items and features that we use in life
              without giving them a second thought.
            </p>
            <div className="form-group d-flex flex-row">
              <div className="col-autos">
                <div className="input-group">
                  <input
                    className="form-control"
                    placeholder="Email Address"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Email Address")}
                    type="text"
                  />
                </div>
              </div>
              <a className="bbtns">Subscribe</a>
            </div>
            <p>You can unsubscribe us at any time</p>
          </div>

          {/* Most Popular Widget */}
          <div className="single-sidebar-widget most-popular-widget">
            <h6 className="title">Most Popular</h6>
            <div className="single-list flex-row d-flex">
              <div className="thumb">
                <img src="img/m1.jpg" alt="" />
              </div>
              <div className="details">
                <a>
                  <h6>Help Finding Information Online is so easy</h6>
                </a>
                <ul className="meta">
                  <li>
                    <a>
                      <span className="lnr lnr-calendar-full"></span>03 April,
                      2018
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="lnr lnr-bubble"></span>06
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* More most popular posts... */}
          </div>

          {/* Social Network Widget */}
          <div className="single-sidebar-widget social-network-widget">
            <h6 className="title">Social Networks</h6>
            <ul className="social-list">
              <li className="d-flex justify-content-between align-items-center fb">
                <div className="icons d-flex flex-row align-items-center">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  <p>983 Likes</p>
                </div>
                <a>Like our page</a>
              </li>
              {/* More social networks... */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Side;
