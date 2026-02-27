import Image from "next/image";

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

        <div className="self-start overflow-hidden rounded-xl shadow-[0_18px_30px_-22px_rgba(15,23,42,0.6)]">
          <div className="relative h-[460px] w-full overflow-hidden sm:h-[580px] lg:h-[760px]">
            <Image
              src="/historia.jpg"
              alt="Paisaje costero de Villa del Dique"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
