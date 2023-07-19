import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Service from '../Service/Service';


const Services = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
      let unmounted = false;
        fetch("https://tourism-server-site-rw3r.onrender.com/products")
          .then((res) => res.json())
          .then((data) => {
            try {
              if (data && !unmounted) {
                setProducts(data);
              }
            } catch (error) {
              if (!unmounted) {
                toast.error(error)
              }
            }
            return () => {unmounted = true};
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
            <h2 className="text-center ">OUR <span className='primary-color '>SERVICES</span></h2>
            <div className="row g-3">
              {products.map((product, index) => (
                <Service key={index} service={product}></Service>
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default Services;