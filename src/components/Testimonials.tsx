"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Mr. Danish Azar Zuby",
    role: "Principal Architect, Daz Design Consultant",
    text: "Amgys Interiors has the ability to undertake difficult and complex tasks, I would recommend them for any medium to medium-large Interior projects.",
    rating: 5,
  },
  {
    name: "Mr. Zeeshan Saleem",
    role: "Head Admin & HR, Suraj Cotton Mills",
    text: "Amgys Interiors executed our 5000 Sq. feet Office space — a complete Turnkey Project. Their exposure in these areas was found satisfactory and they have the ability to handle difficult tasks in an efficient manner.",
    rating: 5,
  },
  {
    name: "Mr. Shahid Abdullah",
    role: "Founder & Principal Architect, Arshad, Shahid Abdulla (A.S.A.)",
    text: "Amgys Interiors has worked on our projects where Interior Design, Additions and Alterations work was involved. We have found their work quite satisfactory and recommend them.",
    rating: 5,
  },
  {
    name: "Mr. Yawar Jilani",
    role: "Principal Architect, ARCOP Associates Pakistan",
    text: "We found Amgys Interiors to be quality conscious and efficient contractors particularly in the area of wood work.",
    rating: 5,
  },
  {
    name: "Mr. Navaid Hussain",
    role: "Architect, Group1",
    text: "This is to certify that Amgys Interiors has worked out for our clients satisfactorily.",
    rating: 5,
  },
  {
    name: "Mr. Zulfiqar Paracha",
    role: "Chairman, Universal Corporation Pvt. Ltd. & ZP Homes",
    text: "We have a long working relationship with Amgys Interiors and their dedication, project management, and services are very professional.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/testimonials-ehad.jpg"
                alt="EHAD Pharmacy — AMGYS Interiors project"
                className="w-full h-[280px] sm:h-[360px] lg:h-[440px] object-cover"
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <span className="text-[#E84520] text-[11px] sm:text-xs font-semibold tracking-[3px] uppercase">
              Testimonials
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#080708] mt-3 mb-8 leading-snug"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              What Our Clients<br />Say About Us
            </h2>

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              loop
              spaceBetween={30}
              className="testimonial-swiper pb-12"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <FaQuoteLeft className="text-[#E84520]/20 text-2xl sm:text-3xl mb-4" />
                    <p className="text-[#4c505b] text-sm sm:text-[15px] leading-[1.8] mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <FaStar key={j} className="text-amber-400 text-xs" />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#E84520] flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        {t.name.charAt(4)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#080708] text-sm" style={{ fontFamily: "var(--font-playfair), serif" }}>{t.name}</p>
                        <p className="text-[#E84520] text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
