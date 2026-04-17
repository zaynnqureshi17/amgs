"use client";

const management = [
  { name: "Sohail Y. Minhas", role: "Founder & CEO", qual: "Diploma Associate Engineering 1978" },
  { name: "Zaigham Minhas", role: "Chief Operating Officer", qual: "MBA Finance" },
  { name: "Syed Talha Ali", role: "Senior Manager Projects", qual: "MPA-MHRM" },
  { name: "Nehal Ahmed", role: "Operations", qual: "" },
];

const supervisory = [
  { dept: "Carpentry", staff: "Muhammad Sharif (40 yrs), Rana Amir (22 yrs), Dilshad Mirza (20 yrs)" },
  { dept: "Polish & Paint", staff: "Zaheer Hussain (40 yrs), Jan Muhammad (20 yrs), Rao Saeed" },
  { dept: "Cushion & Upholstery", staff: "Muhammad Ramzan (20 yrs), Muhammad Fayyaz (25 yrs), Abdul Rahman (35 yrs)" },
  { dept: "Electrical", staff: "Muhammad Iqbal (18 yrs), Rehan Baig (10 yrs)" },
  { dept: "Plumbing", staff: "Rana Liaquat (35 yrs), Fazal Mahmood" },
  { dept: "Civil", staff: "Muhammad Ilyas (25 yrs), Muhammad Mustafa (10 yrs)" },
];

export default function AboutUsPage() {
  return (
    <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#080708]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Get The Best Interior Designer
          </h1>
          <p className="text-[#4c505b] text-sm mt-3 max-w-md mx-auto">
            Contact our interior designer team to make your space beautiful
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#006A90] text-white px-7 py-2.5 rounded-full text-xs font-semibold tracking-[1px] mt-5 hover:bg-[#005573] transition-colors"
          >
            Get Start
          </a>
        </div>

        {/* Hero + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-xl overflow-hidden shadow-lg mb-16">
          <div className="lg:col-span-3">
            <img
              src="/images/projects/commercial/optico_2023_interior.jpg"
              alt="AMGYS Interior project"
              className="w-full h-[250px] sm:h-[320px] lg:h-full object-cover"
            />
          </div>
          <div className="lg:col-span-2 bg-[#006A90] p-8 sm:p-10 flex flex-col justify-center gap-8">
            {[
              { val: "1979", label: "Established" },
              { val: "400+", label: "Clients Served" },
              { val: "500K+", label: "Sq. Feet Delivered" },
            ].map((s) => (
              <div key={s.label}>
                <span className="text-3xl sm:text-4xl font-bold text-white block" style={{ fontFamily: "var(--font-playfair), serif" }}>{s.val}</span>
                <span className="text-white/70 text-xs tracking-[1px]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vision / Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#f7f7f7] rounded-xl p-6 sm:p-8" data-aos="fade-right">
            <h3 className="text-xl font-bold text-[#080708] mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>Our Vision</h3>
            <p className="text-[#4c505b] text-sm leading-[1.8]">
              To be the most admired company engaged in providing its consumers a wide
              array of interior and exterior infrastructure products.
            </p>
          </div>
          <div className="bg-[#f7f7f7] rounded-xl p-6 sm:p-8" data-aos="fade-left">
            <h3 className="text-xl font-bold text-[#080708] mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>Mission Statement</h3>
            <p className="text-[#4c505b] text-sm leading-[1.8]">
              We will fulfil our vision by delivering sustainable value to our customers
              and stakeholders by providing a wide array of products with the best-in-class
              technology delivered by the best-in-class people, fostering long-haul partnerships.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-16 max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h3 className="text-xl sm:text-2xl font-bold text-[#080708] mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>Our Heritage</h3>
          <p className="text-[#4c505b] text-sm leading-[1.8]">
            AMGYS Interiors have successfully managed 5 decades (50+ years) of existence
            in the field of wood working and interior contracting. The company is currently
            operated by the 3rd generation of the founding members under the guidance of the
            business founder and CEO. We specialize in turnkey interior renovation projects
            — corporate offices, retail outlets, cafes & restaurants, and customized furniture
            manufacturing for residential and corporate offices. It is a great privilege that
            the company has the honor of working under the guidance of top interior design
            consultants and architects, since 1979.
          </p>
        </div>

        {/* Management */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#080708] mb-6 text-center" style={{ fontFamily: "var(--font-playfair), serif" }}>Management Staff</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {management.map((m, i) => (
              <div key={i} className="bg-[#f7f7f7] rounded-xl p-5 text-center" data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="w-14 h-14 rounded-full bg-[#006A90] flex items-center justify-center text-white font-bold text-lg mx-auto mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  {m.name.charAt(0)}
                </div>
                <p className="font-semibold text-sm text-[#080708]" style={{ fontFamily: "var(--font-playfair), serif" }}>{m.name}</p>
                <p className="text-[11px] text-[#006A90] font-medium mt-0.5">{m.role}</p>
                {m.qual && <p className="text-[10px] text-[#4c505b] mt-1">{m.qual}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Supervisory */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#080708] mb-6 text-center" style={{ fontFamily: "var(--font-playfair), serif" }}>Supervisory Staff</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supervisory.map((s, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4" data-aos="fade-up" data-aos-delay={i * 50}>
                <p className="font-semibold text-sm text-[#006A90] mb-1">{s.dept}</p>
                <p className="text-[12px] text-[#4c505b] leading-relaxed">{s.staff}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
