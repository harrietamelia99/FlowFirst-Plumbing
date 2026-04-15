"use client";

import { Zap, Wrench, Search, Bath, Network, Flame } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const G = {
  light:  "linear-gradient(135deg, #e8f6fb 0%, #b8dced 100%)",
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
  dark:   "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)",
};

const services = [
  {
    icon: Zap,
    title: "Emergency plumbing",
    description:
      "Burst pipes, flooding or sudden leaks? We respond fast, 24 hours a day, 7 days a week, so you're never left in a crisis.",
    highlight: true,
  },
  {
    icon: Wrench,
    title: "General repairs",
    description:
      "From dripping taps to running toilets and everything in between. We diagnose and fix problems properly.",
    highlight: false,
  },
  {
    icon: Search,
    title: "Leak detection",
    description:
      "Finding hidden leaks before they cause serious damage — in walls, floors or anywhere else on the property.",
    highlight: false,
  },
  {
    icon: Bath,
    title: "Bathroom plumbing",
    description:
      "Full bathroom installations, en-suite fit-outs and upgrades. We handle everything from the initial plan through to a polished finish.",
    highlight: false,
  },
  {
    icon: Network,
    title: "Pipework & installations",
    description:
      "New builds, extensions or complete re-pipes. All types of pipework installed to current building standards.",
    highlight: false,
  },
  {
    icon: Flame,
    title: "Heating & maintenance",
    description:
      "Boiler servicing, radiator balancing and central heating maintenance to keep your system running well all year round.",
    highlight: false,
  },
];

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#1e1e1e]"
      aria-label="Our services"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span
            className="inline-block text-sm font-600 tracking-widest uppercase mb-3 bg-clip-text text-transparent"
            style={{ backgroundImage: G.medium }}
          >
            What we do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-700 text-white leading-tight tracking-tight mb-4">
            Everything we cover
          </h2>
          <p className="text-gray-400 text-lg">
            From emergency callouts to planned installations, we cover every
            aspect of residential and commercial plumbing.
          </p>
        </div>

        {/* Cards */}
        <div className="reveal-group grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-glow reveal group relative rounded-2xl overflow-hidden p-7 hover:-translate-y-1"
                style={
                  service.highlight
                    ? { background: G.dark, boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)" }
                    : { background: "#2a2a2a", boxShadow: "0 2px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)" }
                }
              >
                {/* Top accent strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: service.highlight ? "rgba(255,255,255,0.25)" : G.medium }}
                  aria-hidden="true"
                />

                {service.highlight && (
                  <>
                    {/* Shine overlay on highlighted card */}
                    <div
                      className="absolute top-0 left-0 right-0 h-24 opacity-15 pointer-events-none"
                      style={{ background: "linear-gradient(180deg, #9ee7f0 0%, transparent 100%)" }}
                    />
                    <span className="absolute top-4 right-4 text-[10px] font-700 bg-white/20 text-white px-2 py-1 rounded-full tracking-wider uppercase">
                      24/7
                    </span>
                  </>
                )}

                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-transform group-hover:scale-110"
                  style={
                    service.highlight
                      ? { background: "rgba(255,255,255,0.15)" }
                      : { background: G.light }
                  }
                >
                  <Icon
                    size={22}
                    className={service.highlight ? "text-white" : "text-[#2d5f78]"}
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="text-lg font-700 mb-2.5 text-white">
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.highlight ? "text-white/75" : "text-gray-400"
                  }`}
                >
                  {service.description}
                </p>

                {!service.highlight && (
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-600 text-[#9ee7f0] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
