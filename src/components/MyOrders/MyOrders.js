import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyOrderDetails from "../MyOrderDetails/MyOrderDetails";

const MyOrders = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      "https://tourism-server-site-rw3r.onrender.com/ownOrder?email=" + user.email
    )
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data);
      });
  }, [user?.email]);

  return (
    <div className="my-5">
      <h2 className="text-center mb-4">My Orders</h2>
      {!userDetails?.length ? (
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="container table-responsive">
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
              {userDetails?.map((item, index) => (
                <MyOrderDetails
                  setUserDetails={setUserDetails}
                  userDetails={userDetails}
                  key={index}
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
