import { useEffect, useState } from "react";
import Teacher from "./Teacher.jsx";
import { getTeacher } from "../apis/teacher.js";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const loadData = async () => {
    try {
      const data = await getTeacher();
      setTeachers(data);
    } catch (error) {
      console.error("Failed to load teacher data:", error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token) {
      try {
        const decoded = jwtDecode(token);

        if (decoded.user.role === "Teacher" || decoded.user.role === "Admin") {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
        setIsAuthorized(false);
      }
    } else {
      setIsAuthorized(false);
    }

    loadData();
  }, []);

  const renderCheck = () => {
    if (!isAuthorized) {
      return <h1>You are not authorized</h1>;
    } else {
      return <Teacher teachers={teachers} />;
    }
  };

  return (
    <>
      <Link to="/">Home</Link>
      {renderCheck()}
    </>
  );
}

export default TeacherList;
