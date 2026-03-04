import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { travelCards } from "@/data/site-content";

const iconImageByType: Record<string, string> = {
  home: "/iconitoalojamiento.png",
  utensils: "/iconitogastronomia.png",
  activity: "/iconitoactividades.png",
};

export function TravelCards() {
  return (
    <section id="planifica" className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-8 md:pb-24">
      <h2 className="mb-8 text-3xl font-semibold text-[#7fb7df] sm:mb-12 sm:text-6xl lg:text-4xl">
        Planificá tu viaje...
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {travelCards.map((card) => {
          const iconImage = iconImageByType[card.icon] ?? iconImageByType.home;

          const cardContent = (
            <div className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl">
              {card.imageSrc ? (
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt ?? card.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105"
                />
              ) : (
                <div
                  role="img"
                  aria-label={`${card.title} en formato placeholder`}
                  className={`relative h-full w-full bg-gradient-to-br ${card.gradient}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.6),transparent_40%)]" />
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-slate-900/14 md:hidden" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center md:hidden">
                <span aria-hidden="true" className="relative h-48 w-48">
                  <Image
                    src={iconImage}
                    alt=""
                    fill
                    unoptimized
                    sizes="192px"
                    className="object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)]"
                  />
                </span>
              </div>
              <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-primary)] md:hidden">
                Toca para ver
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </div>

              <div className="absolute inset-0 hidden bg-slate-900/0 transition-colors duration-300 group-hover:bg-slate-900/38 group-focus-visible:bg-slate-900/38 md:block" />
              <div className="pointer-events-none absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:flex">
                <span aria-hidden="true" className="relative h-44 w-44">
                  <Image
                    src={iconImage}
                    alt=""
                    fill
                    unoptimized
                    sizes="176px"
                    className="object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)]"
                  />
                </span>
              </div>
              <span className="sr-only">{card.title}</span>
            </div>
          );

          return (
            <article
              key={card.id}
              className="overflow-hidden rounded-3xl bg-white shadow-[0_16px_26px_-20px_rgba(15,23,42,0.85)]"
            >
              {card.href ? (
                <Link
                  href={card.href}
                  className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  {cardContent}
                </Link>
              ) : (
                cardContent
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
