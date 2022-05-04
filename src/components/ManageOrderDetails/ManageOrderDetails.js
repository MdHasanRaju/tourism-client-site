import React from "react";

const ManageOrderDetails = (props) => {
  const {allOrders,setAllOrders} = props;
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
    fetch(`https://stormy-harbor-04955.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ value }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("your data has been recorded");
        }
        // const updatedData = allOrders.filter(order => order._id !== id)
        // setAllOrders(updatedData);
        console.log(data);
        console.log(status);
      })
      .catch((error) => {
        console.log(error);
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
        <td>
          {status !== "pending" && (
            <button className="btn btn-dark ms-1"  onClick={() => handleStatus("pending", _id)}>
              Pending
            </button>
          )}
          {status !== "ongoing" && (
            <button  className="btn btn-dark ms-1" onClick={() => handleStatus("ongoing", _id)}>
              Ongoing
            </button>
          )}
          {status !== "done" && (
            <button  className="btn btn-dark ms-1"  onClick={() => handleStatus("done", _id)}>Done</button>
          )}
        </td>
      </tr>
    </>
  );
};

export default ManageOrderDetails;
