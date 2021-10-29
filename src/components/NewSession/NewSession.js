import React from 'react';
import './NewSession.css';

const NewSession = () => {
    return (
      <div className="session">
        <div className="container text-center">
          <h2 className="text-warning mb-5">NEW ADVENTURES BEGIN IN</h2>
          <div className="d-flex justify-content-evenly align-items-center">
            <div>
              <h2 className="fs-1 text-light">00</h2>
              <p className="text-danger">Days</p>
            </div>
            <div>
              <h2 className="fs-1 text-light">00</h2>
              <p className="text-danger">Hours</p>
            </div>
            <div>
              <h2 className="fs-1 text-light">00</h2>
              <p className="text-danger">Minutes</p>
            </div>
            <div>
              <h2 className="fs-1 text-light">00</h2>
              <p className="text-danger">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NewSession;