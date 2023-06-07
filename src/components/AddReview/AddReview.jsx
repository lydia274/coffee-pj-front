import React, { useState } from "react"
// import {useContext} from "react"
// import { AuthContext } from "../contexts/AuthContext"

function AddReview() {
  //   const { user } = useContext(AuthContext)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [coffeeShopName, setCoffeeShopName] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Find the coffee shop by its name and get its ID
    const coffeeShopResponse = await fetch(
      `/coffeeshops?name=${coffeeShopName}`
    )
    const coffeeShops = await coffeeShopResponse.json()
    const coffeeShopId = coffeeShops[0]._id

    // Create the review object to be sent in the POST request
    const reviewData = {
      title,
      description,
      creator: user._id,
      coffeeShop: coffeeShopId,
    }

    // Send the POST request to create the review
    const response = await fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })

    if (response.ok) {
      // Review created successfully
      // Handle any success actions or notifications
    } else {
      // Review creation failed
      // Handle any error actions or notifications
    }
  }

  return (
    <div className="add-review">
      <h2>Add Review!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title of the review"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <textarea
          placeholder="Description (Max 500 characters)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={500}
        ></textarea>{" "}
        <br />
        <input
          type="text"
          placeholder="Coffee Shop Name"
          value={coffeeShopName}
          onChange={(e) => setCoffeeShopName(e.target.value)}
        />{" "}
        <br />
        <div className="buttons">
          <input type="button" value="Cancel" className="cancel" />
          <input type="submit" value="Send" className="principal" />
        </div>
      </form>
    </div>
  )
}

export default AddReview
