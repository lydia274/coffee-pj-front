import React from "react"
import CafeSlider from "../components/CafeSlider/CafeSlider.jsx"
import "../App.css"

function Homepage() {
  return (
    <>
      <div className="main">
        <div className="test">
          <h2>Try it out!</h2>
          <ul>
            <li>user@gmail.com</li>
            <li>editor@gmail.com</li>
            <li>admin@gmail.com</li>
          </ul>
        </div>
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
