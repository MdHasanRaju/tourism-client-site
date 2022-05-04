import React from "react";
import banner2 from "../../images/home2.jpg";
import banner3 from "../../images/home3.jpg";
import banner1 from "../../images/home1.jpg";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-light">
              <h3>Spare Natural Time</h3>
              <p>
                Nature can heal you when you are out of mind...Come and enjoy
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-light">
              <h3>Remove your anxiety With Traveling</h3>
              <p>
                Traveling makes your more confident and cheerful. Go along with
                it...
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-light">
              <h3>Most Eye-Catching sceneries are here.</h3>
              <p>
                Get connected with the natural beauty and eliminate all of
                Headache with the natural refreshment.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
