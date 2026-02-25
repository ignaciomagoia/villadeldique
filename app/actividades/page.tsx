import { ActivitiesSection } from "@/components/ActivitiesSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function ActividadesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <ActivitiesSection />
      </main>
      <Footer />
    </div>
  );
}
