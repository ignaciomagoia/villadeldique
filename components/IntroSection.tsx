"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const introSlides = [
  {
    src: "/galeria01.jpg",
    alt: "Ninos con tablas junto al lago en Villa del Dique",
  },
  {
    src: "/tablas.jpg",
    alt: "Veleros navegando en el lago",
  },
  {
    src: "/actividadesnautica.jpg",
    alt: "Actividad nautica en el lago de Villa del Dique",
  },
];

const SLIDE_INTERVAL_MS = 2200;

export function IntroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % introSlides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="intro" className="mx-auto w-full max-w-6xl px-4 pb-14 pt-16 md:px-8 md:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl bg-white p-2 shadow-[0_14px_30px_-22px_rgba(15,23,42,0.6)]">
          <div className="relative h-72 w-full overflow-hidden rounded-[1.35rem] sm:h-[360px] lg:h-[420px]">
            {introSlides.map((slide, index) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                unoptimized
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={`object-cover transition-opacity duration-700 ${
                  index === activeSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-3xl leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-[3rem]">
          <span className="font-bold">Villa del Dique</span> es un lugar que se
          muestra solo a quien se{" "}
          <span className="font-semibold italic">detiene a mirarlo</span>, a
          quien esta dispuesto a conectar con lo{" "}
          <span className="font-extrabold">esencial</span>.
        </p>
      </div>
    </section>
  );
}
