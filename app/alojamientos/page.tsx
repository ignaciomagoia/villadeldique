import { AccommodationSection } from "@/components/AccommodationSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function AlojamientosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <AccommodationSection />
      </main>
      <Footer />
    </div>
  );
}
