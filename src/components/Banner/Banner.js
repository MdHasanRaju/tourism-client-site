import React from 'react';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';


const Banner = () => {
    return (
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
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
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={banner3} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block text-dark">
                <h3>Spare Natural Time</h3>
                <p>
                  Nature can heal you when you are out of mind...Come and enjoy
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={banner1} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block text-dark">
                <h3>Remove your anxiety With Travelling</h3>
                <p>
                  Travelling makes your more confident and cheerful. Go along
                  with it...
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={banner2} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block text-dark">
                <h3>Most Eye-Catching sceneries are here.</h3>
                <p>
                  Get connected with the natural beauty and eliminate all of
                  Headache with the natural refreshment.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
};

export default Banner;