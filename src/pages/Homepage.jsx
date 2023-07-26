import React from "react"
import CafeSlider from "../components/CafeSlider/CafeSlider.jsx"
import "../App.css"

function Homepage() {
  return (
    <>
      <div className="main">
        <div className="test">
          <h3>Test it out!</h3>
          <p>Log in as one of the users below to see each one's features:</p>
          <ul>
            <li>user@gmail.com - display all</li>
            <li>editor@gmail.com - edit, update and delete items</li>
            <li>admin@gmail.com - display all users</li>
          </ul>
          <p>Password: Tabasco123!</p>
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
