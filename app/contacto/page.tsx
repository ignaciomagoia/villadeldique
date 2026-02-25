import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function ContactoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
