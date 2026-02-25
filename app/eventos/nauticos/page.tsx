import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { nauticEvents } from "@/data/site-content";

export default function EventosNauticosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <EventsSection
          title="Eventos Náuticos"
          subtitle="Enterate de los eventos acuáticos, tanto competencias como actividades recreativas."
          items={nauticEvents}
        />
      </main>
      <Footer />
    </div>
  );
}
