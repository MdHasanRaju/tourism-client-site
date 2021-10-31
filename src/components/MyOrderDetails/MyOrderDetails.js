import React, { useState } from 'react';

const MyOrderDetails = (props) => {
    const {
      productName,
      productPrice,
      desc,
      email,
      userName,
      orderDate,
      _id,
      status,
    } = props.myOrder;

    console.log(status)

    const handleDelete = id => {
      fetch(`https://stormy-harbor-04955.herokuapp.com/deleteService/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const proceed = window.confirm(
            "Hey, are you sure you want ot delete?"
          );
          if (proceed) {
            if (data.deletedCount > 0) {
              alert("data deleted successfully");
              console.log(data);
              window.location.reload();
            } else {
            }
          }
        });
    }

    return (
      <div>
        <div className="row text-center w-100">
          <div className="col-lg-2">
            <p>{_id}</p>
          </div>
          <div className="col-lg-2">
            <p>{productName}</p>
          </div>
          <div className="col-lg-2">
            <p>{email}</p>
          </div>
          <div className="col-lg-2">
            <p>${productPrice}</p>
          </div>
          <div className="col-lg-2">
            <p>{status}</p>
          </div>
          <div className="col-lg-2">
            <button onClick={() => handleDelete(_id)}>Delete</button>
          </div>
        </div>
      </div>
    );
};

export default MyOrderDetails;