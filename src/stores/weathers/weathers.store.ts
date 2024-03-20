import { create } from "zustand";
import { WeatherResponse } from "../../interfaces/weather";

interface WeatherState {
  weather: WeatherResponse | null;
  fetchWeather: (weather: WeatherResponse) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: {} as WeatherResponse,
  fetchWeather: (weather: WeatherResponse) => {
    set({ weather });
  },
}));
