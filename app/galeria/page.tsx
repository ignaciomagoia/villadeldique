import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Navbar } from "@/components/Navbar";

export default function GaleriaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
