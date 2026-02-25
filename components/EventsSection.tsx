import type { EventItem } from "@/data/site-content";

type EventsSectionProps = {
  title: string;
  subtitle: string;
  items: EventItem[];
};

export function EventsSection({ title, subtitle, items }: EventsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <h1 className="text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
        {title}
      </h1>
      <p className="mt-2 max-w-5xl text-2xl leading-tight text-slate-900 sm:text-4xl">
        {subtitle}
      </p>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-slate-300 bg-[#c4d9e7] px-5 py-5"
          >
            <h2 className="text-[2.1rem] font-semibold leading-none text-slate-900">
              {item.title}
            </h2>
            <p className="mt-1 text-[2.1rem] font-semibold leading-none text-[var(--color-primary)]">
              {item.detail}
            </p>
            <p className="mt-3 text-lg leading-snug text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
