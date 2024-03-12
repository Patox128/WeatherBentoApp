import axios from "axios";

axios.defaults.baseURL = "http//localhost:3100";

const weatherApi = axios.create({
  baseURL: "https://weatherapi-com.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
});

export { weatherApi };
