import {
  House,
  Info,
  type LucideIcon,
  SunMedium,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";

import { serviceItems } from "@/data/site-content";

const iconMap: Record<string, LucideIcon> = {
  home: House,
  utensils: UtensilsCrossed,
  activity: SunMedium,
  info: Info,
};

export function IconSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {serviceItems.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className="group flex flex-col items-center gap-3 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                aria-label={`Ir a ${item.label}`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-primary)] shadow-md transition-transform duration-200 group-hover:scale-105 sm:h-28 sm:w-28">
                  <Icon className="h-10 w-10 text-white sm:h-12 sm:w-12" />
                </div>
                <p className="text-lg font-medium text-[var(--color-primary)] transition-colors duration-200 group-hover:text-[#085a73]">
                  {item.label}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
