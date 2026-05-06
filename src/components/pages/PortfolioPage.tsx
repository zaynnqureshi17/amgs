"use client";

import { useState, useEffect, useCallback } from "react";
import { FaTimes, FaSearchPlus, FaSearchMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = ["All Projects", "Corporate Offices", "Retail Outlets & Kiosks", "Residential Projects", "Furniture"];

const allProjects = [
  // ─── CORPORATE OFFICES ──────────────────────────────────────────────────────
  { title: "UBL Fund — North Nazimabad", year: "2026", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_nn/1.jpg",
    "/images/projects/corporate/ubl_nn/2.jpg",
    "/images/projects/corporate/ubl_nn/3.jpg",
    "/images/projects/corporate/ubl_nn/4.jpg",
  ]},
  { title: "UBL Funds IT & IS", year: "2024", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_it/1.jpg",
    "/images/projects/corporate/ubl_it/2.jpg",
    "/images/projects/corporate/ubl_it/3.jpg",
    "/images/projects/corporate/ubl_it/4.jpg",
  ]},
  { title: "Prolog Express Line", year: "2024", category: "Corporate Offices", images: [
    "/images/projects/corporate/prolog/1.jpg",
    "/images/projects/corporate/prolog/2.jpg",
    "/images/projects/corporate/prolog/3.jpg",
  ]},
  { title: "AHM Securities", year: "2023", category: "Corporate Offices", images: [
    "/images/projects/corporate/ahm/1.jpg",
    "/images/projects/corporate/ahm/2.jpg",
  ]},
  { title: "Liberty Daharki Power", year: "2023", category: "Corporate Offices", images: [
    "/images/projects/corporate/liberty/1.jpg",
    "/images/projects/corporate/liberty/2.jpg",
    "/images/projects/corporate/liberty/3.jpg",
    "/images/projects/corporate/liberty/4.jpg",
  ]},
  { title: "UBL Funds Cafeteria — 4th Floor", year: "2023", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_cafe_4th/1.jpg",
    "/images/projects/corporate/ubl_cafe_4th/2.jpg",
    "/images/projects/corporate/ubl_cafe_4th/3.jpg",
  ]},
  { title: "Tapal Tea", year: "2022", category: "Corporate Offices", images: [
    "/images/projects/corporate/tapal/1.jpg",
    "/images/projects/corporate/tapal/2.jpg",
    "/images/projects/corporate/tapal/3.jpg",
  ]},
  { title: "UBL Funds HR & MKT", year: "2022", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_hr/1.jpg",
    "/images/projects/corporate/ubl_hr/2.jpg",
    "/images/projects/corporate/ubl_hr/3.jpg",
    "/images/projects/corporate/ubl_hr/4.jpg",
  ]},
  { title: "Shaheen Complex Lobby", year: "2021", category: "Corporate Offices", images: [
    "/images/projects/corporate/shaheen/1.jpg",
    "/images/projects/corporate/shaheen/2.jpg",
    "/images/projects/corporate/shaheen/3.jpg",
    "/images/projects/corporate/shaheen/4.jpg",
  ]},
  { title: "MCB Funds Sales Office", year: "2020", category: "Corporate Offices", images: [
    "/images/projects/corporate/mcb_funds/1.jpg",
    "/images/projects/corporate/mcb_funds/2.jpg",
    "/images/projects/corporate/mcb_funds/3.jpg",
    "/images/projects/corporate/mcb_funds/4.jpg",
  ]},
  { title: "iVolve Technologies", year: "2020", category: "Corporate Offices", images: [
    "/images/projects/corporate/ivolve/1.jpg",
    "/images/projects/corporate/ivolve/2.jpg",
  ]},
  { title: "UBL Funds — Peshawar", year: "2019", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_peshawar/1.jpg",
    "/images/projects/corporate/ubl_peshawar/2.jpg",
    "/images/projects/corporate/ubl_peshawar/3.jpg",
    "/images/projects/corporate/ubl_peshawar/4.jpg",
  ]},
  { title: "Oasis Travels", year: "2011", category: "Corporate Offices", images: [
    "/images/projects/corporate/oasis/1.jpg",
    "/images/projects/corporate/oasis/2.jpg",
    "/images/projects/corporate/oasis/3.jpg",
    "/images/projects/corporate/oasis/4.jpg",
  ]},
  { title: "Tradekey Pakistan", year: "2011", category: "Corporate Offices", images: [
    "/images/projects/corporate/tradekey/1.jpg",
    "/images/projects/corporate/tradekey/2.jpg",
    "/images/projects/corporate/tradekey/3.jpg",
  ]},
  { title: "MultiTech", year: "2010", category: "Corporate Offices", images: [
    "/images/projects/corporate/multitech/1.jpg",
    "/images/projects/corporate/multitech/2.jpg",
  ]},
  { title: "I-2 Pakistan", year: "2010", category: "Corporate Offices", images: [
    "/images/projects/corporate/i2/1.jpg",
    "/images/projects/corporate/i2/2.jpg",
    "/images/projects/corporate/i2/3.jpg",
  ]},
  { title: "Haroon Travel", year: "2012", category: "Corporate Offices", images: [
    "/images/projects/corporate/haroon/1.jpg",
    "/images/projects/corporate/haroon/2.jpg",
    "/images/projects/corporate/haroon/3.jpg",
    "/images/projects/corporate/haroon/4.jpg",
  ]},
  { title: "Schlumberger Pakistan", year: "2013", category: "Corporate Offices", images: [
    "/images/projects/corporate/schlumberger/1.jpg",
    "/images/projects/corporate/schlumberger/2.jpg",
    "/images/projects/corporate/schlumberger/3.jpg",
    "/images/projects/corporate/schlumberger/4.jpg",
  ]},
  { title: "Medlife Clinics", year: "2013", category: "Corporate Offices", images: [
    "/images/projects/corporate/medlife/1.jpg",
    "/images/projects/corporate/medlife/2.jpg",
  ]},
  { title: "Ten Sports", year: "2014", category: "Corporate Offices", images: [
    "/images/projects/corporate/ten_sports/1.jpg",
    "/images/projects/corporate/ten_sports/2.jpg",
    "/images/projects/corporate/ten_sports/3.jpg",
    "/images/projects/corporate/ten_sports/4.jpg",
  ]},
  { title: "Lakson Group", year: "2008", category: "Corporate Offices", images: [
    "/images/projects/corporate/lakson/1.jpg",
    "/images/projects/corporate/lakson/2.jpg",
  ]},
  { title: "Master Oil", year: "2008", category: "Corporate Offices", images: [
    "/images/projects/corporate/master_oil/1.jpg",
    "/images/projects/corporate/master_oil/2.jpg",
    "/images/projects/corporate/master_oil/3.jpg",
  ]},
  { title: "Efroze Chemical", year: "2007", category: "Corporate Offices", images: [
    "/images/projects/corporate/efroze/1.jpg",
    "/images/projects/corporate/efroze/2.jpg",
    "/images/projects/corporate/efroze/3.jpg",
  ]},
  { title: "UBL Funds Cafeteria — 2nd Floor", year: "2025", category: "Corporate Offices", images: [
    "/images/projects/corporate/ubl_cafe_2nd/1.jpg",
    "/images/projects/corporate/ubl_cafe_2nd/2.jpg",
  ]},

  // ─── RETAIL OUTLETS & KIOSKS ────────────────────────────────────────────────
  { title: "OPTICO — The Opticians", year: "2023", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/optico/1.jpg",
    "/images/projects/retail/optico/2.jpg",
    "/images/projects/retail/optico/3.jpg",
    "/images/projects/retail/optico/4.jpg",
  ]},
  { title: "Ehad Pharmacy", year: "2023", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/ehad/1.jpg",
    "/images/projects/retail/ehad/2.jpg",
    "/images/projects/retail/ehad/3.jpg",
    "/images/projects/retail/ehad/4.jpg",
  ]},
  { title: "Edenrobe Beauty", year: "2024", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/edenrobe/1.jpeg",
    "/images/projects/retail/edenrobe/2.jpeg",
  ]},
  { title: "Swiss Ligna Gloss Display", year: "2024", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/swiss_ligna/1.jpg",
    "/images/projects/retail/swiss_ligna/2.jpg",
    "/images/projects/retail/swiss_ligna/3.jpg",
    "/images/projects/retail/swiss_ligna/4.jpg",
  ]},
  { title: "The Mins Bespoke", year: "2024", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/the_mins/1.jpg",
    "/images/projects/retail/the_mins/2.jpg",
    "/images/projects/retail/the_mins/3.jpg",
    "/images/projects/retail/the_mins/4.jpg",
  ]},
  { title: "Sana Sarah Salon & Spa", year: "2022", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/sana_sarah/1.jpg",
    "/images/projects/retail/sana_sarah/2.jpg",
    "/images/projects/retail/sana_sarah/3.jpg",
    "/images/projects/retail/sana_sarah/4.jpg",
  ]},
  { title: "Jewels", year: "2021", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/jewels/1.jpeg",
    "/images/projects/retail/jewels/2.jpeg",
    "/images/projects/retail/jewels/3.jpeg",
  ]},
  { title: "Ice Creamoo — Atrium Mall", year: "2018", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/ice_creamoo/1.jpg",
    "/images/projects/retail/ice_creamoo/2.jpg",
    "/images/projects/retail/ice_creamoo/3.jpg",
    "/images/projects/retail/ice_creamoo/4.jpg",
  ]},
  { title: "Mehran Food", year: "2018", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/mehran/1.jpg",
    "/images/projects/retail/mehran/2.jpg",
    "/images/projects/retail/mehran/3.jpg",
    "/images/projects/retail/mehran/4.jpg",
  ]},
  { title: "Ideas by Gul Ahmed", year: "2018", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/ideas/1.jpg",
  ]},
  { title: "Jubilee Takaful", year: "2017", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/jubilee/1.jpg",
    "/images/projects/retail/jubilee/2.jpg",
    "/images/projects/retail/jubilee/3.jpg",
    "/images/projects/retail/jubilee/4.jpg",
  ]},
  { title: "Pharmacie Plus", year: "2019", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/pharmacie/1.jpg",
  ]},
  { title: "Eat Festival Mezan", year: "2014", category: "Retail Outlets & Kiosks", images: [
    "/images/projects/retail/eat_mezan/1.jpg",
    "/images/projects/retail/eat_mezan/2.jpg",
  ]},

  // ─── RESIDENTIAL PROJECTS ───────────────────────────────────────────────────
  { title: "Mr. Saad Ahmed Bungalow", year: "2025", category: "Residential Projects", images: [
    "/images/projects/residential/saad/1.jpeg",
    "/images/projects/residential/saad/2.jpeg",
    "/images/projects/residential/saad/3.jpeg",
    "/images/projects/residential/saad/4.jpeg",
  ]},
  { title: "Mr. Kashif Rafi Bungalow", year: "2024", category: "Residential Projects", images: [
    "/images/projects/residential/kashif_rafi/1.jpeg",
    "/images/projects/residential/kashif_rafi/2.jpeg",
    "/images/projects/residential/kashif_rafi/3.jpeg",
    "/images/projects/residential/kashif_rafi/4.jpeg",
  ]},
  { title: "Mr. Umair Ahmed Apartment", year: "2023", category: "Residential Projects", images: [
    "/images/projects/residential/umair/1.jpeg",
    "/images/projects/residential/umair/2.jpeg",
    "/images/projects/residential/umair/3.jpeg",
    "/images/projects/residential/umair/4.jpeg",
  ]},
  { title: "Mr. Muhammad Imran Bungalow", year: "2021", category: "Residential Projects", images: [
    "/images/projects/residential/imran/1.jpg",
    "/images/projects/residential/imran/2.jpg",
    "/images/projects/residential/imran/3.jpg",
    "/images/projects/residential/imran/4.jpg",
  ]},

  // ─── FURNITURE ──────────────────────────────────────────────────────────────
  { title: "Office Furniture", year: "2024", category: "Furniture", images: [
    "/images/projects/furniture/office/1.jpg",
    "/images/projects/furniture/office/2.jpg",
    "/images/projects/furniture/office/3.jpg",
    "/images/projects/furniture/office/4.jpg",
    "/images/projects/furniture/office/5.jpg",
    "/images/projects/furniture/office/6.jpg",
  ]},
  { title: "Residential Furniture", year: "2024", category: "Furniture", images: [
    "/images/projects/furniture/residential/1.jpg",
    "/images/projects/furniture/residential/2.jpg",
    "/images/projects/furniture/residential/3.jpg",
    "/images/projects/furniture/residential/4.jpg",
    "/images/projects/furniture/residential/5.jpg",
    "/images/projects/furniture/residential/6.jpg",
  ]},
];

const folders = ["Corporate Offices", "Retail Outlets & Kiosks", "Residential Projects", "Furniture"];

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
