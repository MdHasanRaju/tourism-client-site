import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const AddNewService = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let unmounted = false;
    data.email = user?.email;
    fetch("https://stormy-harbor-04955.herokuapp.com/addNewService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        try {
          if (result.insertedId && !unmounted) {
            toast.success("New Service Added Successfully", { autoClose: 1300 });
          }
        } catch (error ) {
          if (!unmounted) {
            toast.error(error)
          }
        }
        

      });
      return () =>  { unmounted = true };
  };
  return (
    <div className="my-5">
      <h1 className="my-2 text-center primary-color">
        Please Add A New Service
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ width: "23rem" }} className="border border-2 p-4 ">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="title"
                className="p-2 m-2 w-100"
                required
              />
              <br />
              <input
                {...register("desc")}
                placeholder="description"
                className="p-2 m-2 w-100"
                required
              />
              <br />
              <input
                {...register("key")}
                placeholder="key"
                className="p-2 m-2 w-100"
                required
              />
              <br />
              <input
                type="number"
                {...register("price")}
                placeholder="cost$"
                className="p-2 m-2 w-100"
                required
              />
              <br />

              <input
                {...register("img", { required: true })}
                placeholder="Image url"
                className="p-2 m-2 w-100"
                required
              />
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Add"
                className="btn button-color text-white ms-2 w-50"
              />
              <ToastContainer/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewService;
