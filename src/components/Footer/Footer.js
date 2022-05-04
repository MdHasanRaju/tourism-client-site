import React from "react";
import "./Footer.css";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-5 pb-2 text">
      <ScrollToTop smooth top="500" color="purple" />
      {/* <div className="container">
          <div className="row ">
            <div className="col-lg-3">
              <div>
                <h5>CONTACT</h5>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
              <i className="fab fa-facebook me-4 fs-4"></i>
              <i className="fab fa-instagram me-4 fs-4"></i>
              <i className="fab fa-linkedin-in me-4 fs-4"></i>
              <i className="fab fa-twitter me-2 fs-4"></i>
            </div>
            <div className="col-lg-3">
              <h5>INFORMATION</h5>
              <p>
                <i className="fas fa-arrow-right"></i> Travel News
              </p>
              <hr className="text-dark" />
              <p>
                <i className="fas fa-arrow-right"></i> About Us
              </p>
              <hr className="text-dark" />
              <p>
                <i className="fas fa-arrow-right"></i> Privacy Policy
              </p>
              <hr className="text-dark" />
              <p>
                <i className="fas fa-arrow-right"></i> Savings
              </p>
              <hr className="text-dark" />
              <p>
                <i className="fas fa-arrow-right"></i> Contact Us
              </p>
            </div>
            <div className="col-lg-3">
              <h5>OUR MENU</h5>
              <p>
                <i className="fas fa-arrow-right"></i> Home
              </p>
              <hr className="text-dark" />
              <p>
                <i className="fas fa-arrow-right"></i> Terms
              </p>
              <hr className="text-dark" />
              <p>
                <i className="fas fa-arrow-right"></i> Offer
              </p>
              <hr className="text-dark" />
              <p>
                <i className="fas fa-arrow-right"></i> Guides
              </p>
              <hr className="text-dark" />
              <p>
                <i className="fas fa-arrow-right"></i> Career
              </p>
            </div>
            <div className="col-lg-3">
              <h5>SUBSCRIBE</h5>
              <p>
                <input className="w-100" type="text" placeholder="Email" />
              </p>
              <button className="outline-secondary w-100">Subscribe</button>
              <p className="mt-4">
                Get The Latest Updates via email. Any time you may unsubscribe
              </p>
            </div>
          </div>
          <div>
            <hr className="text-secondary" />
            <div className="d-flex justify-content-between">
              <p className="fw-bolder">© Website 2021 | All Rights Reserved</p>
              <div>
                <small className="ms-2">Privacy</small>
                <small className="ms-2">Terms</small>
                <small className="ms-2">Sitemap</small>
                <small className="ms-2">Help</small>
              </div>
            </div>
          </div>
        </div> */}

      <footer
        class="text-center text-lg-start text-white"
        style={{backgroundColor: "#89216B"}}
      >
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <Link to='#' class="text-white">Bags</Link>
                </p>
                <p>
                  <Link to='#' class="text-white">Luggages</Link>
                </p>
                <p>
                  <Link to='#' class="text-white">Cars</Link>
                </p>
                <p>
                  <Link to='#' class="text-white">Bikes</Link>
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <Link to="#" class="text-white">Your Account</Link>
                </p>
                <p>
                  <Link to="#" class="text-white">Become an Affiliate</Link>
                </p>
                <p>
                  <Link to="#" class="text-white">Shipping Rates</Link>
                </p>
                <p>
                  <Link to="#" class="text-white">Help</Link>
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p>
                  <i class="fas fa-home mr-3"></i> Dhaka, 1361, Bangladesh
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> info@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </section>

          <hr class="my-3" />

          <section class="p-3 pt-0">
            <div class="row d-flex align-items-center">
              <div class="col-md-7 col-lg-8 text-center text-md-start">
                <div class="p-3">
                  © 2022 Copyright: 
                  <Link  class="text-white ms-1" to="#">
                     TravelWorld..
                  </Link>
                </div>
              </div>

              <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <Link to="#"
                  class="btn btn-outline-light text-info btn-floating m-1"
                  role="button"
                >
                  <i class="fab fa-facebook-f"></i>
                </Link>

                <Link to="#"
                  class="btn btn-outline-light text-info btn-floating m-1"
                  role="button"
                >
                  <i class="fab fa-twitter"></i>
                </Link>

                <Link to="#"
                  class="btn btn-outline-light text-info btn-floating m-1"
                  role="button"
                >
                  <i class="fab fa-google"></i>
                </Link>

                <Link to="#"
                  class="btn btn-outline-light text-info btn-floating m-1"
                  role="button"
                >
                  <i class="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
