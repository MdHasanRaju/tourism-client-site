import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    const {user} = useAuth();
    console.log(user);

    useEffect(() => {
        fetch("https://stormy-harbor-04955.herokuapp.com/products/")
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            const matchedItem = data?.find((item) => item.key === serviceId);
            setService(matchedItem);
            console.log(service);
          });
    }, [])

    const productName = service.name;
    const productPrice = service.price;
    const email = user?.email;
    const userName = user?.displayName;
    const orderDate = new Date();

    const handleCheckIn = () => {
    const orderDetails = {
      productName,productPrice, email, orderDate, userName
    };

    fetch("https://stormy-harbor-04955.herokuapp.com/addUserOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          alert("data has been uploaded");
        }
      });
  }

    return (
      <div className="my-5">
        <div class="card mx-auto p-3" style={{ width: "18rem" }}>
          <img src={service.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{service.name}</h5>
            <p class="card-text">Price: ${service.price}</p>
            <p class="card-text">{service?.desc?.slice(0, 150)}</p>
              <button className="btn btn-primary" onClick={handleCheckIn}>Place order</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;