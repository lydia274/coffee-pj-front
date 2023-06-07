import React from "react"
import "./Footer.css"
import { Outlet } from "react-router-dom"

function Footer() {
  return (
    <>
      <Outlet />

      <footer>
        <div className="container">
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-media-links">
              {/* Add your social media icons or links here */}
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: coffeeshops@paris.com</p>
            <p>Phone: 123-456-7890</p>
          </div>

          <div className="footer-section">
            <h3>About Us</h3>
            <p>A website rating Paris coffeeshops!</p>
          </div>

          <div className="footer-section">
            <p>2023 - All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
