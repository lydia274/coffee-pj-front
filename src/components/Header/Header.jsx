import React from "react"
import NavBar from "../NavBar/NavBar"
import SearchBar from "../SearchBar/SearchBar"
import SignIn from "../SignIn/SignIn"
import LogIn from "../LogIn/LogIn"
import LogOut from "../LogOut/LogOut"

function Header() {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Coffee Project</h1>
          <NavBar />
          <SearchBar />
          <div className="user-buttons">
            <LogIn />
            <SignIn />
            <LogOut />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
