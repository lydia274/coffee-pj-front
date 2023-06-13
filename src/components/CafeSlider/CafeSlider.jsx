import React, { useEffect, useState } from "react"
import "./CafeSlider.css"

function CafeSlider() {
  const [coffeeShop, setCoffeeShop] = useState(null)

  useEffect(() => {
    // Fetch a random coffee shop
    const fetchRandomCoffeeShop = async () => {
      try {
        const response = await fetch(
          "https://coffeepj.onrender.com/coffeeshop/random"
        )
        const randomCoffeeShop = await response.json()

        setCoffeeShop(randomCoffeeShop)
      } catch (error) {
        console.error("Error fetching random coffee shop:")
      }
    }

    fetchRandomCoffeeShop()
  }, [])

  return (
    <div className="cafe-slider border">
      <aside>
        <p className="heart">💖</p>
      </aside>

      <aside>
        <h2>Featured today</h2>
        <p>
          Escape the ordinary and enter a world of extraordinary coffee at our
          featured coffee shop, where each sip transports you to a realm of
          unparalleled taste and satisfaction.
        </p>
        <p id="join">
          Join the community to get access to the curated list of the best
          coffee shops
        </p>
      </aside>

      <aside>
        {coffeeShop && (
          <div className="cafe-slider-content">
            <img
              src={coffeeShop.image}
              alt={coffeeShop.name}
              style={{ width: "30%" }}
            />
            <h3>{coffeeShop.name}</h3>
            <p>{coffeeShop.services}</p>
            <p>{coffeeShop.openingHours}</p>
            <p>{coffeeShop.address}</p>
          </div>
        )}
      </aside>
    </div>
  )
}

export default CafeSlider
