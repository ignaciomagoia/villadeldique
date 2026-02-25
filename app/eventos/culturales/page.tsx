import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { culturalEvents } from "@/data/site-content";

export default function EventosCulturalesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <EventsSection
          title="Eventos Culturales"
          subtitle="Enterate de las actividades más divertidas, concurridas y por días"
          items={culturalEvents}
        />
      </main>
      <Footer />
    </div>
  );
}
