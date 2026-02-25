import { Footer } from "@/components/Footer";
import { HowToGetSection } from "@/components/HowToGetSection";
import { Navbar } from "@/components/Navbar";

export default function ComoLlegasPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <HowToGetSection />
      </main>
      <Footer />
    </div>
  );
}
