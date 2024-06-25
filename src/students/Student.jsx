import React from "react";
import { useNavigate } from "react-router-dom";

const Student = ({ students = [] }) => {

  const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.removeItem("isAuthenticated");
      window.location.reload();
      navigate("/login")
    };
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1>Student List</h1>
        <button className="btn btn-danger btn-group-sm" onClick={handleLogout}>Logout</button>
      </div>

      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Batch</th>
            <th scope="col">Mentor ID</th>
            <th scope="col">Previous Mentors</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.batch}</td>
              <td>{student.mentorId}</td>
              <td>
                {student.previousMentors
                  ? student.previousMentors.join(", ")
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
