import React from "react"
import "./AddCoffeeshop.css"
import { useState } from "react"

function AddCoffeeshop({ fetchCS }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [address, setAddress] = useState("")
  const [openingHours, setHours] = useState("")
  const [services, setServices] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Find the coffee shop by its name and get its ID
    // const coffeeShopResponse = await fetch(
    //   `/coffeeshops?name=${name}`
    // )
    // const coffeeShops = await coffeeShopResponse.json()
    // const coffeeShopId = coffeeShops[0]._id

    // Create the review object to be sent in the POST request
    const newCS = {
      name,
      image,
      address,
      openingHours,
      services,
    }

    // Send the POST request to create the review
    const response = await fetch("http://localhost:5005/coffeeshop/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCS),
    })

    if (response.ok) {
      fetchCS()
    } else {
      // error
    }
  }

  return (
    <div className="add-cs">
      <h2>Add a new coffee shop!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Insert image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Opening Hours"
          value={openingHours}
          onChange={(e) => setHours(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Available Services"
          value={services}
          onChange={(e) => setServices(e.target.value)}
        />{" "}
        <br />
        <br />
        <div className="buttons">
          <input type="button" value="Cancel" className="cancel" />
          <input type="submit" value="Create" className="principal" />
        </div>
      </form>
    </div>
  )
}

export default AddCoffeeshop
