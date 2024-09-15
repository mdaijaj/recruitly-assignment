import React, { useState } from "react";
import {  useNavigate } from "react-router-dom"; 

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Static credentials
  const validUsername = "admin@gmail.com";
  const validPassword = "admin123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      setError("");
      alert("Login successful!");
      let obj={}
      obj["username"]=username;
      obj["password"]=password;
      localStorage.setItem('user', JSON.stringify(obj))
      navigate("/"); 
    } else {
      setError("Invalid username or password!");
    }
  };


  return (
    <div className="container mt-5">
      <h2 className="text-center">Login Page</h2>
      <form onSubmit={handleLogin} className="col-md-4 offset-md-4">

        {/* Username Field */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
