import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import SignIn from "../SignIn/SignIn";
import LogIn from "../LogIn/LogIn";
import LogOut from "../LogOut/LogOut";
import { Outlet } from "react-router-dom";

function Header() {
  const handleSearch = (searchTerm) => {
    // Perform your search logic here based on the searchTerm
    console.log("Performing search for:", searchTerm);
    // Update state or perform any other operations with the search term
  };

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Coffee Project</h1>
          <NavBar />
          <SearchBar onSearch={handleSearch} />
          <div className="user-buttons">
            <LogIn />
            <SignIn />
            <LogOut />
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
