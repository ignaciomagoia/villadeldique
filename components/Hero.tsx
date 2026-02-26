import Image from "next/image";

import { heroText } from "@/data/site-content";

import { TopographicLines } from "./TopographicLines";

export function Hero() {
  return (
    <section className="relative pb-14 md:pb-20">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#80b7db_0%,#2f5878_43%,#15324a_100%)]" />
        <div
          className="relative h-[56vh] min-h-[420px] w-full"
          role="img"
          aria-label="Vista principal de Villa del Dique"
        >
          <Image
            src="/principal.jpg"
            alt="Vista aérea de Villa del Dique"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_40%)]" />
        </div>
        <div className="pointer-events-none absolute bottom-2 right-0 w-72 text-[#9ccdf0]/90 sm:w-80 md:bottom-4 md:right-6 md:w-96 lg:w-[32rem]">
          <TopographicLines className="h-auto w-full" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
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
