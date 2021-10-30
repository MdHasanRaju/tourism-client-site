import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    console.log(serviceId)

    useEffect(() => {
        fetch("http://localhost:5000/products/")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const matchedItem = data?.find(item => item.key === serviceId);
            setService(matchedItem);
            console.log(service) 
        })
    }, [])

    return (
      <div>
        <div class="card mx-auto" style={{ width: "18rem" }}>
          <img src={service.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{service.name}</h5>
            <p class="card-text">Price: {service.price}</p>
            <p class="card-text">{service?.desc?.slice(0, 150)}</p>
            <Link class="btn btn-primary">
              Place Order
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;