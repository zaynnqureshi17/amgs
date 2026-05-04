"use client";

import { useState, useEffect, useCallback } from "react";
import { FaTimes, FaSearchPlus, FaSearchMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = ["All Projects", "Interior & Renovation", "Kiosk", "Turnkey", "Furniture"];

const allProjects = [
  { title: "UBL Cafeteria", year: "2023", category: "Interior & Renovation", images: [
    "/images/projects/commercial/ubl_cafeteria/1.jpg",
    "/images/projects/commercial/ubl_cafeteria/2.jpg",
    "/images/projects/commercial/ubl_cafeteria/3.jpg",
    "/images/projects/commercial/ubl_cafeteria/4.jpg",
  ]},
  { title: "Edenrobe Beauty", year: "2024", category: "Kiosk", images: [
    "/images/projects/kiosk/edenrobe/1.jpeg",
    "/images/projects/kiosk/edenrobe/2.jpeg",
    "/images/projects/kiosk/edenrobe/3.jpeg",
    "/images/projects/kiosk/edenrobe/4.jpeg",
  ]},
  { title: "UBL IT & IS", year: "2024", category: "Interior & Renovation", images: [
    "/images/projects/commercial/ubl_it_is/1.jpg",
    "/images/projects/commercial/ubl_it_is/2.jpg",
    "/images/projects/commercial/ubl_it_is/3.jpg",
    "/images/projects/commercial/ubl_it_is/4.jpg",
  ]},
  { title: "UBL Day Care", year: "2024", category: "Interior & Renovation", images: [
    "/images/projects/commercial/ubl_day_care/1.jpg",
    "/images/projects/commercial/ubl_day_care/2.jpg",
    "/images/projects/commercial/ubl_day_care/3.jpg",
    "/images/projects/commercial/ubl_day_care/4.jpg",
  ]},
  { title: "Swiss Ligna Gloss", year: "2024", category: "Interior & Renovation", images: [
    "/images/projects/commercial/swiss_ligna/1.jpg",
    "/images/projects/commercial/swiss_ligna/2.jpg",
    "/images/projects/commercial/swiss_ligna/3.jpg",
    "/images/projects/commercial/swiss_ligna/4.jpg",
  ]},
  { title: "PROLOG Express", year: "2024", category: "Interior & Renovation", images: [
    "/images/projects/commercial/prolog/1.jpg",
    "/images/projects/commercial/prolog/2.jpg",
    "/images/projects/commercial/prolog/3.jpg",
    "/images/projects/commercial/prolog/4.jpg",
  ]},
  { title: "The Mins", year: "2024", category: "Interior & Renovation", images: [
    "/images/projects/commercial/the_mins/1.jpg",
    "/images/projects/commercial/the_mins/2.jpg",
    "/images/projects/commercial/the_mins/3.jpg",
    "/images/projects/commercial/the_mins/4.jpg",
  ]},
  { title: "OPTICO", year: "2023", category: "Interior & Renovation", images: [
    "/images/projects/commercial/optico/1.jpg",
    "/images/projects/commercial/optico/2.jpg",
    "/images/projects/commercial/optico/3.jpg",
    "/images/projects/commercial/optico/4.jpg",
  ]},
  { title: "Pak Vitae", year: "2023", category: "Interior & Renovation", images: [
    "/images/projects/commercial/pak_vitae/1.jpg",
    "/images/projects/commercial/pak_vitae/2.jpg",
    "/images/projects/commercial/pak_vitae/3.jpg",
    "/images/projects/commercial/pak_vitae/4.jpg",
  ]},
  { title: "AHM Securities", year: "2023", category: "Interior & Renovation", images: [
    "/images/projects/commercial/ahm/1.jpg",
    "/images/projects/commercial/ahm/2.jpg",
    "/images/projects/commercial/ahm/3.jpg",
    "/images/projects/commercial/ahm/4.jpg",
  ]},
  { title: "UBL Fund Managers — HR", year: "2022", category: "Interior & Renovation", images: [
    "/images/projects/commercial/ubl_fund_managers/1.jpg",
    "/images/projects/commercial/ubl_fund_managers/2.jpg",
    "/images/projects/commercial/ubl_fund_managers/3.jpg",
    "/images/projects/commercial/ubl_fund_managers/4.jpg",
  ]},
  { title: "Sana Sarah Salon", year: "2022", category: "Interior & Renovation", images: [
    "/images/projects/commercial/sana_sarah/1.jpg",
    "/images/projects/commercial/sana_sarah/2.jpg",
    "/images/projects/commercial/sana_sarah/3.jpg",
    "/images/projects/commercial/sana_sarah/4.jpg",
  ]},
  { title: "Ehad Pharmacy", year: "2022", category: "Interior & Renovation", images: [
    "/images/projects/commercial/ehad_pharmacy/1.jpg",
    "/images/projects/commercial/ehad_pharmacy/2.jpg",
    "/images/projects/commercial/ehad_pharmacy/3.jpg",
    "/images/projects/commercial/ehad_pharmacy/4.jpg",
  ]},
  { title: "Malak", year: "2022", category: "Interior & Renovation", images: [
    "/images/projects/commercial/malak/1.jpg",
    "/images/projects/commercial/malak/2.jpg",
    "/images/projects/commercial/malak/3.jpg",
    "/images/projects/commercial/malak/4.jpg",
  ]},
  { title: "Tapal", year: "2022", category: "Interior & Renovation", images: [
    "/images/projects/commercial/tapal/1.jpg",
    "/images/projects/commercial/tapal/2.jpg",
    "/images/projects/commercial/tapal/3.jpg",
  ]},
  { title: "Jewels", year: "2021", category: "Kiosk", images: [
    "/images/projects/kiosk/jewels/1.jpeg",
    "/images/projects/kiosk/jewels/2.jpeg",
    "/images/projects/kiosk/jewels/3.jpeg",
  ]},
  { title: "iVolve Technologies", year: "2020", category: "Turnkey", images: [
    "/images/projects/turnkey/ivolve/1.jpg",
    "/images/projects/turnkey/ivolve/2.jpg",
    "/images/projects/turnkey/ivolve/3.jpg",
    "/images/projects/turnkey/ivolve/4.jpg",
  ]},
  { title: "UBL", year: "2020", category: "Interior & Renovation", images: [
    "/images/projects/commercial/ubl.jpg",
  ]},
  { title: "MCB (Arif Habib)", year: "2020", category: "Interior & Renovation", images: [
    "/images/projects/commercial/mcb/1.jpg",
    "/images/projects/commercial/mcb/2.jpg",
    "/images/projects/commercial/mcb/3.jpg",
    "/images/projects/commercial/mcb/4.jpg",
  ]},
  { title: "Rameeza Naviwala", year: "2020", category: "Furniture", images: [
    "/images/projects/furniture/rameeza/1.jpeg",
    "/images/projects/furniture/rameeza/2.jpeg",
    "/images/projects/furniture/rameeza/3.jpeg",
    "/images/projects/furniture/rameeza/4.jpeg",
  ]},
  { title: "Pharmacie Plus", year: "2019", category: "Interior & Renovation", images: [
    "/images/projects/commercial/pharmacie_plus/1.jpeg",
  ]},
  { title: "Al Baraka Bank", year: "2019", category: "Furniture", images: [
    "/images/projects/furniture/al_baraka/1.jpeg",
    "/images/projects/furniture/al_baraka/2.jpeg",
    "/images/projects/furniture/al_baraka/3.jpeg",
    "/images/projects/furniture/al_baraka/4.jpeg",
  ]},
  { title: "Eleganz Luxury", year: "2019", category: "Furniture", images: [
    "/images/projects/furniture/eleganz/1.jpg",
    "/images/projects/furniture/eleganz/2.jpg",
    "/images/projects/furniture/eleganz/3.jpg",
    "/images/projects/furniture/eleganz/4.jpg",
  ]},
  { title: "Quice Food", year: "2019", category: "Furniture", images: [
    "/images/projects/furniture/quice_food/1.jpg",
    "/images/projects/furniture/quice_food/2.jpg",
    "/images/projects/furniture/quice_food/3.jpg",
    "/images/projects/furniture/quice_food/4.jpeg",
  ]},
  { title: "Ice Creamoo", year: "2018", category: "Kiosk", images: [
    "/images/projects/kiosk/ice_creamoo/1.jpg",
    "/images/projects/kiosk/ice_creamoo/2.jpg",
    "/images/projects/kiosk/ice_creamoo/3.jpg",
    "/images/projects/kiosk/ice_creamoo/4.jpg",
  ]},
  { title: "Mehran Food", year: "2018", category: "Kiosk", images: [
    "/images/projects/kiosk/mehran_food/1.jpg",
    "/images/projects/kiosk/mehran_food/2.jpg",
    "/images/projects/kiosk/mehran_food/3.jpg",
    "/images/projects/kiosk/mehran_food/4.jpg",
  ]},
  { title: "Soneri Bank", year: "2018", category: "Furniture", images: [
    "/images/projects/furniture/soneri/1.jpg",
    "/images/projects/furniture/soneri/2.jpg",
    "/images/projects/furniture/soneri/3.jpg",
  ]},
  { title: "Jubilee Takaful", year: "2017", category: "Kiosk", images: [
    "/images/projects/kiosk/jubilee/1.jpg",
    "/images/projects/kiosk/jubilee/2.jpg",
    "/images/projects/kiosk/jubilee/3.jpg",
    "/images/projects/kiosk/jubilee/4.jpg",
  ]},
  { title: "Cotton & Silk", year: "2017", category: "Interior & Renovation", images: [
    "/images/projects/commercial/cotton_silk/1.jpg",
    "/images/projects/commercial/cotton_silk/2.jpg",
    "/images/projects/commercial/cotton_silk/3.jpg",
    "/images/projects/commercial/cotton_silk/4.jpg",
  ]},
  { title: "Suraj Cotton Mill", year: "2016", category: "Turnkey", images: [
    "/images/projects/turnkey/suraj/1.jpg",
  ]},
  { title: "Eat Festival Mezan", year: "2014", category: "Kiosk", images: [
    "/images/projects/kiosk/eat_festival/1.jpg",
    "/images/projects/kiosk/eat_festival/2.jpg",
    "/images/projects/kiosk/eat_festival/3.jpg",
  ]},
  { title: "Ten Sport", year: "2014", category: "Turnkey", images: [
    "/images/projects/turnkey/ten_sport/1.jpg",
    "/images/projects/turnkey/ten_sport/2.jpg",
    "/images/projects/turnkey/ten_sport/3.jpg",
    "/images/projects/turnkey/ten_sport/4.jpg",
  ]},
  { title: "Titan Watches", year: "2014", category: "Turnkey", images: [
    "/images/projects/turnkey/titan/1.jpg",
    "/images/projects/turnkey/titan/2.jpeg",
  ]},
  { title: "Med Life (Dr. Nadir Shah)", year: "2013", category: "Interior & Renovation", images: [
    "/images/projects/commercial/med_life/1.jpg",
    "/images/projects/commercial/med_life/2.jpg",
    "/images/projects/commercial/med_life/3.jpeg",
  ]},
  { title: "Schlumberger", year: "2013", category: "Interior & Renovation", images: [
    "/images/projects/commercial/schlumberger/1.jpg",
    "/images/projects/commercial/schlumberger/2.jpg",
    "/images/projects/commercial/schlumberger/3.jpg",
    "/images/projects/commercial/schlumberger/4.jpg",
  ]},
  { title: "Tradekey Pakistan", year: "2011", category: "Turnkey", images: [
    "/images/projects/turnkey/tradekey/1.jpg",
    "/images/projects/turnkey/tradekey/2.jpg",
    "/images/projects/turnkey/tradekey/3.jpg",
    "/images/projects/turnkey/tradekey/4.jpeg",
  ]},
];

const folders = ["Interior & Renovation", "Kiosk", "Turnkey", "Furniture"];

type Project = (typeof allProjects)[number];

function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  const [idx, setIdx] = useState(0);
  const total = project.images.length;

  const prev = useCallback(() => { setZoom(1); setIdx((i) => (i - 1 + total) % total); }, [total]);
  const next = useCallback(() => { setZoom(1); setIdx((i) => (i + 1) % total); }, [total]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.25, 3));
    if (e.key === "-") setZoom((z) => Math.max(z - 0.25, 1));
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }, [onClose, prev, next]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col" onClick={onClose}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="text-white font-semibold text-sm">{project.title}</p>
          <p className="text-white/60 text-xs">{project.category} · {project.year}{total > 1 ? ` · ${idx + 1}/${total}` : ""}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setZoom((z) => Math.max(z - 0.25, 1))} disabled={zoom <= 1}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30 transition-colors">
            <FaSearchMinus className="text-sm" />
          </button>
          <span className="text-white/70 text-xs w-10 text-center">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom((z) => Math.min(z + 0.25, 3))} disabled={zoom >= 3}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30 transition-colors">
            <FaSearchPlus className="text-sm" />
          </button>
          <button onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors ml-2">
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Image area */}
      <div className="flex-1 overflow-auto flex items-center justify-center p-4 relative" onClick={(e) => e.stopPropagation()}>
        {total > 1 && (
          <button onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10">
            <FaChevronLeft />
          </button>
        )}
        <img
          src={project.images[idx]}
          alt={project.title}
          style={{ transform: `scale(${zoom})`, transformOrigin: "center center", transition: "transform 0.2s ease" }}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          draggable={false}
        />
        {total > 1 && (
          <button onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10">
            <FaChevronRight />
          </button>
        )}
      </div>

      {/* Dot indicators */}
      {total > 1 && (
        <div className="flex justify-center gap-1.5 pb-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          {project.images.map((_, i) => (
            <button key={i} onClick={() => { setZoom(1); setIdx(i); }}
              className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-[#E84520] scale-125" : "bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, i, onOpen }: { p: Project; i: number; onOpen: (p: Project) => void }) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
      data-aos="fade-up"
      data-aos-delay={Math.min(i * 30, 200)}
      onClick={() => onOpen(p)}
    >
      <img
        src={p.images[0]}
        alt={p.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <FaSearchPlus className="text-white text-sm" />
        </div>
      </div>
      {p.images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded-full backdrop-blur-sm">
          {p.images.length} photos
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-xs font-semibold">{p.title}</p>
        <p className="text-white/75 text-[10px] tracking-wide">{p.year}</p>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState("All Projects");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  return (
    <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-white min-h-screen">
      {lightbox && <Lightbox project={lightbox} onClose={() => setLightbox(null)} />}

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#080708]" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Projects
          </h1>
          <p className="text-[#4c505b] text-sm mt-3 max-w-lg mx-auto">
            AMGYS Interiors team works closely with clients throughout the design
            process to ensure that their vision becomes a reality — always going the extra
            mile to exceed expectations.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-[1px] transition-all border ${
                active === cat
                  ? "bg-[#1a1a2e] text-white border-[#1a1a2e]"
                  : "bg-white text-[#4c505b] border-gray-300 hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {active === "All Projects" ? (
          <div className="space-y-14">
            {folders.map((folder) => {
              const items = allProjects.filter((p) => p.category === folder);
              if (items.length === 0) return null;
              return (
                <div key={folder}>
                  <div className="flex items-baseline justify-between mb-5 border-b border-gray-200 pb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#080708]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                      {folder}
                    </h2>
                    <span className="text-[11px] text-[#4c505b] tracking-wider uppercase">
                      {items.length} projects
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {items.map((p, i) => (
                      <ProjectCard key={`${p.title}-${i}`} p={p} i={i} onOpen={setLightbox} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {allProjects
              .filter((p) => p.category === active)
              .map((p, i) => (
                <ProjectCard key={`${p.title}-${i}`} p={p} i={i} onOpen={setLightbox} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
