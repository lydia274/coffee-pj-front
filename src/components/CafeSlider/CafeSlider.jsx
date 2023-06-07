import React, { useEffect, useState } from "react"
import "./CafeSlider.css"

function CafeSlider() {
  const [coffeeShop, setCoffeeShop] = useState(null)

  useEffect(() => {
    // Fetch a random coffee shop
    const fetchRandomCoffeeShop = async () => {
      try {
        const response = await fetch("/coffeeshop")
        const coffeeShops = await response.json()

        // Get a random coffee shop from the list
        const randomIndex = Math.floor(Math.random() * coffeeShops.length)
        const randomCoffeeShop = coffeeShops[randomIndex]

        setCoffeeShop(randomCoffeeShop)
      } catch (error) {
        console.error("Error fetching random coffee shop:", error)
      }
    }

    fetchRandomCoffeeShop()
  }, [])

  return (
    <div className="cafe-slider border">
      <h2>Featured</h2>
      **Here youre supposed to see the image and the title of a random cafe**
      **task: fix the paths i guess!!"**
      {coffeeShop && (
        <div className="cafe-slider-content border">
          <img
            src={coffeeShop.image}
            alt={coffeeShop.name}
            style={{ width: "30%" }}
          />
          <h2>{coffeeShop.name}</h2>
          <a href={`/coffeeshop/${coffeeShop._id}`}>Learn More</a>
        </div>
      )}
    </div>
  )
}

export default CafeSlider
