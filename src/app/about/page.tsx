import AOSProvider from "@/components/AOSProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import AboutUsPage from "@/components/pages/AboutUsPage";

export default function About() {
  return (
    <AOSProvider>
      <Header />
      <main>
        <AboutUsPage />
      </main>
      <Footer />
      <WhatsAppWidget />
    </AOSProvider>
  );
}
