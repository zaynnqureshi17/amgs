import AOSProvider from "@/components/AOSProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import PortfolioPage from "@/components/pages/PortfolioPage";

export default function Projects() {
  return (
    <AOSProvider>
      <Header />
      <main>
        <PortfolioPage />
      </main>
      <Footer />
      <WhatsAppWidget />
    </AOSProvider>
  );
}
