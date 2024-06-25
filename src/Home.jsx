import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  };

  return (
    <div>
    
      <header className="bg-dark text-white text-center py-4">
        <div className="d-flex justify-content-between">
          <h1>Welcome to Our Platform</h1>

          <button
            className="btn btn-danger btn-group-sm"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

    
      <div className="container my-5">
        <div className="row">
        
          <div className="col-md-6 text-center mb-4">
            <Link to="/teacher">
              <img
                src="https://www.workitdaily.com/media-library/a-happy-young-teacher-grades-an-assignment-from-one-of-her-students.jpg?id=22146397&width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C1"
                alt="Teacher"
                className="img-fluid rounded"
                style={{ maxHeight: "300px" }}
              />
              <h2 className="mt-3">Teacher</h2>
            </Link>
          </div>

          {/* Student Section */}
          <div className="col-md-6 text-center mb-4">
            <Link to="/student">
              <img
                src="https://assets-homepages-learning.3plearning.net/wp-content/uploads/2020/06/blog-20-student-engagement-strategies-captivating-classroom.png"
                alt="Student"
                className="img-fluid rounded"
                style={{ maxHeight: "300px" }}
              />
              <h2 className="mt-3">Student</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
