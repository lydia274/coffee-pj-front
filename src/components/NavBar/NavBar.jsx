import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
      <Link to="/">Homepage</Link>
      <Link to="/lists">Lists page</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/users">ALL users for admin</Link>
    </div>
  )
}

export default NavBar
