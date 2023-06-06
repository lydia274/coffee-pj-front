import React from "react"

function CafeSlider() {
  return (
    <>
      <div class="carousel-container">
        <h2>Coffee Carousel</h2>
        <div class="coffee-carousel">
          <div class="coffee-slide">
            <img src="coffee1.jpg" alt="Coffee 1" />
          </div>
          <div class="coffee-slide">
            <img src="coffee2.jpg" alt="Coffee 2" />
          </div>
          <div class="coffee-slide">
            <img src="coffee3.jpg" alt="Coffee 3" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CafeSlider
