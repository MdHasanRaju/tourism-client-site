import React, { useState } from 'react';

const MyOrderDetails = (props) => {
    const {productName, productPrice, desc, email, userName, orderDate, _id} =props.myOrder;
    console.log(props);

    const [control, setConrol] = useState(false);

    const handleDelete = id => {
      fetch(`http://localhost:5000/deleteService/${id}`, {
        method:"DELETE",
        headers:{
          'content-type':'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        const proceed = window.confirm('Hey, are you sure you want ot delete?')
        if (proceed) {
          if (data.deletedCount > 0) {
            alert('data deleted successfully');
            console.log(data);
            setConrol(!control);
          }
          else {
             setConrol(false);
          }
        }
      })

    }

    return (
      <div>
        <div className="row text-center w-100">
          <div className="col-lg-2">
            <p>{_id}</p>
          </div>
          <div className="col-lg-2">
            <p>{productName}</p>
          </div>
          <div className="col-lg-2">
            <p>{email}</p>
          </div>
          <div className="col-lg-2">
            <p>${productPrice}</p>
          </div>
          <div className="col-lg-2">
            <p>{orderDate}</p>
          </div>
          <div className="col-lg-2">
            <button onClick={() => handleDelete(_id)}>Delete</button>
          </div>
        </div>
        
      </div>
    );
};

export default MyOrderDetails;