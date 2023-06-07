import React, { useEffect, useState } from "react"
import service from "../../service/api"
import axios from "axios"

function AllUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await service.get("/allusers")
        console.log(response)
        setUsers(response.data)
      } catch (error) {
        console.error("cant fetch users")
      }
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <h1>User List</h1>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Status</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>some name</td>
          <td>some email</td>
          <td>some status</td>
          <td>edit</td>
          <td> delete </td>
        </tr>
        <tr>
          <td>some name</td>
          <td>some email</td>
          <td>some status</td>
          <td>edit</td>
          <td> delete </td>
        </tr>

        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>edit</td>
            <td> delete </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default AllUsers
