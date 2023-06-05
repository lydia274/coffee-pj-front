import React from "react";
import NavBar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import SignIn from "../SignIn/SignIn";
import LogIn from "../LogIn/LogIn";
import LogOut from "../LogOut/LogOut";

function Header() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <SignIn />
      <LogIn />
      <LogOut />
    </div>
  );
}

export default Header;
