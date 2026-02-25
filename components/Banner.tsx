import { TopographicLines } from "./TopographicLines";

export function Banner() {
  return (
    <section className="px-4 pb-16 md:px-8">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[1.8rem] bg-[var(--color-banner)] px-5 py-8 md:px-10">
        <div className="pointer-events-none absolute -left-10 -top-14 w-48 text-[var(--color-primary)]/75 md:-left-4 md:w-80">
          <TopographicLines className="h-auto w-full" />
        </div>
        <div className="relative pl-24 sm:pl-36 md:pl-72">
          <p className="text-4xl font-medium leading-none text-[var(--color-primary)] md:text-6xl">
            Conocé
          </p>
          <p className="text-5xl font-black leading-none text-[var(--color-primary)] md:text-8xl">
            Villa del Dique
          </p>
        </div>
      </div>
    </section>
  );
}
