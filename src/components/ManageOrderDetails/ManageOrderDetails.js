import React from 'react';

const ManageOrderDetails = (props) => {
    const {email,userEmail, productName,productPrice, _id, orderDate, userName, status} = props.manageOrders;

    console.log(status)

    const handleStatus = (value, id) => {
        console.log(value, id)
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
          console.log("update your data");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <>
        <tr>
          <td>
            {userName}
            {!userName && "user"}
          </td>
          <td>
            {email}
            {userEmail}
          </td>
          <td>{productName}</td>
          <td>{productPrice}</td>
          <td>{orderDate}</td>
          <td>
            {status !== "pending" && (
              <button onClick={() => handleStatus("pending", _id)}>
                Pending
              </button>
            )}
            {status !== "ongoing" && (
              <button onClick={() => handleStatus("ongoing", _id)}>
                Ongoing
              </button>
            )}
            {status !== "done" && (
              <button onClick={() => handleStatus("done", _id)}>done</button>
            )}
          </td>
        </tr>
      </>
    );
};

export default ManageOrderDetails;