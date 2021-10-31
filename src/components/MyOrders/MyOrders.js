import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyOrderDetails from "../MyOrderDetails/MyOrderDetails";

const MyOrders = () => {
    const [userDetails, setUserDetails] = useState([]);
    const { user} = useAuth();

     useEffect(() => {
       fetch(
         "https://stormy-harbor-04955.herokuapp.com/ownOrder?email=" +
           user.email
       )
         .then((res) => res.json())
         .then((data) => {
           setUserDetails(data);
           console.log("data", data);
         });
     }, []);


    return (
      <div className="container my-4">
        <div className="row text-center w-100">
          <div className="col-lg-2">
            <h5>Order</h5>
          </div>
          <div className="col-lg-2">
            <h5>Product package</h5>
          </div>
          <div className="col-lg-2">
            <h5>Customer</h5>
          </div>
          <div className="col-lg-2">
            <h5>Price</h5>
          </div>
          <div className="col-lg-2">
            <h5>date</h5>
          </div>
          <div className="col-lg-2">
            <h5>Options</h5>
          </div>
        </div>
        <hr className="mt-0 w-100 bg-dark text-danger" />
        {userDetails.map((ud) => (
          <MyOrderDetails 
          key={ud._id}
          myOrder={ud}></MyOrderDetails>
        ))}
      </div>
    );
};

export default MyOrders;