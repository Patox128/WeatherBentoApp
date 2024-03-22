import { useEffect } from "react";
import { useCurrentLocation } from "./hooks/useCurrentLocation";
import { useWeather } from "./hooks/useWeather";
import { useWeatherStore } from "./stores/weathers/weathers.store";
import { DEFAULT_LOCATIONS } from "./constants";
import { MainPanel } from "./components/MainPanel";
// import { MainPanel } from "./components/MainPanel";

function App() {
  const { userLocation } = useCurrentLocation();
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);

  const { data, refetch } = useWeather(
    userLocation ??
      DEFAULT_LOCATIONS[Math.floor(Math.random() * DEFAULT_LOCATIONS.length)],
  );

  useEffect(() => {
    if (userLocation != undefined) {
      fetchWeather(data!);
      refetch();
    } else {
      fetchWeather(data!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation, data]);

  return (
    <main>
      <div className="mx-auto max-w-[1280px]">
        {/* TODO: add header */}
        <MainPanel />
      </div>
      {/* <section className="grid h-dvh grid-cols-1 gap-4 p-4 lg:grid-cols-7 lg:grid-rows-7 [&>*]:bg-white/20 [&>*]:shadow-lg [&>*]:backdrop-blur-lg [&>*]:backdrop-saturate-150 [&>*]:backdrop-filter">
        <article className="order-1 rounded-xl border-2 bg-[#111928]/30 p-4 shadow-lg backdrop-blur-lg backdrop-filter lg:order-none lg:col-span-3 lg:row-span-1">
          google places autocomplete
          <h1>{userLocation?.latitude}</h1>
          <h1>{userLocation?.longitude}</h1>
        </article>
        <article className="order-3 rounded-xl border-2 p-4 lg:order-none lg:col-span-4 lg:row-span-2">
          Hourly Forecast
        </article>
        <article className="order-2 rounded-xl border-2 p-4 lg:order-none lg:col-span-3 lg:row-span-6">
          Day forecast
          <h1>g</h1>
          <h1>{weather?.location?.country}</h1>
        </article>
        <article className="order-4 rounded-xl border-2 p-4 lg:order-none lg:col-span-4 lg:row-span-3">
          Google Map
        </article>
        <article className=" order-5 rounded-xl border-2 p-4 lg:order-none lg:col-span-2 lg:row-span-2">
          05
        </article>
        <article className="order-6 rounded-xl border-2 p-4 lg:order-none lg:col-span-2 lg:row-span-2">
          Wind Speed
        </article>
      </section> */}
    </main>
  );
}

export default App;
