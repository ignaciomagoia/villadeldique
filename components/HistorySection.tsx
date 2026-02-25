export function HistorySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <div className="grid gap-8 lg:grid-cols-[1.32fr_1fr]">
        <article className="space-y-8">
          <h1 className="text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
            Historia
          </h1>

          <p className="text-lg leading-relaxed text-slate-800 sm:text-xl">
            <span className="font-bold">Villa del Dique</span> nació en 1935, cuando{" "}
            <span className="font-bold">Mateo Osella y Enrique Marandino</span>{" "}
            imaginaron un poblado que{" "}
            <span className="font-semibold italic">
              mirara al agua como quien mira un futuro
            </span>
            . Desde entonces, la vida aquí late al ritmo del lago: amaneceres que
            se abren sobre un espejo celeste, tardes lentas que invitan a caminar,
            noches que huelen a fuego y conversación.
          </p>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-none text-[var(--color-primary)] sm:text-4xl">
              Su Patrona, Nuestra Señora de Pompeya
            </h2>
            <p className="text-lg leading-relaxed text-slate-800 sm:text-xl">
              Se celebra el 11 de octubre y recuerda esa fe sencilla que sostiene a
              la comunidad. El primer gran impulso llegó con el{" "}
              <span className="font-bold">embalse de Río Tercero</span>: el agua
              subió y con ella llegaron visitantes buscando{" "}
              <span className="font-semibold italic">
                tranquilidad, naturaleza y tiempo propio
              </span>
              . Entre 1974 y 1983, la construcción de la{" "}
              <span className="font-bold">Central Nuclear Embalse</span> trajo
              familias, oficios y comercio. El pueblo creció, pero no perdió su modo
              de <span className="font-semibold italic">hablar bajito</span>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-none text-[var(--color-primary)] sm:text-4xl">
              Crisis del 2001
            </h2>
            <p className="text-lg leading-relaxed text-slate-800 sm:text-xl">
              Nuevos proyectos volvieron a elegir estas orillas:{" "}
              <span className="font-bold">
                cabañas, residencias de verano y barrios
              </span>{" "}
              como Embalsina, Playa Grande, Villa Guadalupe y El Vallecito. Hoy,
              Villa del Dique se sigue mostrando solo a quien se detiene a mirar,
              dispuesto a{" "}
              <span className="font-semibold italic">conectar con lo esencial</span>.
            </p>
          </div>
        </article>

        <div className="rounded-xl bg-white p-2 shadow-[0_18px_30px_-22px_rgba(15,23,42,0.6)]">
          <div
            role="img"
            aria-label="Paisaje costero de Villa del Dique en formato placeholder"
            className="relative h-[460px] overflow-hidden rounded-lg bg-[linear-gradient(180deg,#0f1910_0%,#1b2a1a_42%,#10170f_100%)] sm:h-[580px] lg:h-[760px]"
          >
            <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(191,222,248,0.95),rgba(191,222,248,0))]" />
            <div className="absolute right-10 top-16 h-56 w-56 rounded-full bg-[#f6f8e4]/15 blur-2xl" />
            <div className="absolute inset-x-0 top-1/2 h-20 -translate-y-1/2 bg-[#efe8bf]/30 blur-lg" />
            <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-[linear-gradient(180deg,rgba(27,42,26,0),rgba(10,14,10,0.9))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
