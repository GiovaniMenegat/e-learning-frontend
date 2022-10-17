import axios from "axios";

const api = axios.create({
 baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://54.232.34.108.nip.io",
});

export default api