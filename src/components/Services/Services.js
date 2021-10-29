import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const[products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    })
    return (
        <div>
            <h2 className="text-center">Total Services: {products?.length}</h2>
            <div className="row g-3">
                {
                    products.map(product => <Service
                        key={product.key}
                        service={product}
                        ></Service> )
                }
            </div>
        </div>
    );
};

export default Services;