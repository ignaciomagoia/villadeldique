import Image from "next/image";

import { galleryItems } from "@/data/site-content";

export function GallerySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <h1 className="mb-7 text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
        Galería
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {galleryItems.map((item) => (
          <article
            key={item.id}
            className={`relative h-56 overflow-hidden rounded-2xl bg-slate-200 shadow-[0_14px_22px_-18px_rgba(15,23,42,0.65)] sm:h-64 md:rounded-3xl ${item.sizeClass}`}
            role="img"
            aria-label={item.imageAlt ?? `${item.label} en formato placeholder`}
          >
            {item.imageSrc ? (
              <Image
                src={item.imageSrc}
                alt={item.imageAlt ?? item.label}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradientClass}`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.6),transparent_42%)]" />
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
