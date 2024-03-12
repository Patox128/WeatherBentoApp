import { useQuery } from "@tanstack/react-query";
import { weatherApi } from "../config/weatherApi";
import { WeatherResponse } from "../interfaces/weather";

const getWather = async (latitude: number, longitude: number) => {
  const { data } = await weatherApi.get<WeatherResponse>("/forecast.json", {
    params: { q: `${latitude},${longitude}`, days: 3 },
  });
  return data;
};

export const useWeather = (latitude: number, longitude: number) => {
  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWather(latitude, longitude),
  });
  return { isLoading, isError, error, data, isFetching };
};
