import React from "react"
import "./AllCoffeeshops.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function AllCoffeeshops({ csItem, user, fetchCS }) {
  if (csItem.length === 0) {
    return <div>bad request!</div>
  }

  async function handleDelete(id) {
    try {
      await fetch("https://coffeepj.onrender.com/coffeeshop/" + id, {
        method: "delete",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      fetchCS()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2>All Coffee Shops</h2>

      {csItem.map((cs) => (
        <div key={cs._id} className="cs-item">
          <h3>{cs.name}</h3>
          <img src={cs.image} />
          <p>{cs.address}</p>
          <p>{cs.openingHours}</p>
          <p>{cs.services}</p>
          <Link to={`/edit/${cs._id}`}>Edit</Link>

          {user.status === "Editor" && (
            <button
              onClick={() => {
                handleDelete(cs._id)
              }}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </>
  )
}

export default AllCoffeeshops
