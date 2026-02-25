import {
  House,
  Info,
  type LucideIcon,
  SunMedium,
  UtensilsCrossed,
} from "lucide-react";

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
            <li key={item.id} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-primary)] shadow-md sm:h-28 sm:w-28">
                <Icon className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <p className="text-lg font-medium text-[var(--color-primary)]">
                {item.label}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
