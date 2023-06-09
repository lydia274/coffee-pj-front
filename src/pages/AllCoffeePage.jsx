import { useState, useEffect } from "react"
import AllCoffeeshops from "../components/AllCoffeeshops/AllCoffeeshops"
import AddCoffeeshop from "../components/AddCoffeeshop/AddCoffeeshop"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"
import service from "../service/api"
import "./AllCoffeePage.css"

function AllCoffeePage() {
  const { user } = useContext(AuthContext)
  console.log({ user })
  const [csItem, setCS] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [joinMessage, setJoinMessage] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setLoggedIn(true)
    }
  }, [])

  const fetchCS = async () => {
    try {
      const response = await service.get("/coffeeshop/allcoffeeshops")
      setCS(response.data)
      setJoinMessage("")
    } catch (error) {
      console.error("Error fetching cs!")
    }
  }

  useEffect(() => {
    //fetch all cshops
    fetchCS()
  }, [])

  if (user && user.status === "Editor") {
    // Render the component when user is logged in and has "Editor" status
    return (
      <div className="display-cs">
        <AddCoffeeshop fetchCS={fetchCS} />
        {user && (
          <AllCoffeeshops csItem={csItem} user={user} fetchCS={fetchCS} />
        )}
        {loggedIn && <p className="join-message">{joinMessage}</p>}
      </div>
    )
  } else if (!user) {
    // Render loading or placeholder content while user data is loading
    return (
      <>
        <div className="lock-container">
          <h1>Oops! Access denied</h1>
          <p className="join-message">
            Please join the community to have access to the curated list of the
            best coffee shops in the city!
          </p>
        </div>
      </>
    )
  } else {
    // Render access denied message for unauthorized users
    return (
      <>
        {user && (
          <AllCoffeeshops csItem={csItem} user={user} fetchCS={fetchCS} />
        )}
      </>
    )
  }
}

export default AllCoffeePage
