import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://stormy-harbor-04955.herokuapp.com/products")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
          });
    })
    
    return (
      <div className='my-5'>
        {products?.length === 0 ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-center ">OUR <span className='text-primary-clr '>SERVICES</span></h2>
            <div className="row g-3">
              {products.map((product) => (
                <Service key={product.key} service={product}></Service>
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default Services;