import React, { useState, useEffect } from "react"
import "./UserProfile.css"
import service from "../../service/api"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

function UserProfile() {
  const [userProfile, setUser] = useState(null)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    console.log(user)
    const oneUser = async () => {
      try {
        const response = await service.get(`/allusers/${user._id}`)

        setUser(response.data)
      } catch (error) {
        console.error("!!! Error !!!")
      }
    }

    oneUser()
  }, [])

  if (!userProfile) {
    return <div>Loading...</div> // loading while waitign
  }

  return (
    <div>
      <div className="user-profile-container">
        <h1>Your Profile</h1>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Registration Date: {userProfile.createdAt}</p>
      </div>
    </div>
  )
}

export default UserProfile
