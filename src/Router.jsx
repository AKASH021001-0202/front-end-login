import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Register from "./Register/Register.jsx";
import Login from "./login/Login.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";
import TeacherList from "./teachers/TeacherList.jsx";
import App from "./students/App.jsx";
import Home from "./Home.jsx";
import ForgetPassword from "./login/ForgetPassword.jsx";
import ResetPassword from "./login/ResetPassword.jsx";


const AppRoute = () => {
  return (
      <Routes>
        <Route exact  path="/" element={<ProtectedRoute Component={ <Home /> } />} />
        <Route path="/student" element={<ProtectedRoute Component={ < App /> } />} />
        <Route path="/teacher" element={<ProtectedRoute Component={<TeacherList />} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
  );
};

export default AppRoute;
