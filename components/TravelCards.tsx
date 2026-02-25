import Link from "next/link";

import { travelCards } from "@/data/site-content";

export function TravelCards() {
  return (
    <section id="planifica" className="mx-auto w-full max-w-6xl px-4 pb-24 md:px-8">
      <h2 className="mb-8 text-5xl font-semibold text-[#7fb7df] sm:mb-12 sm:text-6xl">
        Planificá tu viaje...
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {travelCards.map((card) => (
          <article
            key={card.id}
            className="overflow-hidden rounded-3xl bg-white shadow-[0_16px_26px_-20px_rgba(15,23,42,0.85)]"
          >
            {card.href ? (
              <Link
                href={card.href}
                className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              >
                <div
                  role="img"
                  aria-label={`${card.title} en formato placeholder`}
                  className={`relative h-64 w-full bg-gradient-to-br ${card.gradient}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.6),transparent_40%)]" />
                </div>
                <div className="px-5 py-5">
                  <h3 className="text-2xl font-semibold text-[var(--color-primary)]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{card.subtitle}</p>
                </div>
              </Link>
            ) : (
              <>
                <div
                  role="img"
                  aria-label={`${card.title} en formato placeholder`}
                  className={`relative h-64 w-full bg-gradient-to-br ${card.gradient}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.6),transparent_40%)]" />
                </div>
                <div className="px-5 py-5">
                  <h3 className="text-2xl font-semibold text-[var(--color-primary)]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{card.subtitle}</p>
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
