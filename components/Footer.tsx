import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="footer" className="bg-[var(--color-footer)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-[auto_1fr_auto] md:items-center md:px-8">
        <Link
          href="/"
          aria-label="Volver al inicio"
          className="w-fit rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        >
          <Logo className="h-12 w-[116px]" />
        </Link>

        <div className="space-y-1 text-lg text-slate-800">
          <p>Av. Carril de los Chilenos, X5862 Villa del Dique</p>
          <p>Tel: 03546 52-8341 · Todos los días 8:30-20:00</p>
        </div>

        <div className="flex items-center gap-3 md:justify-self-end">
          <a
            href="#"
            aria-label="Instagram"
            className="rounded-full p-2 text-slate-800 transition hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            <Instagram className="h-7 w-7" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="rounded-full p-2 text-slate-800 transition hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            <Facebook className="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  );
}
