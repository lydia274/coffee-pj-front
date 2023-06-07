import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ListsPage from "./pages/Lists";
import Reviews from "./pages/Reviews";
import UserProfile from "./components/UserProfile/UserProfile";
import LogIn from "./components/LogIn/LogIn";
import SignIn from "./components/SignIn/SignIn";
import "./App.css";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleSubscribeButtonClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Footer />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/lists" element={<ListsPage />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/user" element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>


      <div>
     

        {!showLoginForm && (
          <button onClick={handleSubscribeButtonClick}>Subscribe</button>
        )}

        {showLoginForm && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button" onClick={handleLoginFormClose}>
                X
              </button>
              <SignIn onClose={handleLoginFormClose} />
            </div>
          </div>
        )}
      </div>

    </Router>
  );
}

export default App;
