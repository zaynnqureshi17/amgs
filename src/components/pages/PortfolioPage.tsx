"use client";

import { useState, useEffect, useCallback } from "react";
import { FaTimes, FaSearchPlus, FaSearchMinus } from "react-icons/fa";

const categories = ["All Projects", "Interior & Renovation", "Kiosk", "Turnkey", "Furniture"];

const allProjects = [
  { title: "UBL Cafeteria", year: "2025", category: "Interior & Renovation", image: "/images/projects/commercial/ubl_cafeteria_2025_interior.jpg" },
  { title: "Edenrobe Beauty", year: "2024", category: "Kiosk", image: "/images/projects/kiosk/edenrobe_beauty_2024_kiosk.jpg" },
  { title: "UBL IT & IS", year: "2024", category: "Interior & Renovation", image: "/images/projects/commercial/ubl_it_&_is_2024_interior.jpg" },
  { title: "UBL Day Care", year: "2024", category: "Interior & Renovation", image: "/images/projects/commercial/ubl_day_care_2024_renovate.jpg" },
  { title: "Swiss Ligna Gloss", year: "2024", category: "Interior & Renovation", image: "/images/projects/commercial/swiss_ligna_gloss_2024_interior.jpg" },
  { title: "PROLOG Express", year: "2024", category: "Interior & Renovation", image: "/images/projects/commercial/prolog_2024_interior.jpg" },
  { title: "The Mins", year: "2024", category: "Interior & Renovation", image: "/images/projects/commercial/the_mins_2024_renovation.jpg" },
  { title: "OPTICO", year: "2023", category: "Interior & Renovation", image: "/images/projects/commercial/optico_2023_interior.jpg" },
  { title: "Pak Vitae", year: "2023", category: "Interior & Renovation", image: "/images/projects/commercial/pak_vitae_2023_interior.jpg" },
  { title: "AHM Securities", year: "2023", category: "Interior & Renovation", image: "/images/projects/commercial/ahm_2023_interior.jpg" },
  { title: "UBL Fund Managers — HR", year: "2022", category: "Interior & Renovation", image: "/images/projects/commercial/ubl_fund_managers_-_hr_department_2022_interior.jpg" },
  { title: "Sana Sarah Salon", year: "2022", category: "Interior & Renovation", image: "/images/projects/commercial/sana_sarah's_salon_2022_interior.jpg" },
  { title: "Ehad Pharmacy", year: "2022", category: "Interior & Renovation", image: "/images/projects/commercial/ehad_pharmacy_2022_interior.jpg" },
  { title: "Malak", year: "2022", category: "Interior & Renovation", image: "/images/projects/commercial/malak_2022_interior.jpg" },
  { title: "Tapal", year: "2022", category: "Interior & Renovation", image: "/images/projects/commercial/tapal_2022_interior.jpg" },
  { title: "Jewels", year: "2021", category: "Kiosk", image: "/images/projects/kiosk/jewels_2021_kiosk.jpg" },
  { title: "iVolve Technologies", year: "2020", category: "Turnkey", image: "/images/projects/turnkey/ivolve_tecnologies_2020_tyrnkey.jpg" },
  { title: "UBL", year: "2020", category: "Interior & Renovation", image: "/images/projects/commercial/ubl.jpg" },
  { title: "MCB (Arif Habib)", year: "2020", category: "Interior & Renovation", image: "/images/projects/commercial/mcb_(arif_habib_saving)_2020_i,r.jpg" },
  { title: "Rameeza Naviwala", year: "2020", category: "Furniture", image: "/images/projects/furniture/rameeza_naviwala_2020_furniture.jpeg" },
  { title: "Pharmacie Plus", year: "2019", category: "Interior & Renovation", image: "/images/projects/commercial/phermacie_plus_2019_i,r.jpg" },
  { title: "Al Baraka Bank", year: "2019", category: "Furniture", image: "/images/projects/furniture/al_baraka_2019_f.jpeg" },
  { title: "Eleganz Luxury", year: "2019", category: "Furniture", image: "/images/projects/furniture/eleganz_luxury_2019_f.jpg" },
  { title: "Quice Food", year: "2019", category: "Furniture", image: "/images/projects/furniture/quice_food_2019_f.jpg" },
  { title: "Ice Creamoo", year: "2018", category: "Kiosk", image: "/images/projects/kiosk/ice_creamoo_-_atrium_mall_2018_kiosk.jpg" },
  { title: "Mehran Food", year: "2018", category: "Kiosk", image: "/images/projects/kiosk/mehran_food_2018_kisok.jpg" },
  { title: "Soneri Bank", year: "2018", category: "Furniture", image: "/images/projects/furniture/sonari_bank_2018_f.jpg" },
  { title: "Jubilee Takaful", year: "2017", category: "Kiosk", image: "/images/projects/kiosk/jubilee_takaful_2017_kiosk.jpg" },
  { title: "Cotton & Silk", year: "2017", category: "Interior & Renovation", image: "/images/projects/commercial/cotten_and_silk_2017_i,r.jpg" },
  { title: "Suraj Cotton Mill", year: "2016", category: "Turnkey", image: "/images/projects/turnkey/suraj_cotten_mill_2016_turnkey.jpg" },
  { title: "Eat Festival Mezan", year: "2014", category: "Kiosk", image: "/images/projects/kiosk/eat_fastival_mezan_2014_kiosk.jpg" },
  { title: "Ten Sport", year: "2014", category: "Turnkey", image: "/images/projects/turnkey/ten_sport_2014_turnkey.jpg" },
  { title: "Titan Watches", year: "2014", category: "Turnkey", image: "/images/projects/turnkey/titan_watches_2014_turnkey.jpg" },
  { title: "Med Life (Dr. Nadir Shah)", year: "2013", category: "Interior & Renovation", image: "/images/projects/commercial/med_life_dr_nadir_shah_2013_i,r.jpg" },
  { title: "Schlumberger", year: "2013", category: "Interior & Renovation", image: "/images/projects/commercial/schlumbergur_2013_i,r.jpg" },
  { title: "Tradekey Pakistan", year: "2011", category: "Turnkey", image: "/images/projects/turnkey/tradekey_pakistan_2011_turnkey.jpg" },
];

const folders = ["Interior & Renovation", "Kiosk", "Turnkey", "Furniture"];

type Project = (typeof allProjects)[number];

function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.25, 3));
    if (e.key === "-") setZoom((z) => Math.max(z - 0.25, 1));
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex flex-col"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="text-white font-semibold text-sm">{project.title}</p>
          <p className="text-white/60 text-xs">{project.category} · {project.year}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoom((z) => Math.max(z - 0.25, 1))}
            disabled={zoom <= 1}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30 transition-colors"
          >
            <FaSearchMinus className="text-sm" />
          </button>
          <span className="text-white/70 text-xs w-10 text-center">{Math.round(zoom * 100)}%</span>
          <button
            onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}
            disabled={zoom >= 3}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30 transition-colors"
          >
            <FaSearchPlus className="text-sm" />
          </button>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors ml-2"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Image */}
      <div
        className="flex-1 overflow-auto flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{ transform: `scale(${zoom})`, transformOrigin: "center center", transition: "transform 0.2s ease" }}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          draggable={false}
        />
      </div>
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
        src={p.image}
        alt={p.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <FaSearchPlus className="text-white text-sm" />
        </div>
      </div>
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
