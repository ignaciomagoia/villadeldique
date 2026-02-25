"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navigationItems } from "@/data/site-content";

import { Logo } from "./Logo";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-primary)]/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          aria-label="Inicio"
          className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Logo className="h-11 w-[108px]" />
        </Link>

        <button
          type="button"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((prev) => !prev);
            if (mobileOpen) {
              setOpenDropdown(null);
            }
          }}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav
          aria-label="Menú principal"
          className="hidden items-center gap-2 text-white md:flex"
        >
          {navigationItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseLeave={() => {
                if (openDropdown === item.label) {
                  setOpenDropdown(null);
                }
              }}
            >
              {item.dropdown ? (
                <>
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onClick={() =>
                      setOpenDropdown((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-lg font-medium transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label ? (
                    <div className="absolute left-0 top-full min-w-52 pt-2">
                      <ul className="rounded-xl border border-[#b8d3e3] bg-[#d7e8f1] p-1.5 text-base text-[var(--color-primary)] shadow-[0_14px_22px_-16px_rgba(9,40,57,0.75)]">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2 font-medium transition hover:bg-white/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-lg font-medium transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {mobileOpen ? (
        <nav
          aria-label="Menú móvil"
          className="border-t border-white/20 bg-[var(--color-primary)] md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4">
            {navigationItems.map((item) => (
              <li key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openDropdown === item.label}
                      onClick={() =>
                        setOpenDropdown((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label ? (
                      <ul className="mt-2 rounded-lg border border-[#b8d3e3] bg-[#d7e8f1] p-1.5">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              onClick={closeMenus}
                              className="block rounded-md px-3 py-2 text-sm font-medium text-[var(--color-primary)] transition hover:bg-white/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
