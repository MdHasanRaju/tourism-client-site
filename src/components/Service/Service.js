import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {key, img, name, price, desc} = service;

    
    return (
      <div class="col-lg-4 ">
        <div class="card h-100 p-4">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{desc}</p>
          </div>
          <Link>
            <button className="btn-primary ms-3 border-0 rounded-2 px-2">See Details</button>
          </Link>
        </div>
      </div>
    );
};

export default Service;