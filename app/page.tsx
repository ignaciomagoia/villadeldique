import { Banner } from "@/components/Banner";
import { CTAButton } from "@/components/CTAButton";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconSection } from "@/components/IconSection";
import { IntroSection } from "@/components/IntroSection";
import { Navbar } from "@/components/Navbar";
import { TravelCards } from "@/components/TravelCards";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntroSection />
        <IconSection />
        <CTAButton />
        <Banner />
        <TravelCards />
      </main>
      <Footer />
    </div>
  );
}
