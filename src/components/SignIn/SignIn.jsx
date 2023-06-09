import React, { useState } from "react"
import axios from "axios"
import "./SignIn.css"

function SignIn() {
  const [expandForm, setExpandForm] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleSignUp = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post("/auth/signup", {
        name,
        email,
        password,
      })

      console.log(response.data)
      setSuccessMessage("Sign up successful!")
      setName("")
      setEmail("")
      setPassword("")
      setExpandForm(false)
    } catch (error) {
      console.error(error)
      setSuccessMessage("Sign up failed. Please try again.")
    }
  }

  const handleExpandForm = () => {
    setExpandForm(true)
    setSuccessMessage("")
  }

  return (
    <div className={`log-in-container ${expandForm ? "expanded" : ""}`}>
      {!localStorage.getItem("token") && !expandForm && (
        <button className="log-in-button" onClick={handleExpandForm}>
          Sign Up
        </button>
      )}
      {expandForm ? (
        <div className="log-in-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
            <button type="submit">Sign Up</button>

            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </form>
        </div>
      ) : null}
    </div>
  )
}

export default SignIn
