import axios from "axios"

const link = "http://localhost:8080"
// const link = ""
export default axios.create({
    baseURL: `${link}/api/`
});