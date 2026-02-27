import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TrailSection } from "@/components/TrailSection";

export default function SenderosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <TrailSection />
      </main>
      <Footer />
    </div>
  );
}
