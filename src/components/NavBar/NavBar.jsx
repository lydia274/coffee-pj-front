import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
      <Link to="/"> - Homepage </Link>
      <Link to="/reviews"> - Reviews </Link>
      <Link to="/allusers"> - All users</Link>
      <Link to="/user"> - My Profile -</Link>
    </div>
  )
}

export default NavBar
