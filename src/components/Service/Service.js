import React from "react";
import { Link } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
  const { key, img, name, price, desc } = service;

  return (
    <div class="col-lg-4 ">
      {/* <div class="card h-100 p-4">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{desc}</p>
            <p class="card-text">${price}</p>
          </div>
          <Link to={`/serviceDetails/${key}`}>
            <button className="btn-primary ms-3 border-0 rounded-2 px-2">See Details</button>
          </Link>
        </div> */}

      <div class=" p-4 m-2  border">
        <div class="border rounded">
          <img src={img} alt="q" width="100%" height="250" />
        </div>
        <div class="mx-3 mt-3">
          <div class="d-flex justify-content-between">
            <h5 class="">{name}</h5>
            <h5  class="price-clr">${price}</h5>
          </div>
          <p style={{ textAlign: "justify" }} class="my-2 text-secondary">
            {desc.slice(0, 100)}...
          </p>
          <hr />
          <div class="d-flex mt-4">
            <div class="">
              <span class=""><i class="fa-solid fa-clock-rotate-left"></i>7 Days </span>
            </div>
            <div class=" ms-3">
              <span class=""><i class="fa-regular fa-user"></i>12+</span>
            </div>
            <div className="ms-auto">
              <Link to={`/serviceDetails/${key}`}>
                <button className="btn btn-clr text-white border-0 rounded-2 px-2">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
