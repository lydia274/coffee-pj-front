import React, { useState, useContext } from "react"
import { useEffect } from "react"
import axios from "axios"
import { AuthContext } from "../../contexts/AuthContext"
import "./LogIn.css"

function LogIn() {
  const { authenticateUser } = useContext(AuthContext)
  const [expandForm, setExpandForm] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setLoggedIn(true)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post(
        "https://coffeepj.onrender.com/auth/login",
        {
          email,
          password,
        }
      )

      localStorage.setItem("token", response.data.authToken)
      await authenticateUser()
      setLoggedIn(true)
      setSuccessMessage(":)")
      setExpandForm(false) // Hide the form after successful login
      window.location.reload()
    } catch (error) {
      console.error(error)
      setSuccessMessage("Invalid email or password. Please try again.")
    }
  }

  const handleExpandForm = () => {
    setExpandForm(true)
  }

  return (
    <div className={`log-in-container ${expandForm ? "expanded" : ""}`}>
      {!loggedIn && !expandForm && !localStorage.getItem("token") && (
        <button className="log-in-button" onClick={handleExpandForm}>
          Login
        </button>
      )}
      {loggedIn ? (
        <div>
          <p className="success-message">{successMessage}</p>
        </div>
      ) : (
        expandForm && (
          <div className="log-in-form">
            <form onSubmit={handleLogin}>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Log In</button>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </form>
          </div>
        )
      )}
    </div>
  )
}

export default LogIn
