import React, { useState, useEffect } from "react"

function AddListing() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [coffeeShops, setCoffeeShops] = useState([])
  const [selectedCoffeeShops, setSelectedCoffeeShops] = useState([])

  useEffect(() => {
    // Fetch coffee shops data
    const fetchCoffeeShops = async () => {
      try {
        const response = await fetch("/coffeeShops")
        const coffeeShopsData = await response.json()
        setCoffeeShops(coffeeShopsData)
      } catch (error) {
        console.error("Error fetching coffee shops:", error)
      }
    }

    fetchCoffeeShops()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch("/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          coffeeShops: selectedCoffeeShops,
        }),
      })

      if (response.ok) {
        const newListing = await response.json()
        console.log("New listing created:", newListing)
      } else {
        console.error("Failed to create listing:", response.status)
      }
    } catch (error) {
      console.error("Error creating listing:", error)
    }
  }

  return (
    <div>
      <h2>Add Listing</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <br />

        <label htmlFor="coffeeShops">
          Coffee Shops (pleas hold ctrl to select multiple!):
        </label>
        <br />

        <select
          id="coffeeShops"
          multiple
          value={selectedCoffeeShops}
          onChange={(event) =>
            setSelectedCoffeeShops(
              Array.from(event.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {coffeeShops.map((coffeeShop) => (
            <option key={coffeeShop._id} value={coffeeShop._id}>
              {coffeeShop.name}
            </option>
          ))}
        </select>
        <br />

        <button type="submit">Create Listing</button>
      </form>
    </div>
  )
}

export default AddListing
