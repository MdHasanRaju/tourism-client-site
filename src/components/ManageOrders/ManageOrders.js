import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ManageOrderDetails from "../ManageOrderDetails/ManageOrderDetails";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isStatus, setIsStatus] = useState(true);

  useEffect( () => {
    let unmounted = false;
    setIsStatus(true);
    fetch("https://stormy-harbor-04955.herokuapp.com/my_order")
      .then((res) => res?.json())
      .then((data) => {
        try {
          if (data && !unmounted ) {
            setIsStatus(true);
            setAllOrders(data);
            setIsStatus(false);
          }
        } catch (error) {
          if (!unmounted) {
            toast.error(error);
            console.log(error);
            setIsStatus(false)
          }
        }
      });
      return () =>  { unmounted = true };
  }, [isStatus]);

  return (
    <div className="my-5">
      <h2 className="text-center ">Manage All Orders</h2>
      <div className="container table-responsive mt-2">
        {!allOrders?.length ? (
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <table className="table table-bordered ">
            <thead className="table-danger">
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
              {allOrders?.map((order) => (
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
    </div>
  );
};

export default ManageOrders;
