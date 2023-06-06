import React, { useEffect, useState } from "react"

function AllUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/allusers")
        const data = await response.json()
        setUsers(data)
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
          <td>Delete?</td>
        </tr>
        <tr>
          <td>some name</td>
          <td>some email</td>
          <td>some status</td>
          <td> X </td>
        </tr>
        <tr>
          <td>some name</td>
          <td>some email</td>
          <td>some status</td>
          <td> X </td>
        </tr>

        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td> X </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default AllUsers
