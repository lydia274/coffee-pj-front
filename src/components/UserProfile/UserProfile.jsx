import React, { useState, useEffect } from "react"
import "./UserProfile.css"

function UserProfile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const oneUser = async () => {
      try {
        const response = await fetch("/allusers/:id")
        const data = await response.json()
        setUser(data)
      } catch (error) {
        console.error("!!! Error !!!")
      }
    }

    oneUser()
  }, [])

  if (!user) {
    return <div>Loading...</div> // loading while waitign
  }

  return (
    <div>
      <div>
        <h1>Your Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Registration Date: {user.createdAt}</p>
      </div>
    </div>
  )
}

export default UserProfile
