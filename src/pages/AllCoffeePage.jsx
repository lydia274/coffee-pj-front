import { useState, useEffect } from "react"
import AllCoffeeshops from "../components/AllCoffeeshops/AllCoffeeshops"
import AddCoffeeshop from "../components/AddCoffeeshop/AddCoffeeshop"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"

function AllCoffeePage() {
  const { user } = useContext(AuthContext)
  console.log(user)
  const [csItem, setCS] = useState([])

  const fetchCS = async () => {
    try {
      const response = await fetch(
        "http://localhost:5005/coffeeshop/allcoffeeshops"
      )
      const c = await response.json()
      setCS(c)
    } catch (error) {
      console.error("Error fetching cs!")
    }
  }
  useEffect(() => {
    //fetch all cshops

    fetchCS()
  }, [])

  return (
    <div>
      {user.status === "Editor" && <AddCoffeeshop fetchCS={fetchCS} />}
      <AllCoffeeshops csItem={csItem} user={user} fetchCS={fetchCS} />
    </div>
  )
}

export default AllCoffeePage
