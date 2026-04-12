"use client";

import { FaArrowRight } from "react-icons/fa";

const projects = [
  { title: "OPTICO", category: "Interior", image: "/images/projects/commercial/optico_2023_interior.jpg" },
  { title: "Pak Vitae", category: "Interior", image: "/images/projects/commercial/pak_vitae_2023_interior.jpg" },
  { title: "UBL IT & IS", category: "Interior", image: "/images/projects/commercial/ubl_it_&_is_2024_interior.jpg" },
  { title: "Edenrobe Beauty", category: "Kiosk", image: "/images/projects/kiosk/edenrobe_beauty_2024_kiosk.jpg" },
  { title: "AHM Securities", category: "Interior", image: "/images/projects/commercial/ahm_2023_interior.jpg" },
  { title: "Swiss Ligna Gloss", category: "Interior", image: "/images/projects/commercial/swiss_ligna_gloss_2024_interior.jpg" },
  { title: "iVolve Technologies", category: "Turnkey", image: "/images/projects/turnkey/ivolve_tecnologies_2020_tyrnkey.jpg" },
  { title: "Eleganz Luxury", category: "Furniture", image: "/images/projects/furniture/eleganz_luxury_2019_f.jpg" },
];

export default function Portfolio() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#181523]">
      <div className="text-center mb-12 px-6" data-aos="fade-up">
        <span className="text-[#006A90] text-[11px] sm:text-xs font-semibold tracking-[3px] uppercase">
          Portfolio
        </span>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Our Recent Projects
        </h2>
        <div className="w-14 h-[2px] bg-[#006A90] mx-auto mt-4" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {projects.map((p, i) => (
            <div key={i} className="portfolio-item relative group cursor-pointer overflow-hidden h-[200px] sm:h-[260px] lg:h-[300px]">
              <img src={p.image} alt={p.title} className="portfolio-img absolute inset-0 w-full h-full object-cover transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="portfolio-over absolute inset-0 bg-[#006A90]/75 opacity-0 transition-opacity duration-400 flex items-center justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <FaArrowRight className="text-white text-xs sm:text-sm" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                <span className="text-[#006A90] text-[9px] sm:text-[10px] font-semibold tracking-[2px] uppercase group-hover:text-white/70 transition-colors">{p.category}</span>
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-bold mt-1" style={{ fontFamily: "var(--font-playfair), serif" }}>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 sm:mt-12">
        <a href="/projects" className="inline-block border-2 border-[#006A90] text-[#006A90] px-8 py-3 rounded-full text-xs font-semibold tracking-[2px] hover:bg-[#006A90] hover:text-white transition-all duration-300 uppercase">
          View All Projects
        </a>
      </div>
    </section>
  );
}
