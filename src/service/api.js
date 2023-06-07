import axios from "axios"

const service = axios.create({
  baseURL: "http://localhost:5005",
})

service.interceptors.request.use((interceptedRequest) => {
  interceptedRequest.headers.Authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`
  return interceptedRequest
})

//http://localhost:3000/photos/${photoId}/reviews
// service.getReviewsOfPicture = async (id) => {
// 	const response = await service.get(`/photos/${id}/reviews`)
// 	return response.data.reviews
// }

export default service
