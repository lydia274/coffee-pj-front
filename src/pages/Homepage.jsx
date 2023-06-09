import React from "react"
import CafeSlider from "../components/CafeSlider/CafeSlider.jsx"
import "../App.css"

function Homepage() {
  return (
    <>
      <div className="main">
        <aside className="bg-image">
          <h2>Find your best coffee shop</h2>
          <p>Work on group projects, bring a date or enjoy a book!</p>
        </aside>
        <div>
          <CafeSlider />
        </div>
      </div>
    </>
  )
}

export default Homepage
