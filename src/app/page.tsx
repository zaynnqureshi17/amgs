import AOSProvider from "@/components/AOSProvider";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import StatsBar from "@/components/StatsBar";
import TransformSpace from "@/components/TransformSpace";
import AboutPreview from "@/components/AboutPreview";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <AOSProvider>
      <Header transparent />
      <main>
        <HeroSlider />
        <StatsBar />
        <TransformSpace />
        <AboutPreview />
        <Services />
        <Portfolio />
        <ClientLogos />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppWidget />
    </AOSProvider>
  );
}
