import Link from "next/link";

const busCompanies = [
  "LEP (servicios interurbanos a la Terminal de VDD)",
  "Chevallier",
  "Sierras de Córdoba",
];

export function HowToGetSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
        <article className="space-y-8">
          <h1 className="text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
            ¿Cómo llegar?
          </h1>

          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-none text-[var(--color-primary)]">
              En auto
            </h2>
            <p className="max-w-2xl text-3xl leading-tight text-slate-900 sm:text-[2.1rem]">
              Ingresás por las rutas RN 36 y RP 5, con señalización directa a Villa
              del Dique.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-4xl font-bold leading-none text-[var(--color-primary)]">
              En ómnibus
            </h2>
            <ul className="list-disc pl-7 text-2xl leading-tight text-slate-900 sm:text-[1.9rem]">
              {busCompanies.map((company) => (
                <li key={company}>{company}</li>
              ))}
            </ul>
            <p className="max-w-2xl text-3xl leading-tight text-slate-900 sm:text-[2.1rem]">
              Las empresas arriban a la Terminal de Ómnibus ubicada en pleno
              centro.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="https://www.google.com/maps?q=Villa+del+Dique+Cordoba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 min-w-72 items-center justify-center rounded-full bg-[var(--color-primary)] px-8 text-2xl font-medium text-white shadow-[0_12px_20px_-16px_rgba(9,40,57,0.85)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              Abrir en Google Maps
            </Link>
            <Link
              href="#footer"
              className="inline-flex h-14 min-w-72 items-center justify-center rounded-full bg-[#d7e8ee] px-8 text-2xl font-medium text-[var(--color-primary)] transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              Oficina de Turismo
            </Link>
          </div>
        </article>

        <aside className="overflow-hidden rounded-2xl border border-[#b8d3e3] bg-[#cae4eb] p-1.5 shadow-[0_18px_30px_-22px_rgba(15,23,42,0.55)]">
          <div className="relative h-[500px] overflow-hidden rounded-xl sm:h-[560px] lg:h-[615px]">
            <iframe
              title="Mapa de Villa del Dique"
              src="https://www.google.com/maps?output=embed&q=Villa+del+Dique+Cordoba"
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
