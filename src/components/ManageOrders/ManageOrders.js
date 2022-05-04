import React, { useEffect, useState } from "react";
import ManageOrderDetails from "../ManageOrderDetails/ManageOrderDetails";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isStatus, setIsStatus] = useState(true);

  useEffect(async () => {
    await fetch("https://stormy-harbor-04955.herokuapp.com/my_order")
      .then( (res) => res?.json())
      .then( (data) => {
       try {
        if (data) {
          setIsStatus(true);
          setAllOrders(data);
          setIsStatus(false);
        }
       } catch (error) {
         console.log(error)
       }
      });
  }, []);

  return (
    <div className="container table-responsive my-5">
      <h2>Manage All Orders</h2>
      {!allOrders?.length ? (
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <table className="table table-bordered">
          <thead class="table-danger">
            <tr>
              <th scope="col">User</th>
              <th scope="col">Email</th>
              <th scope="col">Package Name</th>
              <th scope="col">Price</th>
              <th scope="col">Date</th>
              <th scope="col">Current Status</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <ManageOrderDetails
                isStatus={isStatus}
                setIsStatus={setIsStatus}
                allOrders={allOrders}
                setAllOrders={setAllOrders}
                key={order._id}
                manageOrders={order}
              ></ManageOrderDetails>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageOrders;
