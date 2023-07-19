import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageOrderDetails = (props) => {
  const {  setIsStatus } = props;
  const {
    email,
    userEmail,
    productName,
    productPrice,
    _id,
    orderDate,
    userName,
    status,
  } = props.manageOrders;

  const handleStatus = (value, id) => {
    console.log(value, id);
    fetch(`https://tourism-server-site-rw3r.onrender.com/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ value }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setIsStatus(true)
          toast.success("Status updated successfully!", {autoClose:1400});
        }
        setIsStatus(false)
        // const updatedData = allOrders.filter(order => order._id !== id)
        // setAllOrders(updatedData);
      })
      .catch((error) => {
        toast.error('Something went wrong!',{autoClose:1400})
        setIsStatus(false);
      });
  };

  return (
    <>
      <tr>
        <td>{userName ? userName : "not found"}</td>
        <td>
          {email}
          {userEmail}
        </td>
        <td>{productName}</td>
        <td>${productPrice}</td>
        <td>{orderDate?.slice(0, 10)}</td>
        <td>{status}</td>
        <td>
          {/* {status !== "pending" && (
            <button className="btn btn-dark ms-1"  onClick={() => handleStatus("pending", _id)}>
              Pending
            </button>
          )} */}

          <button
            className="btn button-color text-white m-1"
            onClick={() => handleStatus("approved", _id)}
          >
            Approved
          </button>

          <button
            className="btn button-color text-white "
            onClick={() => handleStatus("done", _id)}
          >
            Done
          </button>
          <ToastContainer />
        </td>
      </tr>
    </>
  );
};

export default ManageOrderDetails;
