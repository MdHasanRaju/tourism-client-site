import React from 'react';

const Features = () => {
    return (
      <div className="text-center my-5">
        <div className="container py-4">
          <h2 className="mb-5">WHY CHOOSE US?</h2>
          <div className="row g-4">
            <div className="col-lg-3">
              <i class="fas fa-search-location fs-1"></i>
              <h4>Diverse Destinations</h4>
              <p>
                Diverse Destination is a young and energetic destination
                management company and receptive tour operator. Here we are.
              </p>
            </div>
            <div className="col-lg-3">
              <i class="fas fa-umbrella-beach fs-1"></i>
              <h4>Value for Money</h4>
              <p>
                The optimum combination of whole-life cost and quality or
                fitness for purpose to meet the user's requirement.
              </p>
            </div>
            <div className="col-lg-3">
              <i class="fas fa-place-of-worship fs-1"></i>
              <h4>Beautiful Places</h4>
              <p>
                Available eye-catching sceneric places. Come along with us and
                enjoy the natural beauty with savings.
              </p>
            </div>
            <div className="col-lg-3">
              <i class="far fa-bookmark fs-1"></i>
              <h4>Passionate Travel</h4>
              <p>
                Welcome To Travel Passionate. Here only those Traveler join who is badly passionate about travelling. He/She must enjoy it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Features;