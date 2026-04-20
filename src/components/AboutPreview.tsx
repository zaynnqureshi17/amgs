"use client";

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div data-aos="fade-right">
            <span className="text-[#E84520] text-[11px] sm:text-xs font-semibold tracking-[3px] uppercase">
              About AMGYS
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#080708] mt-3 mb-5 leading-snug"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              5 Decades of Interior<br />Excellence
            </h2>
            <div className="w-12 h-[2px] bg-[#E84520] mb-5" />
            <p className="text-[#4c505b] text-sm leading-[1.8] mb-4">
              AMGYS Interiors have successfully managed 5 decades (50+ years) of
              existence in the field of wood working and interior contracting. The company
              is currently operated by the 3rd generation of the founding members.
            </p>
            <p className="text-[#4c505b] text-sm leading-[1.8] mb-7">
              We specialize in turnkey interior renovation projects — corporate offices,
              retail outlets, cafes & restaurants, and customized furniture manufacturing
              for residential and commercial spaces.
            </p>
            <div className="flex gap-8 mb-7">
              {[
                { val: "50+", label: "Years" },
                { val: "60+", label: "Projects" },
                { val: "100+", label: "Clients" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <span
                    className="text-2xl font-bold text-[#E84520] block"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {item.val}
                  </span>
                  <span className="text-[10px] text-[#4c505b] tracking-[1px] uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="/about"
              className="inline-block bg-[#E84520] text-white px-8 py-3 rounded-full text-xs font-semibold tracking-[2px] uppercase hover:bg-[#C83A15] transition-colors"
            >
              More About Us
            </a>
          </div>

          {/* Image */}
          <div data-aos="fade-left">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/projects/commercial/ahm_2023_interior.jpg"
                alt="AMGYS Interiors project"
                className="w-full h-[300px] sm:h-[380px] lg:h-[440px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
