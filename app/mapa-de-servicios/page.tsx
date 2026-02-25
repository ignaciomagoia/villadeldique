import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ServiceMapSection } from "@/components/ServiceMapSection";

export default function MapaDeServiciosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <ServiceMapSection />
      </main>
      <Footer />
    </div>
  );
}
