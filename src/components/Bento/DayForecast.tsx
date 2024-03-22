import { useWeatherStore } from "../../stores/weathers/weathers.store";

export const DayForecast = () => {
  const weather = useWeatherStore((state) => state.weather);

  const date = new Date(weather?.current?.last_updated).getDay();

  return (
    <article className="order-2 rounded-xl border-2 p-4 sm:order-none md:col-span-3 md:row-span-6">
      Day forecast
      <h1 className="font-black">{weather?.location?.country}</h1>
      <h1>{date.toString()}</h1>
    </article>
  );
};
