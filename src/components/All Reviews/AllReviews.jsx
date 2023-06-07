import React, { useEffect, useState } from "react"
import "./AllReviews.css"

function AllReviews() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviews")
        const data = await response.json()
        setReviews(data)
      } catch (error) {
        console.error("Error fetching reviews:", error)
      }
    }

    fetchReviews()
  }, [])

  return (
    <div className="all-reviews">
      <h2>Reviews here:</h2>
      <p> the below code maps over all te existing reviews</p>

      <h3> An example of a review title</h3>
      <p>description blabla bla</p>
      <p>created by: This Editor</p>
      <p>CoffeeShp featured in the review: This coffeshop</p>

      {reviews.map((review) => (
        <div key={review._id} className="review-item">
          <h3>{review.title}</h3>
          <p>{review.description}</p>
          <p>Created by: {review.creator.name}</p>
          <p>Coffee Shop: {review.coffeeShop.name}</p>
        </div>
      ))}
    </div>
  )
}

export default AllReviews
