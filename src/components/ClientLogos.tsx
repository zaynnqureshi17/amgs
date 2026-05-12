"use client";

const logos = [
  "HBL.jpg",
  "UBL-FM-HD-Logo-1-1-1.png",
  "HSBC-Logo.png",
  "faysal-bank-logo-600x600.png",
  "JS BANK.jpg",
  "soneri-bank-logo.png",
  "al-baraka-bank-logo-png_seeklogo-496466.png",
  "MCB fund investment.jpg",
  "Colgate-Palmolive.jpg",
  "schlumberger.jpg",
  "Tapal_Tea.png",
  "Lakson_Group.png",
  "Lakson tobacco.png",
  "geo-logo.png",
  "getz-pharma.png",
  "Martin_Dow.png",
  "beaconhouse.jpg",
  "sana safinaz.png",
  "ten sport.png",
  "Titan_Watches_logo.png",
  "Suraj-Cotton-Mills.png",
  "microsoft.jpg",
  "optico opticians.jpg",
  "shaheen foundation PAF.jpg",
  "ACCA_logo.png",
  "amin adnan.jpg",
  "brady bread.jpg",
  "brooke bond.png",
  "clover.jpg",
  "cotton_and_silk_logo.jpg",
  "cybernet.jpg",
  "dadabhoy.jpg",
  "dalda.jpeg",
  "days inn.jpg",
  "Efroze.png",
  "ehad.jpg",
  "endrobe.jpg",
  "equity textile.jpg",
  "eura shipping agencies.jpg",
  "goethe institut.png",
  "i2 telecom.jpg",
  "ivolve.jpg",
  "jang.png",
  "malak.jpg",
  "maple pharma.png",
  "master oil.jpg",
  "naseem masala- recipe mix.jpg",
  "noble traders.avif",
  "oasis.jpg",
  "pakistan enginering concil.jpg",
  "pakvitae_logo.jpg",
  "patel hospital.jpg",
  "pharmacie plus.jpg",
  "prolog express line.jpg",
  "quice.png",
  "sana sarah salon.jpg",
  "shadman.jpg",
  "tetley.png",
  "tradkey.jpg",
  "ahm-securities.png",
];

export default function ClientLogos() {
  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="text-[#E84520] text-[11px] sm:text-xs font-semibold tracking-[3px] uppercase">
            Trusted By
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#080708] mt-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Clients
          </h2>
          <div className="w-14 h-[2px] bg-[#E84520] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 sm:gap-4">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-2 h-12 sm:h-14 opacity-80 hover:opacity-100 transition-opacity duration-300"
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 20, 300)}
            >
              <img
                src={`/images/logos/${logo}`}
                alt="Client"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
