import axios from "axios";

// Use your MongoDB Atlas connection string as the base URL
const API_URL = "mongodb+srv://vkhappy7:zBWh6XzQ3Ov6rygD@cluster0.ec1n0gp.mongodb.net/";

const Api = axios.create({
  baseURL: API_URL,
});

export default Api;