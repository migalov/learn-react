import axios from "axios"

export const UserService = {
  async getAll() {
    const response = await axios.get(`http://localhost:3000/users`)
    return response.data
  },
  async getById(id) {
    const response = await axios.get(`http://localhost:3000/users?id=${id}`)
    return response.data[0]
  }
}