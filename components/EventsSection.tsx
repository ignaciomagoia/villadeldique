import type { EventItem } from "@/data/site-content";

type EventsSectionProps = {
  title: string;
  subtitle: string;
  items: EventItem[];
};

export function EventsSection({ title, subtitle, items }: EventsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <h1 className="text-3xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl lg:text-5xl">
        {title}
      </h1>
      <p className="mt-2 max-w-5xl text-xl leading-tight text-slate-900 sm:text-4xl lg:text-3xl">
        {subtitle}
      </p>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-slate-300 bg-[#c4d9e7] px-5 py-5"
          >
            <h2 className="text-[1.75rem] font-semibold leading-none text-slate-900 lg:text-[1.75rem]">
              {item.title}
            </h2>
            <p className="mt-1 text-[1.75rem] font-semibold leading-none text-[var(--color-primary)] lg:text-[1.75rem]">
              {item.detail}
            </p>
            <p className="mt-3 text-lg leading-snug text-slate-600 lg:text-base">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
