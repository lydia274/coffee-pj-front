// import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ListsPage from "./pages/Lists"
import Reviews from "./pages/Reviews"
import UserProfile from "./components/UserProfile/UserProfile"
import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import AllUsers from "./components/AllUsers/AllUsers"
import ProtectedRoute from "./pages/ProtectedRoute"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Footer />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/lists" element={<ListsPage />} />
          <Route path="/reviews" element={<Reviews />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/allusers" element={<AllUsers />} />
          </Route>

          <Route path="/user" element={<UserProfile />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
