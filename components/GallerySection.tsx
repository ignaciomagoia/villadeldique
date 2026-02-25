import Image from "next/image";

import { galleryItems } from "@/data/site-content";

export function GallerySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <h1 className="mb-7 text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
        Galería
      </h1>

      <div className="grid auto-rows-[110px] grid-cols-2 gap-3 sm:auto-rows-[125px] sm:grid-cols-3 md:auto-rows-[145px] lg:auto-rows-[165px]">
        {galleryItems.map((item) => (
          <article
            key={item.id}
            className={`group relative overflow-hidden rounded-2xl bg-slate-200 shadow-[0_14px_22px_-18px_rgba(15,23,42,0.65)] md:rounded-3xl ${item.sizeClass}`}
            role="img"
            aria-label={item.imageAlt ?? `${item.label} en formato placeholder`}
          >
            {item.imageSrc ? (
              <Image
                src={item.imageSrc}
                alt={item.imageAlt ?? item.label}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 33vw"
              />
            ) : (
              <>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradientClass}`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.6),transparent_42%)]" />
              </>
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent" />
            <p className="absolute bottom-3 left-3 rounded-full bg-black/35 px-2.5 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm md:text-sm">
              {item.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
