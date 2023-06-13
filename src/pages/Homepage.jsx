import React from "react"
import CafeSlider from "../components/CafeSlider/CafeSlider.jsx"
import "../App.css"

function Homepage() {
  return (
    <>
      <div className="main">
        <div className="bg-image img-container">
          <div className="hp-text">
            <h2>Find your best coffee shop</h2>
            <p className="intro">
              Discover our curated selection of coffee shops in Paris.
            </p>
          </div>
        </div>
        <div>
          <CafeSlider />
        </div>
      </div>
    </>
  )
}

export default Homepage
