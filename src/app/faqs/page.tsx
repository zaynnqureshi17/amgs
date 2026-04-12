import AOSProvider from "@/components/AOSProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FaqsPage from "@/components/pages/FaqsPage";

export default function Faqs() {
  return (
    <AOSProvider>
      <Header />
      <main>
        <FaqsPage />
      </main>
      <Footer />
      <WhatsAppWidget />
    </AOSProvider>
  );
}
