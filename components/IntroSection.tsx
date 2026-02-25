export function IntroSection() {
  return (
    <section id="intro" className="mx-auto w-full max-w-6xl px-4 pb-14 pt-24 md:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl bg-white p-2 shadow-[0_14px_30px_-22px_rgba(15,23,42,0.6)]">
          <div
            role="img"
            aria-label="Foto de presentación de actividades acuáticas en formato placeholder"
            className="h-72 w-full rounded-[1.35rem] bg-[radial-gradient(circle_at_68%_8%,rgba(255,255,255,0.45),transparent_48%),linear-gradient(160deg,#89a8c4_0%,#aac6df_45%,#7892a9_100%)] sm:h-[360px] lg:h-[420px]"
          />
        </div>

        <p className="text-3xl leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-[3rem]">
          <span className="font-bold">Villa del Dique</span> es un lugar que se
          muestra solo a quien se{" "}
          <span className="font-semibold italic">detiene a mirarlo</span>, a
          quien está dispuesto a conectar con lo{" "}
          <span className="font-extrabold">esencial</span>.
        </p>
      </div>
    </section>
  );
}
