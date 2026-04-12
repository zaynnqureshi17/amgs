"use client";

import { FaBuilding, FaStore, FaCouch, FaTools } from "react-icons/fa";

const services = [
  {
    icon: FaBuilding,
    title: "Corporate Interiors",
    description: "Turnkey interior solutions for corporate offices, designed for productivity and modern aesthetics.",
    image: "/images/projects/commercial/ubl_it_&_is_2024_interior.jpg",
  },
  {
    icon: FaStore,
    title: "Retail & Kiosks",
    description: "Eye-catching retail outlets and kiosk designs that elevate your brand presence in any mall or venue.",
    image: "/images/projects/kiosk/edenrobe_beauty_2024_kiosk.jpg",
  },
  {
    icon: FaTools,
    title: "Renovation",
    description: "Complete interior renovation services to transform existing spaces with modern finishes and layouts.",
    image: "/images/projects/commercial/the_mins_2024_renovation.jpg",
  },
  {
    icon: FaCouch,
    title: "Custom Furniture",
    description: "Bespoke furniture manufacturing for residential and corporate needs, built to your exact specifications.",
    image: "/images/projects/furniture/eleganz_luxury_2019_f.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-[#006A90] text-[11px] sm:text-xs font-semibold tracking-[3px] uppercase">
            What We Offer
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#080708] mt-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Services
          </h2>
          <div className="w-14 h-[2px] bg-[#006A90] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 group"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="h-[180px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-[#006A90] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white text-sm" />
                    </div>
                    <h3
                      className="text-base font-bold text-[#080708]"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-[#4c505b] leading-[1.7]">{s.description}</p>
                  <a href="/projects" className="inline-flex items-center text-[#006A90] font-semibold text-[13px] mt-4 gap-1.5 hover:gap-2.5 transition-all">
                    Learn More <span>&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
