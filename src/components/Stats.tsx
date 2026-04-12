"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 350, suffix: "+", label: "Projects Completed" },
  { number: 15, suffix: "+", label: "Years Experience" },
  { number: 200, suffix: "+", label: "Happy Clients" },
  { number: 50, suffix: "+", label: "Team Members" },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center" data-aos="fade-up" data-aos-delay={i * 80}>
              <div
                className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-[#006A90] leading-none"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {inView ? <CountUp end={stat.number} duration={2.5} /> : "0"}
                <span>{stat.suffix}</span>
              </div>
              <p className="text-[10px] sm:text-xs text-[#4c505b] font-medium tracking-[2px] uppercase mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
