import { OMD_API_KEY } from "@env";
import axios from "axios";

const api = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${OMD_API_KEY}&s=`,
});

export default api;
