import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.astrogyata.in/api",
});

export default instance;
