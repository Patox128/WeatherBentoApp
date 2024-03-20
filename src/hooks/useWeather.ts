import { useQuery } from "@tanstack/react-query";
import { weatherApi } from "../config/weatherApi";
import { WeatherResponse } from "../interfaces/weather";
import { GeoLocation } from "../types";

const getWeather = async (latitude: number, longitude: number) => {
  const { data } = await weatherApi.get<WeatherResponse>("/forecast.json", {
    params: { q: `${latitude},${longitude}`, days: 3 },
  });
  return data;
};

export const useWeather = (location: GeoLocation) => {
  const { latitude, longitude } = location;
  const { isLoading, isError, error, data, isFetching, refetch, isSuccess } =
    useQuery({
      queryKey: ["weather"],
      queryFn: () => getWeather(latitude, longitude),
      // enabled: false,
    });
  return { isLoading, isError, error, data, isFetching, isSuccess, refetch };
};
