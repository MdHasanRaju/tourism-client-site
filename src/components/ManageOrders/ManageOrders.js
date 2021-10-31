import React, { useEffect, useState } from 'react';
import ManageOrderDetails from '../ManageOrderDetails/ManageOrderDetails';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch("https://stormy-harbor-04955.herokuapp.com/my_order")
          .then((res) => res.json())
          .then((data) => {
            setAllOrders(data);
          });
    }, [])
    
    return (
      <div className="container">
        <h2>This Manage Orders</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Email</th>
              <th scope="col">Package Name</th>
              <th scope="col">Price</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <ManageOrderDetails
                key={order._id}
                manageOrders={order}
              ></ManageOrderDetails>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ManageOrders;