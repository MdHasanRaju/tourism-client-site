import React from "react";
import { Link } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
  const { key, img, name, price, desc } = service;

  return (
    <div className="col-lg-4 ">
      {/* <div className="card h-100 p-4">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text">${price}</p>
          </div>
          <Link to={`/serviceDetails/${key}`}>
            <button className="btn-primary ms-3 border-0 rounded-2 px-2">See Details</button>
          </Link>
        </div> */}

      <div className=" p-4 m-2  border">
        <div className="border rounded">
          <img src={img} alt="q" width="100%" height="250" />
        </div>
        <div className="mx-3 mt-3">
          <div className="d-flex justify-content-between">
            <h5 className="">{name}</h5>
            <h5  className="price-clr">${price}</h5>
          </div>
          <p style={{ textAlign: "justify" }} className="my-2 text-secondary">
            {desc.slice(0, 100)}...
          </p>
          <hr />
          <div className="d-flex mt-4">
            <div className="">
              <span className=""><i className="fa-solid fa-clock-rotate-left"></i>7 Days </span>
            </div>
            <div className=" ms-3">
              <span className=""><i className="fa-regular fa-user"></i>12+</span>
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
