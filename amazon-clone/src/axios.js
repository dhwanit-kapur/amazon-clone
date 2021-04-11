import axios from "axios";

const instance = axios.create({
  baseURL: "...", // This is where API (firebase cloud function) URL will be inserted
});

export default instance;
