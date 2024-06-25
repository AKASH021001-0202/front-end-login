import React, { useState } from 'react';
import forgetPassword from '../apis/forgetpassword';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseMessage = await forgetPassword(email);
      setMessage(responseMessage);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Forgot Password</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className="form-button">

                <button type="submit" className=" btn btn-primary">Submit</button>
                <Link to="/login"> Go  Back</Link>
                </div>
              </form>
              {message && <div className="mt-3">{message}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
