import Image from "next/image";

import { trailItems } from "@/data/site-content";

export function TrailSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <h1 className="text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
        Senderos
      </h1>

      <div className="mt-5 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
        {trailItems.map((trail) => (
          <article
            key={trail.id}
            className="overflow-hidden rounded-3xl border border-slate-300 bg-white"
          >
            <div className="relative h-72 w-full overflow-hidden bg-slate-300">
              <Image
                src={trail.imageSrc}
                alt={trail.imageAlt}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="bg-[#c4d9e7] px-5 py-4">
              <h2 className="text-[2rem] font-semibold leading-tight text-slate-900">
                {trail.title}
              </h2>
              <p className="mt-1 text-[2rem] font-semibold leading-tight text-[var(--color-primary)]">
                {trail.difficulty}
              </p>
              <p className="mt-3 text-lg leading-snug text-slate-600">{trail.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
