import React, { useState } from "react"
import NavBar from "../NavBar/NavBar"
import SignIn from "../SignIn/SignIn"
import LogIn from "../LogIn/LogIn"
import LogOut from "../LogOut/LogOut"
import { Outlet } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Coffee Project</h1>
          <NavBar />
          <div className="user-buttons">
            <LogIn />
            <SignIn />
            <LogOut />
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default Header
