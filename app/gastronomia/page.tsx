import { Footer } from "@/components/Footer";
import { GastronomySection } from "@/components/GastronomySection";
import { Navbar } from "@/components/Navbar";

export default function GastronomiaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <GastronomySection />
      </main>
      <Footer />
    </div>
  );
}
