import React, { useState } from "react";

const MyOrderDetails = (props) => {
  const {userDetails, setUserDetails} = props;
  const {
    productName,
    productPrice,
    index,
    desc,
    email,
    userName,
    orderDate,
    _id,
    status,
  } = props.myOrder;

  console.log(status);

  const handleDelete = (id) => {
    fetch(`https://stormy-harbor-04955.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const proceed = window.confirm("Hey, are you sure you want ot delete?");
        if (proceed) {
          if (data.deletedCount > 0) {
            alert("data deleted successfully");
            const newData = userDetails.filter(ud => ud._id !== id);
            setUserDetails(newData)
          } else {
          }
        }
      });
  };

  return (
    <>
      {/* <div className="row text-center w-100">
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
            <p>{orderDate}</p>
          </div>
          <div className="col-lg-2">
            <button onClick={() => handleDelete(_id)}>Delete</button>
          </div>
        </div> */}
      <tr>
        
        <td className="fs-5">{productName}</td>
        <td className="fs-5">{email}</td>
        <td className="fs-5">${productPrice}</td>
        <td className="fs-5">{orderDate.slice(0, 10)}</td>
        <td className="fs-5">{status?status:'null'}</td>
        <td className="fs-5">
          <button title="Delete" className="btn btn-link text-danger" onClick={() => handleDelete(_id)}><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    </>
  );
};

export default MyOrderDetails;
