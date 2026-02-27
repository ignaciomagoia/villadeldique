import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NauticActivitiesSection } from "@/components/NauticActivitiesSection";

export default function ActividadesNauticasPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <NauticActivitiesSection />
      </main>
      <Footer />
    </div>
  );
}
