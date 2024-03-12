import { useEffect } from "react";
import { useCurrentLocation } from "./hooks/useCurrentLocation";
// import { MainPanel } from "./components/MainPanel";

function App() {
  const { userLocation } = useCurrentLocation();

  useEffect(() => {
    //TODO: llamar a la api de openweather con reactquery
    if (userLocation !== null) {
      console.log("if");
    } else {
      console.log("else");
    }
  }, [userLocation]);
  return (
    <main>
      {/* <MainPanel cordenada={cordenada} /> */}
      <section className="grid h-dvh grid-cols-1 gap-4 p-4 lg:grid-cols-7 lg:grid-rows-7 [&>*]:bg-white/40 [&>*]:shadow-lg [&>*]:backdrop-blur-lg [&>*]:backdrop-saturate-150 [&>*]:backdrop-filter">
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
      </section>
    </main>
  );
}

export default App;
