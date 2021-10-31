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
      <div>
        {products?.length === 0 ? (
          <div className="d-flex justify-content-center">
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-center">Total Services: {products?.length}</h2>
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