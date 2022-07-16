import React from "react";
import { Link, NavLink,Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile bg-gray-300" >
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    {/* <!-- Page content here --> */}
    <Outlet/>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-white">
      {/* <!-- Sidebar content here --> */}
      <li><NavLink to="allstudent">All Students</NavLink></li>
      <li className="mt-4"><NavLink to="addstudent">Add New Students</NavLink></li>
     
    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;
