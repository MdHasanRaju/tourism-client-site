import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyOrderDetails from "../MyOrderDetails/MyOrderDetails";

const MyOrders = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      "https://stormy-harbor-04955.herokuapp.com/ownOrder?email=" + user.email
    )
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-center mb-4">My Orders</h2>
      {!userDetails?.length ? (
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="container table-responsive">
          {/* <div className="row text-center w-100">
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
        <hr className="mt-0 w-100 bg-dark text-danger" /> */}
          {/* {userDetails.map((ud) => (
          <MyOrderDetails 
          key={ud._id}
          myOrder={ud}></MyOrderDetails>
        ))} */}

          <table className="table table-bordered" style={{ overflowX: "scroll" }}>
            <thead>
              <tr>
                <th className="fs4" scope="col">
                  User
                </th>
                <th className="fs4" scope="col">
                  Product package
                </th>
                <th className="fs4" scope="col">
                  Customer
                </th>
                <th className="fs4" scope="col">
                  Price
                </th>
                <th className="fs4" scope="col">
                  date
                </th>
                <th className="fs4" scope="col">
                  Status
                </th>
                <th className="fs4" scope="col">
                  Options
                </th>
              </tr>
            </thead>

            <tbody>
              {userDetails?.map((item) => (
                <MyOrderDetails
                  setUserDetails={setUserDetails}
                  userDetails={userDetails}
                  key={item._id}
                  myOrder={item}
                ></MyOrderDetails>

                // <tr key={item._id}>
                //   <td className="fs-5">{item.productName}</td>
                //   <td className="fs-5">{item.email}</td>
                //   <td className="fs-5">{item.productPrice}</td>
                //   <td className="fs-5">{item.orderDate.slice(0, 10)}</td>
                //   <td className="fs-5">button</td>
                // </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
