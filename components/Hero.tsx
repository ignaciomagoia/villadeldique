import { heroText } from "@/data/site-content";

import { TopographicLines } from "./TopographicLines";

export function Hero() {
  return (
    <section className="relative pb-14 md:pb-20">
      <div className="relative overflow-hidden">
        <div
          role="img"
          aria-label="Imagen principal de Villa del Dique en formato placeholder"
          className="h-[56vh] min-h-[420px] w-full bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.4),transparent_40%),linear-gradient(160deg,#80b7db_0%,#2f5878_43%,#15324a_100%)]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
        <div className="pointer-events-none absolute bottom-6 right-2 w-56 text-white/55 sm:w-72 md:bottom-10 md:right-8 md:w-80 lg:w-[22rem]">
          <TopographicLines className="h-auto w-full" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 justify-center px-4">
        <div className="w-full max-w-3xl rounded-2xl bg-[#e5eef2] px-4 py-4 text-center shadow-[0_16px_32px_-18px_rgba(15,23,42,0.55)] sm:px-6">
          <p className="text-[1.95rem] leading-tight text-[var(--color-primary)] sm:text-5xl">
            <span className="font-extrabold">{heroText.bold} </span>
            <span className="font-medium italic">{heroText.soft}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
