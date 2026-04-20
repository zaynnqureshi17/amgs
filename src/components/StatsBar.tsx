"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 500, suffix: "K", label: "Sq. Feet of Projects Delivered" },
  { number: 400, suffix: "+", label: "Projects Worked On" },
  { number: 10, suffix: "+", label: "Cities Nationwide" },
  { number: 400, suffix: "+", label: "Clients Served" },
];

export default function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-[#f5f5f5] border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#E84520] leading-none"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {inView ? <CountUp end={stat.number} duration={2} /> : "0"}
                <span>{stat.suffix}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#4c505b] mt-2 tracking-[1px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
