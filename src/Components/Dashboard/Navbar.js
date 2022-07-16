import React from "react";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-none">

        <label for="my-drawer-2" className="md:hidden cursor-pointer text-2xl">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>

        </label>
      </div>
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Student Profile Management System</a>
      </div>
      
    </div>
  );
};

export default Navbar;
