"use client";

const timeline = [
  {
    date: "1979",
    title: "AMGYS Founded",
    desc: "Founded by Sohail Y. Minhas as a wood working and interior contracting firm in Karachi.",
    side: "left",
  },
  {
    date: "1980s",
    title: "Early Growth",
    desc: "Established reputation working under top interior design consultants and architects across Pakistan.",
    side: "right",
  },
  {
    date: "1990s",
    title: "Corporate Expansion",
    desc: "Expanded into corporate office interiors and turnkey projects for multinational companies.",
    side: "left",
  },
  {
    date: "2000s",
    title: "2nd Generation Joins",
    desc: "The second generation of the Minhas family joined operations, bringing fresh ideas and modern techniques.",
    side: "right",
  },
  {
    date: "2010s",
    title: "Retail & Kiosk Division",
    desc: "Launched specialized retail outlet and kiosk design division. Completed projects for Titan, Ten Sport, Tradekey and more.",
    side: "left",
  },
  {
    date: "2020",
    title: "3rd Generation & 150K+ Sq Ft",
    desc: "3rd generation takes the helm. Crossed 150,000 sq feet of projects delivered. Secured iVolve Technologies turnkey project.",
    side: "right",
  },
  {
    date: "2022-2024",
    title: "Major Projects Era",
    desc: "Completed UBL IT & IS (96 images worth of work), OPTICO flagship, Pak Vitae, Swiss Ligna Gloss, PROLOG, and many more landmark projects.",
    side: "left",
  },
  {
    date: "2025",
    title: "50+ Years & Counting",
    desc: "AMGYS celebrates over 5 decades of excellence with 60+ completed projects, 100+ satisfied clients, and operations in 4 cities across Pakistan.",
    side: "right",
  },
];

export default function OurStoryPage() {
  return (
    <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#080708]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            From Wood Working to Interior Excellence
          </h1>
          <p className="text-[#4c505b] text-sm mt-3">The Evolution of AMGYS Interiors</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-[2px] bg-gray-200" />

          <div className="space-y-10 sm:space-y-14">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-10 sm:pl-0" data-aos="fade-up">
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#006A90] border-2 border-white shadow z-10 top-1" />

                <div className={`sm:grid sm:grid-cols-2 sm:gap-10`}>
                  {/* Left */}
                  <div className={`${item.side === "right" ? "sm:text-right sm:pr-6" : "sm:pr-6"}`}>
                    {item.side === "left" ? (
                      <div>
                        <span
                          className="text-xl sm:text-2xl font-bold text-[#006A90] block mb-1"
                          style={{ fontFamily: "var(--font-playfair), serif" }}
                        >
                          {item.date}
                        </span>
                        <h3
                          className="text-base sm:text-lg font-bold text-[#080708] uppercase tracking-wide mb-2"
                          style={{ fontFamily: "var(--font-playfair), serif" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-[13px] text-[#4c505b] leading-relaxed">{item.desc}</p>
                      </div>
                    ) : (
                      <div className="hidden sm:flex sm:justify-end sm:items-start sm:pt-1">
                        <span
                          className="text-xl sm:text-2xl font-bold text-[#006A90]"
                          style={{ fontFamily: "var(--font-playfair), serif" }}
                        >
                          {item.date}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right */}
                  <div className={`${item.side === "left" ? "hidden sm:block" : "sm:pl-6"}`}>
                    {item.side === "right" ? (
                      <div>
                        <span
                          className="text-xl sm:text-2xl font-bold text-[#006A90] block mb-1 sm:hidden"
                          style={{ fontFamily: "var(--font-playfair), serif" }}
                        >
                          {item.date}
                        </span>
                        <h3
                          className="text-base sm:text-lg font-bold text-[#080708] uppercase tracking-wide mb-2"
                          style={{ fontFamily: "var(--font-playfair), serif" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-[13px] text-[#4c505b] leading-relaxed">{item.desc}</p>
                      </div>
                    ) : (
                      <div className="hidden sm:block sm:pt-1">
                        <span
                          className="text-xl sm:text-2xl font-bold text-[#006A90]"
                          style={{ fontFamily: "var(--font-playfair), serif" }}
                        >
                          {item.date}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
