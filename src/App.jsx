import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ListsPage from "./pages/Lists";
import Reviews from "./pages/Reviews";
import UserProfile from "./components/UserProfile/UserProfile";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lists" element={<ListsPage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
