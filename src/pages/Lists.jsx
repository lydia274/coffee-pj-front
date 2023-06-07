import React, { useEffect, useState } from "react"
import AllListings from "../components/AllListings/AllListings"
import AddListing from "../components/AddListing/AddListing"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

function Lists() {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <h2>Discover and experience the best of the city!</h2>
      <p>
        top-10 cheapest filter
        <br /> where to meet celebrities
        <br /> the most instagrammable
        <br /> best for focusing
        <br /> dog friendly
      </p>

      {user.status === "Editor" && <AddListing />}
      <AllListings />
    </div>
  )
}

export default Lists
