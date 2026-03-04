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

          <div className="pointer-events-none absolute -bottom-12 -left-9 z-20 hidden h-[18rem] w-[26rem] -scale-x-100 rotate-[162deg] md:block lg:-bottom-[5rem] lg:-left-12 lg:h-[21rem] lg:w-[30rem] xl:-bottom-[5.5rem] xl:h-[23rem] xl:w-[33rem]">
            <Image
              src="/siluetaazul.png"
              alt=""
              fill
              unoptimized
              sizes="(max-width: 768px) 320px, 480px"
              className="object-contain"
            />
          </div>

          <div className="relative z-30 pl-32 sm:pl-40 md:pl-60 md:pr-12 lg:pl-[22rem] lg:pr-14">
            <p className="text-3xl font-medium leading-none text-[var(--color-primary)] md:text-6xl lg:text-5xl">
              Conocé
            </p>
            <p className="text-4xl font-black leading-none text-[var(--color-primary)] md:text-8xl lg:text-7xl">
              Villa del Dique
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
