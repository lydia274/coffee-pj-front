import React, { useState } from "react"
import { useContext } from "react"
import axios from "axios"
import { AuthContext } from "../../contexts/AuthContext"
import "./LogIn.css"

function LogIn() {
  const { authenticateUser } = useContext(AuthContext)
  const [expandForm, setExpandForm] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (event) => {
    console.log("=========")

    try {
      event.preventDefault()
      const response = await axios.post(
        "https://coffeepj.onrender.com/auth/login",
        {
          email,
          password,
        }
      )

      localStorage.setItem("token", response.data.authToken)
      await authenticateUser()
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleExpandForm = () => {
    setExpandForm(true)
  }

  return (
    <div className="log-in-container">
      {!expandForm && (
        <button className="log-in-button" onClick={handleExpandForm}>
          Login
        </button>
      )}
      {expandForm && (
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
          </form>
        </div>
      )}
    </div>
  )
}

export default LogIn
