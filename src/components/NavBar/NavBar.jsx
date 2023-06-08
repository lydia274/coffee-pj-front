import React, { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

function NavBar() {
  const { user, isLoggedIn } = useContext(AuthContext)
  return (
    <div>
      <Link to="/">Homepage</Link>
      <Link to="/allcoffeeshops">All coffee shops</Link>
      <Link to="/reviews">Reviews</Link>
      {isLoggedIn && user.status === "Admin" && (
        <Link to="/allusers">All users</Link>
      )}
      {isLoggedIn && <Link to="/user">My Profile</Link>}
    </div>
  )
}

export default NavBar
