import Image from "next/image";

import { gastronomyItems } from "@/data/site-content";

export function GastronomySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <h1 className="text-3xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl lg:text-5xl">
        Gastronomía
      </h1>
      <p className="mt-2 max-w-5xl text-base leading-tight text-slate-900 sm:text-2xl lg:text-xl">
        Restaurantes, bares y cafés de Villa del Dique. Descubrí sabores locales
        frente al lago o en el centro del pueblo.
      </p>

      <div className="mt-5 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
        {gastronomyItems.map((item) => (
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
              <h2 className="text-[1.35rem] font-semibold leading-[1.05] text-slate-900 sm:text-[1.65rem] lg:text-[1.4rem]">
                {item.name}
              </h2>
              <p className="mt-1 text-[1.35rem] font-semibold leading-[1.05] text-[var(--color-primary)] sm:text-[1.65rem] lg:text-[1.4rem]">
                {item.kind}
              </p>
              <p className="mt-3 text-base leading-snug text-slate-600 sm:text-lg lg:text-base">
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
