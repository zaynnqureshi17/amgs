import AOSProvider from "@/components/AOSProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ContactPage from "@/components/pages/ContactPage";

export default function Contact() {
  return (
    <AOSProvider>
      <Header />
      <main>
        <ContactPage />
      </main>
      <Footer />
      <WhatsAppWidget />
    </AOSProvider>
  );
}
