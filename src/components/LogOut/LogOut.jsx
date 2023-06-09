import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

const LogOut = () => {
  const { authenticateUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setLoggedIn(true)
    }
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem("token")
    setLoggedIn(false)
    navigate("/")
    setSuccessMessage("Goodbye!")
    window.location.reload()
  }

  return (
    <>
      {loggedIn && <button onClick={handleLogOut}>Log Out</button>}
      {loggedIn && (
        <div>
          <p className="success-message">{successMessage}</p>
        </div>
      )}
    </>
  )
}

export default LogOut
