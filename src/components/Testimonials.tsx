"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import TiltCard from "./TiltCard";

const G = {
  light:  "linear-gradient(135deg, #e8f6fb 0%, #b8dced 100%)",
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
  dark:   "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)",
};

const testimonials = [
  {
    name: "Jack C",
    location: "Bristol, UK",
    initials: "JC",
    avatarGrad: G.light,
    avatarTextColor: "#2d5f78",
    rating: 5,
    text: "FlowFirst were absolutely brilliant. We had a burst pipe on a Sunday morning and they were with us within 45 minutes. The plumber was polite, sorted it efficiently, and the price was exactly what they quoted. Will not use anyone else.",
    service: "Emergency Plumbing",
  },
  {
    name: "Mark D",
    location: "Bridgwater, UK",
    initials: "MD",
    avatarGrad: G.medium,
    avatarTextColor: "#1e3f52",
    rating: 5,
    text: "I manage several commercial properties and have used FlowFirst for the past three years. They are consistently reliable, their pricing is transparent, and the quality of work is excellent. Highly recommend for both domestic and commercial.",
    service: "Commercial Plumbing",
  },
  {
    name: "Lisa & Tom G",
    location: "Weston-Super-Mare, UK",
    initials: "LG",
    avatarGrad: G.dark,
    avatarTextColor: "#ffffff",
    rating: 5,
    text: "We had a full bathroom installed and are thrilled with the result. The team were tidy, professional, and kept us informed throughout. The finished work looks stunning and everything works perfectly. Brilliant from start to finish.",
    service: "Bathroom Installation",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-gray-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="text-6xl font-700 leading-none mb-4 -mt-2 select-none bg-clip-text text-transparent"
        style={{ backgroundImage: G.medium, opacity: 0.2 }}
      >
        &ldquo;
      </div>
      <StarRating rating={testimonial.rating} />
      <blockquote className="mt-4 mb-6 text-gray-400 text-sm leading-relaxed flex-1">
        {testimonial.text}
      </blockquote>
      <div className="mb-5">
        <span
          className="inline-block text-[11px] font-600 px-3 py-1 rounded-full text-[#1e3f52]"
          style={{ background: G.light }}
        >
          {testimonial.service}
        </span>
      </div>
      <div
        className="flex items-center gap-3 pt-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-700 flex-shrink-0"
          style={{ background: testimonial.avatarGrad, color: testimonial.avatarTextColor }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="font-700 text-white text-sm">{testimonial.name}</p>
          <p className="text-gray-500 text-xs">{testimonial.location}</p>
        </div>
      </div>
    </>
  );
}

export default function Testimonials() {
  const sectionRef = useScrollReveal();
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-[#242424]"
      aria-label="Customer testimonials"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span
            className="inline-block text-sm font-600 tracking-widest uppercase mb-3 bg-clip-text text-transparent"
            style={{ backgroundImage: G.medium }}
          >
            Customer reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-700 text-white leading-tight tracking-tight mb-4">
            Don't just take our word for it
          </h2>
          <p className="text-gray-400 text-lg">
            Here's what our customers say about working with FlowFirst Plumbing.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden reveal">
          <div className="relative">
            {/* Card */}
            <div
              className="bg-[#2c2c2c] rounded-2xl p-7 flex flex-col"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)", minHeight: 320 }}
            >
              <TestimonialCard testimonial={testimonials[active]} />
            </div>

            {/* Arrow buttons */}
            <button
              onClick={prev}
              aria-label="Previous review"
              className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              style={{ background: "linear-gradient(135deg,#419ebc,#2d5f78)", boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              style={{ background: "linear-gradient(135deg,#419ebc,#2d5f78)", boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to review ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 20 : 8,
                  height: 8,
                  background: i === active
                    ? "linear-gradient(90deg,#9ee7f0,#419ebc)"
                    : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid reveal-group md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TiltCard
              as="article"
              key={testimonial.name}
              className="reveal bg-[#2c2c2c] rounded-2xl p-7 flex flex-col"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
                animationDelay: `${index * 120}ms`,
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
