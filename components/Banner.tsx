import Image from "next/image";

export function Banner() {
  return (
    <section className="px-4 pb-16 md:px-8">
      <div className="relative mx-auto w-full max-w-6xl overflow-visible">
        <div className="relative overflow-visible rounded-[1.8rem] bg-[var(--color-banner)] px-5 py-8 md:px-10">
          <div className="pointer-events-none absolute -left-16 top-1/2 z-20 h-56 w-80 -translate-y-1/2 md:-left-24 md:h-[22rem] md:w-[34rem]">
            <Image
              src="/siluetaazul.png"
              alt=""
              fill
              unoptimized
              sizes="(max-width: 768px) 256px, 416px"
              className="object-contain"
            />
          </div>

          <div className="relative z-30 pl-24 sm:pl-36 md:pl-72">
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
