import React from 'react';

const Features = () => {
    return (
      <div className="text-center my-5">
        <div className="container py-4">
          <h2 className="mb-5">WHY <span className='text-primary-clr'>CHOOSE</span> US?</h2>
          <div className="row g-4">
            <div className="col-lg-3">
              <i className="fas fa-search-location fs-1 mb-4" style={{color:'rgba(251, 7, 133, 0.829)'}}></i>
              <h4>Diverse Destinations</h4>
              <p>
                Diverse Destination is a young and energetic destination
                management company and receptive tour operator. Here we are.
              </p>
            </div>
            <div className="col-lg-3">
              <i className="fas fa-umbrella-beach fs-1 mb-4" style={{color:'rgba(251, 7, 133, 0.829)'}}></i>
              <h4>Value for Money</h4>
              <p>
                The optimum combination of whole-life cost and quality or
                fitness for purpose to meet the user's requirement.
              </p>
            </div>
            <div className="col-lg-3">
              <i className="fas fa-place-of-worship fs-1 mb-4" style={{color:'rgba(251, 7, 133, 0.829)'}}></i>
              <h4>Beautiful Places</h4>
              <p>
                Available eye-catching scenery places. Come along with us and
                enjoy the natural beauty with savings.
              </p>
            </div>
            <div className="col-lg-3">
              <i className="far fa-bookmark fs-1 mb-4" style={{color:'rgba(251, 7, 133, 0.829)'}}></i>
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