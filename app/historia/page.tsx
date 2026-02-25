import { Footer } from "@/components/Footer";
import { HistorySection } from "@/components/HistorySection";
import { Navbar } from "@/components/Navbar";

export default function HistoriaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <HistorySection />
      </main>
      <Footer />
    </div>
  );
}
