import React, { useState } from "react";
import axios from "axios";
import "./SignIn.css";

function SignIn() {
  const [expandForm, setExpandForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("/auth/signup", {
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
          Sign Up
        </button>
      )}
      {expandForm && (
        <div className="log-in-form">
          <h2>Sign Up</h2>
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
            <button type="submit" onClick={handleSignUp}>
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignIn;
