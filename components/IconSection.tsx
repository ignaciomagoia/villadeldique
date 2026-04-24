import Link from "next/link";

import { serviceItems } from "@/data/site-content";

const spriteBaseStyle = {
  backgroundImage: "url('/iconitos.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "899px 562px",
} as const;

const spritePositionByIcon: Record<string, string> = {
  home: "-146px -265px",
  utensils: "-305px -265px",
  info: "-456px -265px",
  activity: "-610px -265px",
};

export function IconSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-1 md:px-8 md:py-12">
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {serviceItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="group flex flex-col items-center gap-3 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
              aria-label={`Ir a ${item.label}`}
            >
              <span
                aria-hidden="true"
                className="h-28 w-28 scale-[0.82] rounded-full shadow-[0_10px_18px_-14px_rgba(15,23,42,0.85)] transition-transform duration-200 group-hover:scale-[0.86] sm:scale-100 sm:group-hover:scale-105"
                style={{
                  ...spriteBaseStyle,
                  backgroundPosition:
                    spritePositionByIcon[item.icon] ?? spritePositionByIcon.home,
                }}
              />
              <p className="text-base font-medium text-[var(--color-primary)] transition-colors duration-200 group-hover:text-[#085a73] sm:text-lg">
                {item.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
