import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    fetch("/auth/logout", {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          navigate("/");
        } else {
          console.error("Logout failed");
        }
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  return <button onClick={handleLogOut}>Log Out</button>;
};

export default LogOut;
