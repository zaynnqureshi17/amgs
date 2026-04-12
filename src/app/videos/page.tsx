import AOSProvider from "@/components/AOSProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import VideosPage from "@/components/pages/VideosPage";

export default function Videos() {
  return (
    <AOSProvider>
      <Header />
      <main>
        <VideosPage />
      </main>
      <Footer />
      <WhatsAppWidget />
    </AOSProvider>
  );
}
