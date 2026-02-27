import Image from "next/image";

import { heroText } from "@/data/site-content";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#80b7db_0%,#2f5878_43%,#15324a_100%)]" />
        <div
          className="relative h-[52vh] min-h-[360px] w-full sm:h-[56vh] sm:min-h-[420px] lg:h-[62vh] lg:min-h-[520px]"
          role="img"
          aria-label="Vista principal de Villa del Dique"
        >
          <Image
            src="/galeria02.jpg"
            alt="Vista aerea de Villa del Dique"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.18),transparent_40%)]" />
        </div>
        <div className="pointer-events-none absolute bottom-8 right-0 h-40 w-56 sm:bottom-0 sm:h-64 sm:w-96 md:bottom-2 md:right-4 md:h-80 md:w-[34rem] lg:bottom-2 lg:right-0 lg:h-[28rem] lg:w-[44rem]">
          <Image
            src="/siluetaazul2.png"
            alt=""
            fill
            unoptimized
            sizes="(max-width: 640px) 224px, (max-width: 1024px) 544px, 704px"
            className="object-contain opacity-90"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-black/0 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 justify-center px-4">
        <div className="w-full max-w-[22rem] rounded-xl bg-[#e5eef2] px-5 py-3 text-center shadow-[0_16px_32px_-18px_rgba(15,23,42,0.55)] sm:max-w-3xl sm:rounded-2xl sm:px-6 sm:py-4">
          <p className="text-[1.55rem] leading-[1.12] text-[var(--color-primary)] sm:text-[1.95rem] md:text-5xl md:leading-none md:whitespace-nowrap">
            <span className="block font-extrabold md:hidden">{heroText.bold}</span>
            <span className="block font-medium italic md:hidden">{heroText.soft}</span>
            <span className="hidden font-extrabold md:inline">{heroText.bold}</span>
            <span className="hidden font-medium italic md:ml-2 md:inline">
              {heroText.soft}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
