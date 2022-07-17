import React from "react";
import { Link, useNavigate, useParams} from "react-router-dom"
import { useQuery } from "react-query";
import Spiner from "../Dashboard/Spiner";
import Swal from 'sweetalert2'

const ViewStudent = () => {
  const navigate = useNavigate()
    const {id} = useParams()
    const {data,isLoading,refetch} = useQuery(["studentByid",id],()=> fetch(`http://localhost:5000/addstudent/${id}`).then(res=> res.json()))

    const deleteProfile = (id)=> {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          width:"400",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              fetch(`http://localhost:5000/addstudent/${id}`,{
                  method:"DELETE",
                  headers:{
                      "content-type": "application/json"
                  }
              })
              .then(res =>res.json())
              .then(()=>{
                  Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success',
                    
                    )
                    navigate("/allstudent")

              })
        
          }
        })

  }


   
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


        <div class="avatar flex flex-col  items-center ml-5 mt-5">
          <div class="w-32 rounded-full">
            <img src={data.image} />
          </div>
          <span className="mt-3 h-auto">
            <Link to={`/edittudent/${data._id}`} className="btn btn-primary btn-xs">Edit Profile </Link>
            <button onClick={()=> deleteProfile(data._id)} className="btn btn-error ml-2 btn-xs">Delete Profile</button>
          </span>
        </div>


        <div className="md:ml-16 md:border-l-2 md:pl-4 my-4">
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
            <span class=" text-left text-black text-xl">{data.Class}</span>
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
