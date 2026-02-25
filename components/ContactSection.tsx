"use client";

import { type FormEvent, useState } from "react";
import { Facebook, Instagram } from "lucide-react";

export function ContactSection() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.reset();
    setIsSent(true);
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <article>
          <h1 className="text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
            Contactanos
          </h1>

          <form
            onSubmit={handleSubmit}
            onChange={() => {
              if (isSent) {
                setIsSent(false);
              }
            }}
            className="mt-4 rounded-lg border border-slate-300 bg-[#c4d9e7] p-4"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="nombre" className="text-xl text-slate-700">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Rellenar"
                  className="mt-1 h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-lg text-slate-900 placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                />
              </div>

              <div>
                <label htmlFor="apellido" className="text-xl text-slate-700">
                  Apellido
                </label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  required
                  placeholder="Rellenar"
                  className="mt-1 h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-lg text-slate-900 placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xl text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Rellenar"
                  className="mt-1 h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-lg text-slate-900 placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="text-xl text-slate-700">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  required
                  minLength={10}
                  placeholder="Rellenar"
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-lg text-slate-900 placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 h-12 w-full rounded-lg bg-[var(--color-primary)] text-xl font-medium text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              Enviar
            </button>
            <p
              role="status"
              aria-live="polite"
              className={`mt-2 text-base font-medium ${
                isSent ? "text-[var(--color-primary)]" : "text-transparent"
              }`}
            >
              Mensaje enviado. Te responderemos a la brevedad.
            </p>
          </form>
        </article>

        <aside className="space-y-7">
          <div>
            <h2 className="text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
              Oficina de turismo
            </h2>
            <div className="mt-4 space-y-3 text-xl leading-tight text-slate-900 sm:text-[2.1rem]">
              <p>Av. Carril de los Chilenos, X5862 Villa del Dique</p>
              <p>Tel: 03546528341</p>
              <p>Todos los días 8:30-20:00</p>
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-extrabold leading-none text-[var(--color-primary)] sm:text-6xl">
              Redes Sociales
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-xl text-slate-900 sm:text-[2.1rem]">
                <Instagram className="h-10 w-10 text-slate-800" />
                <span>Villadeldique.cba</span>
              </li>
              <li className="flex items-center gap-3 text-xl text-slate-900 sm:text-[2.1rem]">
                <Facebook className="h-10 w-10 text-slate-800" />
                <span>Villa del Dique</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
