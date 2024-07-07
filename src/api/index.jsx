import axios from "axios";

let instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-type": "application/json",
    },
    timeout: 10000,
});

export default instance;
