import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ListsPage from "./pages/Lists.jsx";
import Reviews from "./pages/Reviews.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import Navbar from "./components/NavBar/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" element={HomePage} />
          <Route path="/lists" element={ListsPage} />
          <Route path="/reviews" element={Reviews} />
          <Route path="/userProfile" element={UserProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
