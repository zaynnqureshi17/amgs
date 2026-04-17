"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Project Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Type: ${form.projectType}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:Info@amgys.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus("sent");
      setForm(initial);
    }, 800);
  };

  return (
    <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#080708]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Start Your Project
          </h1>
          <p className="text-[#4c505b] text-sm mt-3 max-w-md mx-auto">
            Tell us about your vision — our team will get back to you with a
            tailored proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-[#f7f7f7] rounded-xl p-6 sm:p-8"
            data-aos="fade-right"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#4c505b] tracking-[1px] uppercase mb-1.5">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm text-[#080708] focus:outline-none focus:border-[#006A90] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#4c505b] tracking-[1px] uppercase mb-1.5">
                  Phone *
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm text-[#080708] focus:outline-none focus:border-[#006A90] transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[11px] font-semibold text-[#4c505b] tracking-[1px] uppercase mb-1.5">
                Email *
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm text-[#080708] focus:outline-none focus:border-[#006A90] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#4c505b] tracking-[1px] uppercase mb-1.5">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm text-[#080708] focus:outline-none focus:border-[#006A90] transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="Interior & Renovation">Interior & Renovation</option>
                  <option value="Turnkey">Turnkey</option>
                  <option value="Kiosk">Kiosk</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#4c505b] tracking-[1px] uppercase mb-1.5">
                  Estimated Budget
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm text-[#080708] focus:outline-none focus:border-[#006A90] transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="Under 1M">Under PKR 1M</option>
                  <option value="1M-5M">PKR 1M – 5M</option>
                  <option value="5M-20M">PKR 5M – 20M</option>
                  <option value="20M+">PKR 20M+</option>
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-[11px] font-semibold text-[#4c505b] tracking-[1px] uppercase mb-1.5">
                Project Details *
              </label>
              <textarea
                required
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your space, requirements and timeline..."
                className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-sm text-[#080708] focus:outline-none focus:border-[#006A90] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto bg-[#006A90] text-white px-8 py-3 rounded-full text-xs font-semibold tracking-[2px] uppercase hover:bg-[#005573] transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Thank you!" : "Submit Project"}
            </button>
          </form>

          {/* Info */}
          <div className="lg:col-span-2 space-y-5" data-aos="fade-left">
            <div className="bg-[#006A90] text-white rounded-xl p-6 sm:p-7">
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Get in touch
              </h3>
              <div className="space-y-4 text-sm">
                <a
                  href="mailto:Info@amgys.com"
                  className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <FaEnvelope className="mt-0.5 flex-shrink-0" />
                  <span>Info@amgys.com</span>
                </a>
                <a
                  href="tel:+923101191787"
                  className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <FaPhone className="mt-0.5 flex-shrink-0" />
                  <span>0310-1191787</span>
                </a>
                <a
                  href="https://wa.me/923101191787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <FaWhatsapp className="mt-0.5 flex-shrink-0" />
                  <span>WhatsApp 0310-1191787</span>
                </a>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-0.5 flex-shrink-0" />
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </div>

            <div className="bg-[#f7f7f7] rounded-xl p-6 sm:p-7">
              <h4
                className="text-base font-bold text-[#080708] mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                What happens next?
              </h4>
              <ol className="text-[13px] text-[#4c505b] space-y-2 leading-relaxed list-decimal list-inside">
                <li>We review your requirements within 24 hours.</li>
                <li>Our team contacts you to discuss the scope.</li>
                <li>We schedule a site visit and share a tailored proposal.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
