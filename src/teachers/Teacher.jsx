import React from "react";
import { useNavigate } from "react-router-dom";

const Teacher = ({ teachers = [] }) => {

 const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("token");

      window.location.reload();
      navigate("/login")

    };
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1>Teacher List</h1>
        <button className="btn btn-danger btn-group-sm" onClick={handleLogout}>Logout</button>
      </div>

      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Batch</th>
            
            <th scope="col">students</th>

          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.course}</td>
              <td>{teacher.batch}</td>
              <td>{teacher.students}</td>
         
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teacher;
