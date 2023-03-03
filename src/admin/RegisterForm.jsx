import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    try {
      const item = { name, username, email, password };
      console.log(item);

      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.setItem("user-info", JSON.stringify(data));
      navigate("/add");
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }

  return (
    <div className="col-sm-6 offset-sm-3 registerForm">
      <h1>Registration Form</h1>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="name"
      />
      <br />
      <input
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        className="form-control"
        placeholder="username"
      />
      <br />
      <input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="email"
      />
      <br />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="password"
      />
      <br />
      <button onClick={signUp} className="btn btn-primary">
        Sign Up
      </button>
    </div>
  );
};

export default RegisterForm;
