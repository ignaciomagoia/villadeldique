import Image from "next/image";

export function Banner() {
  return (
    <section className="px-4 pb-16 md:px-8">
      <div className="relative mx-auto w-full max-w-6xl overflow-visible">
        <div className="relative overflow-visible rounded-[1.8rem] bg-[var(--color-banner)] px-5 py-8 md:px-10">
          <div className="pointer-events-none absolute -left-20 top-1/2 z-20 h-[27rem] w-[20rem] -translate-y-1/2 rotate-[94deg] md:hidden">
            <Image
              src="/siluetaazul.png"
              alt=""
              fill
              unoptimized
              sizes="300px"
              className="object-contain"
            />
          </div>

          <div className="pointer-events-none absolute -left-32 top-1/2 z-20 hidden h-[33rem] w-[48rem] -translate-y-1/2 rotate-[168deg] md:block">
            <Image
              src="/siluetaazul.png"
              alt=""
              fill
              unoptimized
              sizes="(max-width: 768px) 320px, 560px"
              className="object-contain"
            />
          </div>

          <div className="relative z-30 pl-32 sm:pl-40 md:pl-72">
            <p className="text-4xl font-medium leading-none text-[var(--color-primary)] md:text-6xl">
              Conocé
            </p>
            <p className="text-5xl font-black leading-none text-[var(--color-primary)] md:text-8xl">
              Villa del Dique
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
