import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userLogin } from "../apis/auth.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await userLogin({ email, password });

      if (data.code === 0) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("token", data.token);
        navigate("/"); // Navigate to home or desired route (in this case, '/')
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };

  if(isAuthenticated){
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-button">

                <button type="submit" className=" mt-2 btn btn-primary btn-block">
                  Login
                </button>
                <Link style={{ float: "right" }} to="/register">
                  Go to Register
                </Link>
                </div>
              </form>
                <Link style={{ textAlign: "center",display:"flex", justifyContent:"center" }} to="/forgetpassword">
                Forget Password
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
