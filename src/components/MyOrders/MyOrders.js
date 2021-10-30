import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyOrderDetails from "../MyOrderDetails/MyOrderDetails";

const MyOrders = () => {
    const [userDetails, setUserDetails] = useState([]);
    const { user } = useAuth();

     useEffect(() => {
       fetch("http://localhost:5000/ownOrder?email=" + user.email)
         .then((res) => res.json())
         .then((data) => {
           setUserDetails(data);

           console.log("data", data);
         });
     }, []);

    return (
        <div>
            <h2>This is My Orders</h2>
            {
                userDetails.map(ud => <MyOrderDetails
                    myOrder={ud}
                    ></MyOrderDetails>)
            }
        </div>
    );
};

export default MyOrders;