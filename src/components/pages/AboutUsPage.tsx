"use client";

const management = [
  { name: "Sohail Y. Minhas", role: "Chief Executive Officer", qual: "Diploma Associate Engineering 1978", photo: "/images/staff/sohail.jpeg" },
  { name: "Zaigham Minhas", role: "Chief Operating Officer", qual: "MBA Finance", photo: "/images/staff/zaigham.jpg" },
  { name: "Danish Minhas (Late)", role: "Director Business Operations", qual: "", photo: "/images/staff/danish.jpg" },
  { name: "Syed Talha Ali", role: "Senior Manager Projects", qual: "MPA-MHRM", photo: "/images/staff/talha.jpeg" },
  { name: "Nehal Ahmed", role: "Operations", qual: "", photo: "/images/staff/nehal.jpeg" },
  { name: "M. Qasim", role: "Visualizer & 3D Designer", qual: "", photo: "/images/staff/qasim.jpeg" },
  { name: "Arsala Kanwal", role: "Lead Architect", qual: "", photo: null },
];

const supervisory = [
  { dept: "Carpentry", staff: ["Muhammad Sharif (40 yrs)", "Rana Amir (22 yrs)", "Dilshad Mirza (20 yrs)"] },
  { dept: "Polish & Paint", staff: ["Zaheer Hussain (40 yrs)", "Rao Saeed (30 yrs)", "Jan Muhammad (20 yrs)"] },
  { dept: "Cushion & Upholstery", staff: ["Abdul Rahman (35 yrs)", "Muhammad Fayyaz (25 yrs)", "Muhammad Ramzan (20 yrs)"] },
  { dept: "Electrical", staff: ["Muhammad Iqbal (18 yrs)", "Rehan Baig (10 yrs)"] },
  { dept: "Plumbing", staff: ["Rana Liaquat (35 yrs)", "Fazal Mahmood (25 yrs)"] },
  { dept: "Civil", staff: ["Muhammad Ilyas (25 yrs)", "Muhammad Mustafa (10 yrs)"] },
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
            className="inline-block bg-[#E84520] text-white px-7 py-2.5 rounded-full text-xs font-semibold tracking-[1px] mt-5 hover:bg-[#C83A15] transition-colors"
          >
            Get Start
          </a>
        </div>

        {/* Hero + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-xl overflow-hidden shadow-lg mb-16">
          <div className="lg:col-span-3">
            <img
              src="/images/about-cafe.jpg"
              alt="AMGYS Interior project"
              className="w-full h-[250px] sm:h-[320px] lg:h-full object-cover"
            />
          </div>
          <div className="lg:col-span-2 bg-[#E84520] p-8 sm:p-10 flex flex-col justify-center gap-8">
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
                {m.photo ? (
                  <img src={m.photo} alt={m.name}
                    className="w-20 h-20 rounded-full object-cover object-top mx-auto mb-3 border-2 border-white shadow-md" />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-[#E84520] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    {m.name.charAt(0)}
                  </div>
                )}
                <p className="font-semibold text-sm text-[#080708]" style={{ fontFamily: "var(--font-playfair), serif" }}>{m.name}</p>
                <p className="text-[11px] text-[#E84520] font-medium mt-0.5">{m.role}</p>
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
                <p className="font-semibold text-sm text-[#E84520] mb-2">{s.dept}</p>
                <ul className="space-y-1">
                  {s.staff.map((person, j) => (
                    <li key={j} className="text-[12px] text-[#4c505b]">{person}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
