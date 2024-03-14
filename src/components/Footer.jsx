import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 single-footer-widget">
            <h4>Top Products</h4>
            <ul>
              <li>
                <a>Managed Website</a>
              </li>
              <li>
                <a>Manage Reputation</a>
              </li>
              <li>
                <a>Power Tools</a>
              </li>
              <li>
                <a>Marketing Service</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a>Jobs</a>
              </li>
              <li>
                <a>Brand Assets</a>
              </li>
              <li>
                <a>Investor Relations</a>
              </li>
              <li>
                <a>Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Features</h4>
            <ul>
              <li>
                <a>Jobs</a>
              </li>
              <li>
                <a>Brand Assets</a>
              </li>
              <li>
                <a>Investor Relations</a>
              </li>
              <li>
                <a>Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Resources</h4>
            <ul>
              <li>
                <a>Guides</a>
              </li>
              <li>
                <a>Research</a>
              </li>
              <li>
                <a>Experts</a>
              </li>
              <li>
                <a>Agencies</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 single-footer-widget">
            <h4>Instragram Feed</h4>
            <ul className="instafeed d-flex flex-wrap">
              <li>
                <img src="img/i1.jpg" alt="" />
              </li>
              <li>
                <img src="img/i2.jpg" alt="" />
              </li>
              <li>
                <img src="img/i3.jpg" alt="" />
              </li>
              <li>
                <img src="img/i4.jpg" alt="" />
              </li>
              <li>
                <img src="img/i5.jpg" alt="" />
              </li>
              <li>
                <img src="img/i6.jpg" alt="" />
              </li>
              <li>
                <img src="img/i7.jpg" alt="" />
              </li>
              <li>
                <img src="img/i8.jpg" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom row align-items-center">
          <p className="footer-text m-0 col-lg-8 col-md-12">
            Copyright &copy;
            <script
              data-cfasync="false"
              src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
            ></script>
            <script>{`document.write(new Date().getFullYear());`}</script>
            All rights reserved | &nbsp;{" "}
            <i className="fa fa-heart-o" aria-hidden="true"></i> by
            <a>&nbsp;Blossomdigitalmedia</a>
          </p>
          <div className="col-lg-4 col-md-12 footer-social">
            <a>
              <i className="fa fa-facebook"></i>
            </a>
            <a>
              <i className="fa fa-twitter"></i>
            </a>
            <a>
              <i className="fa fa-dribbble"></i>
            </a>
            <a>
              <i className="fa fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
