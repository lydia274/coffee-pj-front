import axios from "axios"

const service = axios.create({
  baseURL: "https://coffeepj.onrender.com",
})

service.interceptors.request.use((interceptedRequest) => {
  interceptedRequest.headers.Authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`
  return interceptedRequest
})

export default service
