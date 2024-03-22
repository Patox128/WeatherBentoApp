import { DayForecast } from "./Bento/DayForecast";

export const MainPanel = () => {
  return (
    <section className="grid h-dvh grid-cols-1 gap-4 p-4 md:grid-cols-7 md:grid-rows-7 [&>*]:bg-white/20 [&>*]:shadow-md [&>*]:backdrop-blur-md [&>*]:backdrop-saturate-150 [&>*]:backdrop-filter">
      <article className="order-1 rounded-xl border-2 bg-[#111928]/30 p-4 shadow-lg backdrop-blur-lg backdrop-filter md:order-none md:col-span-3 md:row-span-1">
        google places autocomplete
      </article>
      <article className="order-3 rounded-xl border-2 p-4 sm:order-none md:col-span-4 md:row-span-2">
        Hourly Forecast
      </article>
      <DayForecast />
      <article className="order-4 rounded-xl border-2 p-4 sm:order-none md:col-span-4 md:row-span-3">
        Google Map
      </article>
      <article className=" order-5 rounded-xl border-2 p-4 sm:order-none md:col-span-2 md:row-span-2">
        05
      </article>
      <article className="order-6 rounded-xl border-2 p-4 sm:order-none md:col-span-2 md:row-span-2">
        Wind Speed
      </article>
    </section>
  );
};
