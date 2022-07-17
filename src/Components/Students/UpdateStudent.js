import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Spiner from "../Dashboard/Spiner";

const UpdateStudent = () => {
    const {id} = useParams()
    const {data,isLoading,refetch} = useQuery(["studentByid",id],()=> fetch(`http://localhost:5000/addstudent/${id}`).then(res=> res.json()))
   
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const onsubmit = (data) => {
    fetch(`http://localhost:5000/addstudent/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type": "Application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
        toast.success("Student updated successfully !")
        reset()
    })


  };
  if(isLoading){
    return <Spiner/>
  }
  refetch()
  return (
    <div className="flex flex-col justify-center items-center px-5 md:px-0">
      <div className="w-full w-full  md:w-5/6 max-auto bg-white mt-5 rounded-lg p-5">
        <h1 className="text-center text-2xl text-black mb-1">
         Update Student Information
        </h1>{" "}
        <hr />
        <form
          onSubmit={handleSubmit(onsubmit)}
          action=""
          className="mt-3  grid grid-cols-1 md:grid-cols-2  gap-5"
        >
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text text-black">Student Name</span>
            </label>
            <input
            defaultValue={data.name}
              name="name"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full bg-white"
              {...register("name",{
                required:{
                    value:true,
                    message:"Name field is required"
                }
              })}
            />
            <label class="label">
            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
              
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text text-black">Student Image Link</span>
            </label>
            <input
            defaultValue={data.image}
              name="image"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full bg-white"
              {...register("image",{
                required:{
                    value:true,
                    message:"Image field is required"
                }
              })}
            />
            <label class="label">
            {errors.image?.type === 'required' && <span class="label-text-alt text-red-500">{errors.image.message}</span>}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text text-black">Father Name</span>
            </label>
            <input
            defaultValue={data.father}
              name="father"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full bg-white"
              {...register("father",{
                required:{
                    value:true,
                    message:"Father Name is required"
                }
              })}
            />
            <label class="label">
            {errors.father?.type === 'required' && <span class="label-text-alt text-red-500">{errors.father.message}</span>}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text text-black">Mother Name</span>
            </label>
            <input
            defaultValue={data.mother}
              name="mother"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full bg-white"
              {...register("mother",{
                required:{
                    value:true,
                    message:"Mother name is required"
                }
              })}
            />
            <label class="label">
            {errors.mother?.type === 'required' && <span class="label-text-alt text-red-500">{errors.mother.message}</span>}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text text-black">Select Class</span>
            </label>
            <select 
            defaultValue={data.Class}
            name="class"
             class="select select-bordered w-full bg-white"
             {...register("Class",{
                required:{
                    value:true,
                    message:"Class is required"
                }
              })}
             
             >
              <option disabled selected>
                Choose Class?
              </option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="four">Four</option>
              <option value="five">Five</option>
            </select>
            <label class="label">
            {errors.class?.type === 'required' && <span class="label-text-alt text-red-500">{errors.class.message}</span>}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text text-black">Select Shift</span>
            </label>
            <select 
            defaultValue={data.shift}
            name="shift"
             class="select select-bordered w-full bg-white"
             {...register("shift",{
                required:{
                    value:true,
                    message:"Shift is required"
                }
              })}
             >
              <option disabled selected>
                Choose Shift?
              </option>
              <option value="morning">Morning</option>
              <option value="day">Day</option>
            </select>
            <label class="label">
            {errors.shift?.type === 'required' && <span class="label-text-alt text-red-500">{errors.shift.message}</span>}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text text-black">Address</span>
            </label>
            <input
            defaultValue={data.address}
              name="address"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full bg-white"
              {...register("address",{
                required:{
                    value:true,
                    message:"Address field is required"
                }
              })}
            />
            <label class="label">
            {errors.address?.type === 'required' && <span class="label-text-alt text-red-500">{errors.address.message}</span>}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text text-black">Phone</span>
            </label>
            <input
            defaultValue={data.phone}
              name="phone"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full bg-white"
              {...register("phone",{
                required:{
                    value:true,
                    message:"Phone field is required"
                }
              })}
            />
            <label class="label">
            {errors.phone?.type === 'required' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
            </label>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text text-black">Email</span>
            </label>
            <input
            defaultValue={data.email}
              name="email"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full bg-white"
              {...register("email",{
                required:{
                    value:true,
                    message:"Email field is required"
                },
                pattern:{
                    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message:"Please provide a valid email address"
                }
              })}
            />
            <label class="label">
            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
            </label>
          </div>{" "}
          <br />
          <div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
