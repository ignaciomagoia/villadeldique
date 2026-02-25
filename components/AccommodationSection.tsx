import Image from "next/image";

import { accommodationItems } from "@/data/site-content";

export function AccommodationSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <h1 className="text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
        Alojamientos
      </h1>
      <p className="mt-2 text-3xl text-slate-900 sm:text-4xl">
        Hoteles, Cabañas o Campings.
      </p>

      <div className="mt-5 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
        {accommodationItems.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-3xl border border-slate-300 bg-white"
          >
            <div className="relative h-72 w-full overflow-hidden bg-slate-300">
              {item.imageSrc ? (
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradientClass}`}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_14%,rgba(255,255,255,0.58),transparent_38%)]" />
                </>
              )}
            </div>

            <div className="bg-[#c4d9e7] px-4 pb-4 pt-3">
              <h2 className="text-[2rem] font-semibold leading-none text-slate-900">
                {item.name}
              </h2>
              <p className="mt-1 text-[2rem] font-semibold leading-none text-[var(--color-primary)]">
                {item.kind}
              </p>
              <p className="mt-3 text-lg leading-snug text-slate-600">
                {item.address} -{" "}
                <a
                  href={`tel:${item.phone.replace(/\s/g, "").replace("-", "")}`}
                  className="underline decoration-slate-400 decoration-1 underline-offset-2 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                >
                  {item.phone}
                </a>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
