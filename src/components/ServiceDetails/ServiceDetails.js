import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    const {user} = useAuth();

    useEffect(() => {
        fetch("https://stormy-harbor-04955.herokuapp.com/products/")
          .then((res) => res.json())
          .then((data) => {
            const matchedItem = data?.find((item) => item.key === serviceId);
            setService(matchedItem);
          });
    }, [])

    const productName = service?.name;
    const productPrice = service?.price;
    const status = 'pending';
    const email = user?.email;
    const userName = user?.displayName;
    const orderDate = new Date();

    const handleCheckIn = () => {
    const orderDetails = {
      productName,productPrice, email, orderDate, userName, status
    };

    fetch("https://stormy-harbor-04955.herokuapp.com/addUserOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((result) => {
          if (result) {
            toast.success("Order placed successfully",{autoClose:1500});
          }
      });
  }

    return (
      <div className="my-5">
        <div class="card mx-auto p-3 text-start" style={{ maxWidth: '25rem' }}>
          <img src={service?.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{service?.name}</h5>
            <p class="card-text ">Price: ${service?.price}</p>
            <p class="card-text">{service?.desc?.slice(0, 150)}</p>
              <button className="btn btn-clr text-white" onClick={handleCheckIn}>Place order</button>
              <ToastContainer/>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;