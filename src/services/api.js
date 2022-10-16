import axios from "axios";

const api = axios.create({
 baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3001" : "http://54.232.34.108:3001",
});

export default api