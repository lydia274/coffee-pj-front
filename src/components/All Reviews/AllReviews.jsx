import React, { useEffect, useState } from "react"
import "./AllReviews.css"
import { Link } from "react-router-dom"

function AllReviews() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviews")
        const data = await response.json()
        setReviews(data)
      } catch (error) {
        console.error("Error fetching reviews!")
      }
    }

    fetchReviews()
  }, [])

  if (reviews.length === 0) {
    return <div>No reviews available to display!</div>
  }

  return (
    <>
      <h2>All Reviews</h2>
      <div className="all-reviews">
        {reviews.map((review) => (
          <div key={review._id} className="review-item">
            <h3>{review.title}</h3>
            <p>{review.description}</p>
            <p>Created by: {review.creator.name}</p>
            <p>Coffee Shop: {review.coffeeShop.name}</p>
            <Link to={`/edit/${review._id}`}>Edit</Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default AllReviews
