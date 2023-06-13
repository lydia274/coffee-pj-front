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
      <div className="cs-container">
        {csItem.map((cs) => (
          <div key={cs._id} className="cs-item">
            <h3>{cs.name}</h3>
            <img src={cs.image} />
            <p>{cs.address}</p>
            <p>{cs.openingHours}</p>
            <p>{cs.services}</p>
            {user.status === "Editor" && (
              <div>
                <Link to={`/edit/${cs._id}`}>Edit</Link>
                <button onClick={() => handleDelete(cs._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default AllCoffeeshops
