import { useEffect, useState } from "react"
import Student from "./Student"
import { getStudent } from "../apis/student";
import { Link } from "react-router-dom";



function App() {
  const [student ,setStudent] =useState([])
  const loadData = async() => {
     const data = await  getStudent();
     setStudent(data)
  }

  useEffect(() => {
    loadData();
  },[])



  return (
    <>
   <Student students={student} />
    <Link to="/">Home</Link>
 
    </>
  )
}

export default App
