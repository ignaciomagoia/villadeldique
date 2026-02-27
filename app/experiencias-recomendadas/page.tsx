import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RecommendedExperiencesSection } from "@/components/RecommendedExperiencesSection";

export default function ExperienciasRecomendadasPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <RecommendedExperiencesSection />
      </main>
      <Footer />
    </div>
  );
}
