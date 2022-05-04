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
      <div className="container table-responsive my-5">
        <h2>Manage All Orders</h2>
        <table className="table table-bordered">
          <thead class="table-danger">
            <tr>
              <th scope="col">User</th>
              <th scope="col">Email</th>
              <th scope="col">Package Name</th>
              <th scope="col">Price</th>
              <th scope="col">Date</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <ManageOrderDetails
              allOrders={allOrders}
              setAllOrders={setAllOrders}
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