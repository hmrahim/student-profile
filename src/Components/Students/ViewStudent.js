import React from "react";
import { Link, useParams} from "react-router-dom"
import { useQuery } from "react-query";
import Spiner from "../Dashboard/Spiner";

const ViewStudent = () => {
    const {id} = useParams()
    const {data,isLoading,refetch} = useQuery(["studentByid",id],()=> fetch(`http://localhost:5000/addstudent/${id}`).then(res=> res.json()))
   
    if(isLoading){
      return <Spiner/>
    }
  return (
    <div className="w-full px-5 md:px-0 md:w-8/12 mx-auto bg-white rounded-lg">
      <h1 className="text-2xl font-semibold text-center text-black my-2 py-3">
        Student Profile
      </h1>{" "}
      <hr />
      <div className="flex flex-col md:flex-row">
        <div class="avatar flex flex-col ml-5 mt-5">
          <div class="w-32 rounded-full">
            <img src={data.image} />
          </div>
          <div className="mt-3">
            <Link to={`/edittudent/${data._id}`} className="btn btn-primary btn-xs">Edit </Link>
            <button className="btn btn-error ml-2 btn-xs">Delete </button>
          </div>
        </div>
        <div className="md:ml-16 md:border-l-2 pl-4 my-4">
          <label class=" flex flex-col my-5">
            <span class=" text-left text-black text-[17px]">Name: </span>
            <span class=" text-left text-black text-xl">{data.name}</span>
          </label>
          <label class=" flex flex-col my-5">
            <span class=" text-left text-black text-[17px]">Father Name: </span>
            <span class=" text-left text-black text-xl">{data.father}</span>
          </label>
          <label class=" flex flex-col my-5">
            <span class=" text-left text-black text-[17px]">Mother Name: </span>
            <span class=" text-left text-black text-xl">{data.mother}</span>
          </label>
          <label class=" flex flex-col my-5">
            <span class=" text-left text-black text-[17px]">Class: </span>
            <span class=" text-left text-black text-xl">{data.class}</span>
          </label>
          <label class=" flex flex-col my-5">
            <span class=" text-left text-black text-[17px]">Shift: </span>
            <span class=" text-left text-black text-xl">{data.shift}</span>
          </label>
          <label class=" flex flex-col my-5">
            <span class=" text-left text-black text-[17px]">Phone: </span>
            <span class=" text-left text-black text-xl">{data.phone}</span>
          </label>
          <label class=" flex flex-col my-5">
            <span class=" text-left text-black text-[17px]">Email: </span>
            <span class=" text-left text-black text-xl">{data.email}</span>
          </label>
          <label class=" flex flex-col my-5">
            <span class=" text-left text-black text-[17px]">Address: </span>
            <span class=" text-left text-black text-xl">{data.address}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;
