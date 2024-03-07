import { useEffect, useState } from "react";
import { useCurrentLocation } from "./useCurrentLocation";

function App() {
  const [cordenada, setCordenada] = useState({
    latitude: 40.7128, // Latitud por defecto (por ejemplo, Nueva York)
    longitude: -74.006, // Longitud por defecto
  });
  const { userLocation } = useCurrentLocation();

  console.log(userLocation);

  useEffect(() => {
    if (userLocation !== null) {
      setCordenada(userLocation);
    } else {
      console.log("nay ubicacion de la api");
    }
  }, [userLocation]);

  return (
    <main>
      <section className="h-dvh p-4 grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-7 gap-4 [&>*]:bg-white/40 [&>*]:backdrop-filter [&>*]:backdrop-blur-lg [&>*]:shadow-lg [&>*]:backdrop-saturate-150">
        <article className="rounded-xl border-2 p-4 lg:col-span-3 lg:row-span-1 order-1 lg:order-none bg-[#111928]/30 backdrop-filter backdrop-blur-lg shadow-lg">
          google places autocomplete
          <h1>{cordenada.latitude}</h1>
          <h1>{cordenada.longitude}</h1>
        </article>
        <article className="rounded-xl border-2 p-4 lg:col-span-4 lg:row-span-2 order-3 lg:order-none">
          Hourly Forecast
        </article>
        <article className="rounded-xl border-2 p-4 lg:col-span-3 lg:row-span-6 order-2 lg:order-none">
          Day forecast
        </article>
        <article className="rounded-xl border-2 p-4 lg:col-span-4 lg:row-span-3 order-4 lg:order-none">
          Google Map
        </article>
        <article className=" rounded-xl border-2 p-4 lg:col-span-2 lg:row-span-2 order-5 lg:order-none">
          05
        </article>
        <article className="rounded-xl border-2 p-4 lg:col-span-2 lg:row-span-2 order-6 lg:order-none">
          Wind Speed
        </article>
      </section>
    </main>
  );
}

export default App;
