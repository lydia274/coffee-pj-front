import React from "react"
import Header from "../components/Header/Header.jsx"
import ListsSlider from "../components/ListsSlider/ListsSlider.jsx"
import CafeSlider from "../components/CafeSlider/CafeSlider.jsx"
import Footer from "../components/Footer/Footer.jsx"
import "../App.css"

function Homepage() {
  return (
    <>
      <div className="main">
        <CafeSlider />
        <ListsSlider />
      </div>

      <Footer />
    </>
  )
}

export default Homepage
