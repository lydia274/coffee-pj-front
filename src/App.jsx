// import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Reviews from "./pages/Reviews"
import UserProfile from "./components/UserProfile/UserProfile"
import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import AllUsers from "./components/AllUsers/AllUsers"
import ProtectedRoute from "./pages/ProtectedRoute"
import AllCoffeePage from "./pages/AllCoffeePage"
import EditCS from "./components/EditCS/EditCS"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Footer />}>
          <Route path="/" element={<Homepage />} />

          <Route path="/allcoffeeshops" element={<AllCoffeePage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/reviews" element={<Reviews />} />

            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/user" element={<UserProfile />} />
          </Route>

          <Route path="/edit/:id" element={<EditCS />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
