import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { nauticActivityItems } from "@/data/site-content";

export function NauticActivitiesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <Link
        href="/actividades"
        className="mb-2 inline-flex items-center gap-1 rounded-md text-sm font-medium text-[var(--color-primary)] transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Volver
      </Link>
      <h1 className="text-2xl font-extrabold leading-none text-[var(--color-primary)] sm:text-4xl lg:text-3xl">
        Actividades náuticas
      </h1>

      <div className="mt-5 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
        {nauticActivityItems.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-3xl border border-slate-300 bg-white"
          >
            <div className="relative h-72 w-full overflow-hidden bg-slate-300">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="bg-[#c4d9e7] px-4 pb-4 pt-3">
              <h2 className="text-[1.3rem] font-semibold leading-[1.05] text-slate-900 lg:text-[1.15rem]">
                {item.title}
              </h2>
              <p className="mt-1 text-[1.3rem] font-semibold leading-[1.05] text-[var(--color-primary)] lg:text-[1.15rem]">
                {item.subtitle}
              </p>
              <p className="mt-3 text-sm leading-snug text-slate-600 sm:text-base lg:text-sm">
                {item.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
