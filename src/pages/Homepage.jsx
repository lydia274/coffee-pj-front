import React from "react"
import ListsSlider from "../components/ListsSlider/ListsSlider.jsx"
import CafeSlider from "../components/CafeSlider/CafeSlider.jsx"
import "../App.css"

function Homepage() {
  return (
    <>
      <div className="main">
        <CafeSlider />
        <ListsSlider />
      </div>
    </>
  )
}

export default Homepage
