import axios from "axios";

const instance = axios.create({
  baseURL: "https://clone-tiktok-mern-backend.herokuapp.com/",
});

export default instance;
