import axios from "axios"

export const UserService = {
  async getAll() {
    const response = await axios.get("https://localhost:3000/users")
    return response.data
  }
}