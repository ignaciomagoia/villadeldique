import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <span className={`relative inline-block ${className ?? "h-11 w-[108px]"}`}>
      <Image
        src="/iconovdd.png"
        alt="Logo de Villa del Dique"
        fill
        unoptimized
        sizes="116px"
        className="object-contain"
      />
    </span>
  );
}
