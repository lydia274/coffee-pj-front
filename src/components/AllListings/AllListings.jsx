import React, { useEffect, useState } from "react"

function AllListings() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("/listings")
        const data = await response.json()
        setListings(data)
      } catch (error) {
        console.error("Error fetching listings:", error)
      }
    }

    fetchListings()
  }, [])

  return (
    <div>
      <h3>Listings:</h3>
      <p>belw - the code to iterate over all the listings in the db</p>
      <h4> TOP-10 cafés to nap</h4>
      <p>bla bla DESCRIPTION</p>
      <p> creator </p>
      <p>Coffee Shop name </p>
      {listings.map((listing) => (
        <div key={listing._id}>
          <h4>{listing.name}</h4>
          <p>{listing.description}</p>
          <p>Creator: {listing.creator.name}</p>
          <p>Coffee Shop: {listing.coffeeshop.name}</p>
        </div>
      ))}
    </div>
  )
}

export default AllListings
