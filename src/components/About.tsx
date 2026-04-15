"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const G = {
  light:  "linear-gradient(135deg, #e8f6fb 0%, #b8dced 100%)",
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
  dark:   "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)",
};

const milestones = [
  { target: 2016, suffix: "",  label: "Est.",              start: 2000 },
  { target: 500,  suffix: "+", label: "Jobs completed",    start: 0 },
  { target: 10,   suffix: "+", label: "Years' experience", start: 0 },
  { target: 5,    suffix: "★", label: "Rated",             start: 0 },
];

function CounterStat({ target, suffix, label, start }: typeof milestones[0]) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !ran.current) {
        ran.current = true;
        const duration = 1600;
        const startTime = performance.now();
        const range = target - start;
        const tick = (now: number) => {
          const p = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(start + eased * range));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, start]);

  return (
    <div
      ref={ref}
      className="bg-[#2c2c2c] rounded-2xl p-4 text-center transition-all"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)" }}
    >
      <div
        className="text-xl font-700 leading-none mb-1 bg-clip-text text-transparent tabular-nums"
        style={{ backgroundImage: G.medium }}
      >
        {count}{suffix}
      </div>
      <div className="text-[11px] text-gray-500 font-500">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#1e1e1e]"
      aria-label="About FlowFirst Plumbing"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <div className="reveal-left order-last lg:order-first">
            <div className="relative">
              {/* Main quote card */}
              <div
                className="rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
                style={{ background: G.dark, boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)" }}
              >
                {/* Shine */}
                <div
                  className="absolute top-0 left-0 right-0 h-36 rounded-t-3xl pointer-events-none opacity-15"
                  style={{ background: "linear-gradient(180deg, #9ee7f0 0%, transparent 100%)" }}
                />
                <div
                  className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-10"
                  style={{ background: G.light }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex items-center gap-2.5">
                      <span
                        className="text-xl font-700 tracking-tight bg-clip-text text-transparent"
                        style={{ backgroundImage: G.medium }}
                      >
                        FlowFirst
                      </span>
                      <span
                        className="w-px h-5 opacity-40"
                        style={{ background: "linear-gradient(180deg, #9ee7f0, #419ebc)" }}
                        aria-hidden="true"
                      />
                      <span className="flex flex-col leading-tight">
                        <span className="text-[0.6rem] font-600 tracking-widest text-[#9ee7f0] uppercase">Plumbing</span>
                        <span className="text-[0.6rem] font-400 tracking-widest text-[#9ee7f0]/60 uppercase">&amp; Heating</span>
                      </span>
                    </span>
                  </div>

                  <blockquote className="text-white/60 text-base leading-relaxed mb-8 italic">
                    "I started FlowFirst because I wanted to offer people a
                    plumbing service they could actually rely on. Someone who
                    turns up when they say they will, does the job properly and
                    charges a fair price. That's still what I do every day."
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[#1e3f52] font-700 text-sm"
                      style={{ background: G.medium }}
                    >
                      GA
                    </div>
                    <div>
                      <p className="text-white font-600 text-sm">Owner, FlowFirst Plumbing</p>
                      <p className="text-white/40 text-xs">Shipham, North Somerset</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestone stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                {milestones.map((m) => (
                  <CounterStat key={m.label} {...m} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="reveal-right">
            <span
              className="inline-block text-sm font-600 tracking-widest uppercase mb-3 bg-clip-text text-transparent"
              style={{ backgroundImage: G.medium }}
            >
              About us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-700 text-white leading-tight tracking-tight mb-6">
              Your local plumber,{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: G.medium }}>
                done right
              </span>
            </h2>

            <div className="space-y-4 text-gray-400 text-base leading-relaxed mb-8">
              <p>
                I'm an independent plumber based in Shipham
                with over 10 years of hands-on experience. I set up FlowFirst
                Plumbing to give homeowners and businesses a service they could
                genuinely rely on. Someone who answers the phone, turns up when
                they say they will and gets the job done properly.
              </p>
              <p>
                I cover North Somerset, Bath and North East Somerset, Sedgemoor
                and Bristol, taking on everything from emergency callouts and
                general repairs to full bathroom installations and heating
                maintenance.
              </p>
              <p>
                Every job gets the same level of care and attention, whether
                it's a dripping tap or a complete re-pipe. I'm fully insured,
                and I always leave your home as clean as I found it.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: Users, text: "Independent and owner-operated. You deal directly with us — no call centres, no middlemen." },
                { icon: MapPin, text: "Based in Shipham · North Somerset, Bath & NE Somerset, Sedgemoor & Bristol" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-gray-400">
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0"
                    style={{ background: G.light }}
                  >
                    <Icon size={15} className="text-[#2d5f78]" />
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
