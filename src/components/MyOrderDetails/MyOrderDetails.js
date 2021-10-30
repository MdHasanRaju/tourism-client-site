import React from 'react';

const MyOrderDetails = (props) => {
    const {productName, productPrice, desc, email, userName, date} =props.myOrder;

    console.log(props);
    return (
      <div>
        <div className="container row">
          <div className="col-lg-6">
            <p>
              {userName}, Email: {email}{" "}
            </p>
          </div>
          <div className="col-lg-6">
            <h5>
              Added Item: {productName}, ${productPrice}
            </h5>
          </div>
        </div>
      </div>


    );
};

export default MyOrderDetails;