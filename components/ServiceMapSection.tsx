import { serviceCategories, serviceLocations } from "@/data/service-map";

import { InteractiveServiceMap } from "./InteractiveServiceMap";

const activeCategoryIds = new Set(serviceLocations.map((item) => item.categoryId));
const legendItems = serviceCategories.filter((item) =>
  activeCategoryIds.has(item.id),
);

export function ServiceMapSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <h1 className="text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
        Mapa Integral
      </h1>
      <p className="mt-2 max-w-4xl text-2xl leading-tight text-slate-900 sm:text-3xl">
        Todo lo que tenes que saber para moverte y estar tranquilo.
        <br />
        Encontra nuestros servicios de transporte, salud, cajeros y combustible.
      </p>

      <div className="mt-5 overflow-hidden rounded-3xl border border-[#b8d3e3] bg-[#cae4eb] p-1.5 shadow-[0_16px_30px_-22px_rgba(15,23,42,0.6)]">
        <div className="relative h-[390px] overflow-hidden rounded-2xl sm:h-[500px] lg:h-[560px]">
          <InteractiveServiceMap />

          <aside className="pointer-events-none absolute bottom-4 left-4 z-[1000] rounded-xl bg-white/92 p-3 shadow-sm backdrop-blur-sm">
            <ul className="space-y-1">
              {legendItems.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium text-slate-800">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
