"use client";

import { Phone, ArrowRight, Shield, CheckCircle, Zap } from "lucide-react";
import WaterEffect from "./WaterEffect";

const trustPoints = [
  { icon: Zap, label: "Fast Response" },
  { icon: Shield, label: "Fully Insured" },
  { icon: CheckCircle, label: "Reliable Service" },
];

const G = {
  light:  "linear-gradient(135deg, #e8f6fb 0%, #b8dced 100%)",
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
  dark:   "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)",
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#242424]"
      aria-label="Hero section"
    >
      <WaterEffect />

      {/* Readability vignette over water */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 30% 50%, transparent 20%, rgba(36,36,36,0.55) 100%)" }}
        aria-hidden="true"
      />


      {/* Background decorative blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full opacity-10 blur-3xl"
          style={{ background: G.medium }}
        />
        <div
          className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full opacity-6 blur-3xl"
          style={{ background: G.dark }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Emergency label */}
            <div className="flex items-center gap-3 mb-7 animate-fade-in">
              <span className="block h-px w-8 shrink-0" style={{ background: G.medium }} />
              <span className="text-[0.7rem] font-700 tracking-[0.2em] uppercase text-[#9ee7f0]">
                24/7 Emergency Callouts Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-700 text-white leading-[1.1] tracking-tight mb-6 animate-fade-up">
              Reliable plumbing,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: G.medium }}
              >
                done right first time
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-[480px] animate-fade-up delay-100">
              We're an independent plumbing service based in Shipham with
              over 10 years' experience. Covering North Somerset, Bath &amp; North
              East Somerset, Sedgemoor and Bristol.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-10 animate-fade-up delay-200">
              <a
                href="#contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-600 rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200 group w-full sm:w-auto"
                style={{ background: G.dark }}
              >
                Get a Free Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/447946113945?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20a%20plumbing%20job."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/8 text-white font-600 rounded-xl hover:bg-white/12 transition-all duration-200 w-full sm:w-auto"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ee7f0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Message us
              </a>
              <a
                href="tel:+447946113945"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-gray-500 hover:text-gray-300 text-sm font-500 transition-colors duration-200 w-full sm:w-auto"
              >
                <Phone size={14} />
                or call
              </a>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 animate-fade-up delay-300">
              {trustPoints.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-lg"
                    style={{ background: "linear-gradient(135deg, rgba(158,231,240,0.12) 0%, rgba(65,158,188,0.18) 100%)" }}
                  >
                    <Icon size={14} className="text-[#9ee7f0]" />
                  </span>
                  <span className="font-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Service visual */}
          <div className="relative animate-slide-right delay-200 hidden lg:block">
            <div className="relative">

              {/* Card wrapper */}
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)" }}
              >
                <img
                  src="/hero-bathroom.jpg"
                  alt="Bathroom installation by FlowFirst Plumbing"
                  className="w-full h-[420px] object-cover block"
                />
              </div>

              {/* Floating review card */}
              <div
                className="absolute -bottom-6 -left-8 rounded-2xl shadow-xl p-4 flex items-center gap-3 w-60"
                style={{ background: "#2c2c2c", boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)" }}
              >
                <div className="flex -space-x-2">
                  {[G.light, G.medium, G.dark].map((grad, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#2c2c2c] flex items-center justify-center text-xs font-700"
                      style={{ background: grad, color: i === 0 ? "#2d5f78" : "white" }}
                    >
                      {["S", "M", "T"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[11px] text-gray-400 font-500">5.0 · 200+ reviews</p>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2.5"
                style={{ background: "#2c2c2c", boxShadow: "0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#9ee7f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <div className="text-[10px] font-600 text-gray-500 uppercase tracking-wide leading-none mb-0.5">Public liability</div>
                  <div className="text-sm font-700 text-white leading-none">Fully insured</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-600 animate-fade-in delay-600">
        <span className="text-xs font-500 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full animate-bounce" style={{ background: G.medium }} />
        </div>
      </div>
    </section>
  );
}
