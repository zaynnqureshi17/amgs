import AOSProvider from "@/components/AOSProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import OurStoryPage from "@/components/pages/OurStoryPage";

export default function OurStory() {
  return (
    <AOSProvider>
      <Header />
      <main>
        <OurStoryPage />
      </main>
      <Footer />
      <WhatsAppWidget />
    </AOSProvider>
  );
}
