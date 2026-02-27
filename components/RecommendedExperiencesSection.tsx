import Image from "next/image";

import { recommendedExperienceItems } from "@/data/site-content";

export function RecommendedExperiencesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <h1 className="text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
        Experiencias recomendadas
      </h1>

      <div className="mt-5 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
        {recommendedExperienceItems.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-3xl border border-slate-300 bg-white"
          >
            <div className="relative h-72 w-full overflow-hidden bg-slate-300">
              {item.imageSrc ? (
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.title}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_14%,rgba(255,255,255,0.48),transparent_38%),linear-gradient(160deg,#9fb9d0_0%,#b8cde0_48%,#89a4bb_100%)]" />
              )}
            </div>

            <div className="bg-[#c4d9e7] px-4 pb-4 pt-3">
              <h2 className="text-[1.9rem] font-semibold leading-[1.05] text-slate-900">
                {item.title}
              </h2>
              <p className="mt-1 text-[1.9rem] font-semibold leading-[1.05] text-[var(--color-primary)]">
                {item.subtitle}
              </p>
              <p className="mt-3 text-base leading-snug text-slate-600 sm:text-lg">
                {item.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
