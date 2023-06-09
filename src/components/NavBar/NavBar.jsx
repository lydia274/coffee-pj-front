import React, { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  const { user, isLoggedIn } = useContext(AuthContext)

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Homepage
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/allcoffeeshops" className="nav-link">
            All coffee shops
          </Link>
        </li>
        {isLoggedIn && user.status === "Admin" && (
          <li className="nav-item">
            <Link to="/allusers" className="nav-link">
              All users
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li className="nav-item">
            <Link to="/user" className="nav-link">
              My Profile
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
