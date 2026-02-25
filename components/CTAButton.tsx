import Link from "next/link";

export function CTAButton() {
  return (
    <section className="px-4 pb-16 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <Link
          href="/mapa-de-servicios"
          className="rounded-xl bg-[var(--color-primary)] px-10 py-5 text-3xl font-medium text-white shadow-[0_14px_25px_-18px_rgba(15,23,42,0.9)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] sm:px-16"
        >
          Mapa de servicios
        </Link>
      </div>
    </section>
  );
}
