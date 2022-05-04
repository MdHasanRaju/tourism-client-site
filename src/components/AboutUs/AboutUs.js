import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
      <div className=''>
        <section className="text-center about">
          <h1>ABOUT US</h1>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span className="fa fa-group"></span>
                <h2>Our Commitment</h2>
                <p className="lead">
                  We ensure you that best travel and tour guide and services as well. Our teams are very sociable and co-operative.
                </p>
              </div>
              <div
                className="col-lg-4  about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span className="fa fa-info"></span>
                <h2>Target And Goal </h2>
                <p className="lead">
                  First of all, we are consistent with our Customers decisions. Our target is fixed like we always try to aid our customers properly.
                </p>
              </div>
              <div
                className="col-lg-4  about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span className="fa fa-file"></span>
                <h2>Our Vibes</h2>
                <p className="lead">
                  Customers are our main instruments . So we are obliged to help them at any cost providing proper guidelines and we ensure cheap cost.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default AboutUs;