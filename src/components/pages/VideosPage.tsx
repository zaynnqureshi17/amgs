"use client";

import { FaPlay } from "react-icons/fa";

const videos = [
  {
    title: "Next Level Details in Interior Design",
    desc: "Come along with our team as we bring the details to life. Pay attention to the finishing touches.",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80",
  },
  {
    title: "Revamping 2000 sqft residential space",
    desc: "Detailed tour of the residential interior transformation project in DHA.",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&q=80",
  },
  {
    title: "Weekly site video at AMGYS",
    desc: "Follow along as we take you through our weekly site visit and progress updates.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80",
  },
  {
    title: "Office Interior Transformation",
    desc: "Watch how we transformed a bare corporate office into a productive workspace.",
    thumbnail: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=500&q=80",
  },
  {
    title: "Custom Furniture Making Process",
    desc: "Behind the scenes of our furniture manufacturing from raw materials to finished product.",
    thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    title: "Client Testimonial - Mr. Naveed",
    desc: "Hear from our client about their experience working with Rawts on their dream home.",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80",
  },
];

export default function VideosPage() {
  return (
    <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#080708]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Videos
          </h1>
          <div className="w-14 h-[2px] bg-[#080708] mx-auto mt-3 mb-3" />
          <p className="text-[#4c505b] text-sm max-w-lg mx-auto">
            Explore our collection of interior design videos, tutorials, and project showcases.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((v, i) => (
            <div
              key={i}
              className="group bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              {/* Thumbnail */}
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <FaPlay className="text-white text-sm ml-0.5" />
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="p-4">
                <h3 className="text-white text-sm font-semibold leading-snug mb-1.5 line-clamp-2">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-[12px] leading-relaxed line-clamp-2">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
