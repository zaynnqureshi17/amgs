"use client";

import { FaDraftingCompass, FaHammer, FaCouch } from "react-icons/fa";

const services = [
  {
    icon: FaDraftingCompass,
    title: "Interior Design & Architecture",
    image: "/images/service-design.jpg",
    items: [
      "Interior Designing",
      "Architectural Planning",
      "Landscape Designing",
      "Project Management & Consultancy",
    ],
  },
  {
    icon: FaHammer,
    title: "Interior Renovation",
    image: "/images/service-renovation.jpg",
    items: [
      "Corporate Offices",
      "Retail Outlets & Kiosks",
      "Residential Spaces",
    ],
  },
  {
    icon: FaCouch,
    title: "Furniture",
    image: "/images/service-furniture.jpg",
    items: [
      "Residential Furniture",
      "Office Furniture",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-[#E84520] text-[11px] sm:text-xs font-semibold tracking-[3px] uppercase">
            What We Offer
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#080708] mt-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Services
          </h2>
          <div className="w-14 h-[2px] bg-[#E84520] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 group"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-[#E84520] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white text-sm" />
                    </div>
                    <h3
                      className="text-base font-bold text-[#080708] leading-tight"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] text-[#4c505b]">
                        <span className="text-[#E84520] mt-[3px] flex-shrink-0">&#8250;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="inline-flex items-center text-[#E84520] font-semibold text-[13px] mt-5 gap-1.5 hover:gap-2.5 transition-all">
                    Get a Quote <span>&rarr;</span>
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
