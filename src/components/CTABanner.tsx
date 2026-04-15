"use client";

import { Phone, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const G = {
  light:  "linear-gradient(135deg, #e8f6fb 0%, #b8dced 100%)",
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
  dark:   "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)",
  banner: "linear-gradient(135deg, #2d5f78 0%, #1e3f52 50%, #142d3d 100%)",
};

export default function CTABanner() {
  const sectionRef = useScrollReveal();

  return (
    <section
      aria-label="Call to action"
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{ background: G.banner }}
      ref={sectionRef}
    >
      {/* Top shine */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, #9ee7f0 50%, transparent 100%)" }}
      />

      {/* Decorative blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: G.medium }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: G.light }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#9ee7f0 1px, transparent 1px), linear-gradient(to right, #9ee7f0 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <span className="block h-px w-8 shrink-0" style={{ background: G.medium }} />
          <span className="text-[0.7rem] font-700 tracking-[0.2em] uppercase text-[#9ee7f0]">
            Available now · Emergency response
          </span>
          <span className="block h-px w-8 shrink-0" style={{ background: G.medium }} />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-white leading-tight tracking-tight mb-5">
          Need a plumber?{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: G.medium }}>
            We're ready
          </span>{" "}
          when you are.
        </h2>

        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
          Whether it's a planned installation, an urgent repair, or a full
          bathroom renovation, get in touch and we'll arrange a visit to assess
          the job properly before giving you a clear, honest price.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center justify-center gap-2.5 px-8 py-4 font-700 rounded-xl shadow-xl hover:opacity-90 hover:shadow-2xl transition-all duration-200 text-base group"
            style={{ background: G.medium, color: "#1e3f52" }}
          >
            Get a Free Quote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/447946113945?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20a%20plumbing%20job."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-white/20 hover:border-[#9ee7f0]/60 text-white font-700 rounded-xl hover:bg-white/5 transition-all duration-200 text-base"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#9ee7f0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Message on WhatsApp
          </a>
          <a
            href="tel:+447946113945"
            className="inline-flex items-center justify-center gap-2 px-5 py-4 text-gray-400 hover:text-gray-200 font-600 transition-colors duration-200 text-sm"
          >
            <Phone size={15} className="text-[#9ee7f0]" />
            or call us
          </a>
        </div>

        <p className="mt-8 text-sm text-white/35">
          Free quotes · No call-out charge for quotes · Guaranteed workmanship
        </p>
      </div>
    </section>
  );
}
