import { create } from "zustand";
import { WeatherResponse } from "../../interfaces/weather";
import { devtools } from "zustand/middleware";

interface WeatherState {
  weather: WeatherResponse;
  fetchWeather: (weather: WeatherResponse) => void;
}

export const useWeatherStore = create<WeatherState>()(
  devtools((set) => ({
    weather: {} as WeatherResponse,
    fetchWeather: (weather: WeatherResponse) => {
      set({ weather });
    },
  })),
);
