"use client";

import { Clock4, BadgePoundSterling, Award, SmilePlus } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const G = {
  light:  "linear-gradient(135deg, #e8f6fb 0%, #b8dced 100%)",
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
  dark:   "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)",
};

const benefits = [
  {
    icon: Clock4,
    title: "Fast & dependable response",
    description:
      "Plumbing problems don't wait for a convenient time. We're available around the clock for emergencies and aim to reach you within the hour across North Somerset and Bristol.",
    stat: "< 1hr",
    statLabel: "average response",
  },
  {
    icon: BadgePoundSterling,
    title: "Honest, transparent pricing",
    description:
      "No surprise charges or hidden fees. We provide a clear, upfront quote before any work begins and stick to it. What we say is what you pay.",
    stat: "0",
    statLabel: "hidden fees",
  },
  {
    icon: Award,
    title: "Quality workmanship",
    description:
      "With over 10 years' experience, we take pride in every job, big or small. All work is completed to a high standard and backed by a 12-month workmanship guarantee.",
    stat: "10+",
    statLabel: "years experience",
  },
  {
    icon: SmilePlus,
    title: "Friendly, professional service",
    description:
      "We treat your home with respect, keep you informed throughout, and always leave things clean and tidy. Reliable, approachable, and genuinely local.",
    stat: "5★",
    statLabel: "rated service",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-[#242424]"
      aria-label="Why choose us"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div className="reveal-left">
            <span
              className="inline-block text-sm font-600 tracking-widest uppercase mb-3 bg-clip-text text-transparent"
              style={{ backgroundImage: G.medium }}
            >
              Why FlowFirst
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-700 text-white leading-tight tracking-tight mb-6">
              Plumbing you can{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: G.medium, whiteSpace: "nowrap" }}>
                actually rely on
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We've built our reputation on turning up when we say we will,
              diagnosing problems accurately and completing quality work at a
              fair price. No call centres, no subcontractors. Just us.
            </p>

            <div
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ background: "linear-gradient(135deg, rgba(65,158,188,0.07) 0%, rgba(30,63,82,0.15) 100%)", boxShadow: "0 2px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(158,231,240,0.08)" }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl text-white flex-shrink-0"
                style={{ background: G.dark }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-700 text-white text-sm mb-0.5">Fully insured & experienced</p>
                <p className="text-gray-400 text-sm">
                  We hold full public liability insurance and have over 10
                  years of hands-on experience, so you're in safe hands.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Benefit cards */}
          <div className="reveal-group grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="reveal group bg-[#2c2c2c] rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  style={{
                    boxShadow: "0 2px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl transition-all group-hover:scale-110"
                      style={{ background: G.light }}
                    >
                      <Icon size={18} className="text-[#2d5f78]" strokeWidth={1.75} />
                    </div>
                    <div className="text-right">
                      <div
                        className="text-2xl font-700 leading-none bg-clip-text text-transparent"
                        style={{ backgroundImage: G.medium }}
                      >
                        {benefit.stat}
                      </div>
                      <div className="text-[10px] text-gray-500 font-500 uppercase tracking-wide mt-0.5">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-700 text-white text-base mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
