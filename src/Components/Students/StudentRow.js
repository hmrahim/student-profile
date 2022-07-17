import React from "react";
import {Link} from "react-router-dom"

const StudentRow = ({ index, student, refetch }) => {
  refetch();
  return (
    <tr>
      <th>{index + 1}</th>
      
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
            <img
              src={student.image}
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
      </td>
      <td>{student.name}</td>
      <td>
        
        <Link to={`/viewstudent/${student._id}`} className="btn btn-info btn-sm ml-3">View</Link>
      </td>
    </tr>
  );
};

export default StudentRow;
