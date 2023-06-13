import React, { useState, useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useParams } from "react-router"
import service from "../../service/api"
import "./EditCS.css"

function EditCS() {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  console.log(user)
  const [singleCs, setCs] = useState(null)

  useEffect(() => {
    async function getCs() {
      const cs = await service.get(`/coffeeshop/${id}`)
      console.log(cs.data)
      setCs(cs.data[0])
    }
    getCs()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(singleCs)

    // Send the PATCH request to update the coffee shop
    const response = await service.patch(
      `/coffeeshop/edit/${singleCs._id}`,
      singleCs
    )
  }
  if (!singleCs) {
    return <div>Wait...</div>
  }
  return (
    <>
      <div className="upd-cs">
        <h2>Update form</h2>
        <p>
          Select a field, modify it to your preference and save. <br /> The
          updated item will be displayed in the list of all items.
        </p>{" "}
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            // placeholder="Enter the name"
            value={singleCs.name}
            onChange={(e) => setCs({ ...singleCs, name: e.target.value })}
          />
          <br />
          <input
            type="text"
            // placeholder="Insert image URL"
            value={singleCs.image}
            onChange={(e) => setCs({ ...singleCs, image: e.target.value })}
          />
          <br />
          <input
            type="text"
            // placeholder="Address"
            value={singleCs.address}
            onChange={(e) => setCs({ ...singleCs, address: e.target.value })}
          />
          <br />
          <input
            type="text"
            // placeholder="Opening Hours"
            value={singleCs.openingHours}
            onChange={(e) =>
              setCs({ ...singleCs, openingHours: e.target.value })
            }
          />
          <br />
          <input
            type="text"
            // placeholder="Available Services"
            value={singleCs.services}
            onChange={(e) => setCs({ ...singleCs, services: e.target.value })}
          />
          <br />
          <br />
          <div className="buttons">
            <input type="button" value="Cancel" className="cancel" />
            <input type="submit" value="Create" className="principal" />
          </div>
        </form>
      </div>
    </>
  )
}

export default EditCS
