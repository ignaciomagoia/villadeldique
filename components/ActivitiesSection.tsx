import Image from "next/image";

import { activityItems } from "@/data/site-content";

export function ActivitiesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <h1 className="text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
        Actividades
      </h1>
      <p className="mt-2 max-w-4xl text-2xl leading-tight text-slate-900 sm:text-3xl">
        Elegí tu plan: senderos, actividades náuticas o experiencias recomendadas.
      </p>

      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {activityItems.map((item) => (
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
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradientClass}`}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_14%,rgba(255,255,255,0.58),transparent_38%)]" />
                </>
              )}
            </div>

            <div className="bg-[#c4d9e7] px-5 py-5">
              <h2 className="break-words text-4xl font-semibold leading-tight text-[var(--color-primary)]">
                {item.title}
              </h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
