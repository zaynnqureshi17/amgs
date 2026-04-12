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
];

export default function ClientLogos() {
  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="text-[#006A90] text-[11px] sm:text-xs font-semibold tracking-[3px] uppercase">
            Trusted By
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#080708] mt-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Clients
          </h2>
          <div className="w-14 h-[2px] bg-[#006A90] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 sm:gap-6 items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-2 sm:p-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={`/images/logos/${logo}`}
                alt="Client"
                className="max-h-[32px] sm:max-h-[40px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
