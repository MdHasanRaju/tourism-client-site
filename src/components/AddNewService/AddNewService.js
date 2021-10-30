import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';


const AddNewService = () => {
    const {user} = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.email = user?.email;
        console.log(data);
        fetch("http://localhost:5000/addNewService", {
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })

    };
    return (
      <div>
        <h1 className="mt-5 text-center text-warning">Please Add A New Service</h1>
        <div className="login-box w-25 m-auto mt-5">
          <div className="event-box border p-3 d-flex justify-content-center align-items-center">
            <div className="login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("title")}
                  placeholder="title"
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("description")}
                  placeholder="Desc"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />
                <br />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image url"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="btn btn-success ms-2 w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddNewService;