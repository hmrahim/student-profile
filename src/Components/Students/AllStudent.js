import React from 'react';
import StudentRow from './StudentRow';
import { useQuery } from 'react-query';
import Spiner from '../Dashboard/Spiner';

const AllStudent = () => {
  const {data,isLoading,refetch} = useQuery("student",()=> fetch("http://localhost:5000/addstudent").then(res=> res.json()))
  
if(isLoading){
    return <Spiner/>
}
    return (
        <div className='px-5 md:px-0'>
            <div className='  w-full md:w-10/12 mx-auto rounded-lg mt-5'>

            <h1 className='text-2xl text-center text-black mb-2'>All Students</h1> <hr />
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>No</th>
        <th>Image</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        data.map((student,index)=><StudentRow key={student._id} index={index} student={student} refetch={refetch}/>)
      }
      
    
    
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllStudent;