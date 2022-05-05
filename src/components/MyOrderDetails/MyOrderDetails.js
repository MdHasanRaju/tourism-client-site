import React from "react";
import { toast, ToastContainer } from "react-toastify";

const MyOrderDetails = (props) => {
  const {userDetails, setUserDetails} = props;
  const {
    productName,
    productPrice,
    email,
    userName,
    orderDate,
    _id,
    status,
  } = props.myOrder;

  const handleDelete = (id) => {
    fetch(`https://stormy-harbor-04955.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("data deleted successfully!",{autoClose:1500});
            const newData = userDetails.filter(ud => ud._id !== id);
            setUserDetails(newData)
          } else {
            toast.error('Opp! something went wrong',{autoClose:1500})
          }
        
      });
  };

  return (
    <>
      <tr>
        <td className="fs-5">{userName ? userName:'not found'}</td>
        <td className="fs-5">{productName}</td>
        <td className="fs-5">{email}</td>
        <td className="fs-5">${productPrice}</td>
        <td className="fs-5">{orderDate.slice(0, 10)}</td>
        <td className="fs-5">{status?status:'null'}</td>
        <td className="fs-5">
          <button title="Delete" className="btn btn-link text-danger" onClick={() => handleDelete(_id)}><i className="fa-solid fa-trash"></i></button>
          <ToastContainer/>
        </td>
      </tr>
    </>
  );
};

export default MyOrderDetails;
