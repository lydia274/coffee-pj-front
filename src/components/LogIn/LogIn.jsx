import React, { useState } from "react";
import axios from "axios";
import "./LogIn.css";

function LogIn() {
  const [expandForm, setExpandForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleExpandForm = () => {
    setExpandForm(true);
  };

  return (
    <div className="log-in-container">
      {!expandForm && (
        <button className="log-in-button" onClick={handleExpandForm}>
          Login
        </button>
      )}
      {expandForm && (
        <div className="log-in-form">
          <h2>Login</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleLogin}>
              Log In
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LogIn;
