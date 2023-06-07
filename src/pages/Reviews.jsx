import React from "react"
import AddReview from "../components/AddReview/AddReview"
import AllReviews from "../components/All Reviews/AllReviews"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

function Reviews() {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <>
      <h2>Discover our curated reviews!</h2>
      {user.status === "Editor" && <AddReview />}

      <AllReviews />
    </>
  )
}

export default Reviews
