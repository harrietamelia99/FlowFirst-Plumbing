"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const G = {
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
  dark:   "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)",
};

const faqs = [
  {
    question: "Do you charge a call-out fee?",
    answer:
      "There's no call-out fee for standard quote visits. For emergency callouts outside of normal working hours, a call-out charge may apply. We'll always make this clear before attending.",
  },
  {
    question: "How quickly can you respond to a plumbing emergency?",
    answer:
      "For emergencies, we aim to reach you within the hour across our service area. Available 24 hours a day, 7 days a week for urgent jobs like burst pipes, flooding or a complete loss of water.",
  },
  {
    question: "Are you fully qualified and insured?",
    answer:
      "Yes. We hold full public liability insurance and have over 10 years of professional plumbing experience. You're welcome to ask for details before booking.",
  },
  {
    question: "Do you offer a guarantee on your work?",
    answer:
      "Yes. All workmanship is guaranteed for 12 months as standard. If an issue comes up from work we've carried out within that period, we'll come back and put it right at no extra charge.",
  },
  {
    question: "Can you provide a fixed price before starting the work?",
    answer:
      "In most cases, yes. We'll assess the job and give you a clear, fixed quote before anything starts. For larger or more complex work where the full scope isn't clear upfront, a day-rate may apply and this will always be agreed with you first.",
  },
  {
    question: "Do you work on commercial properties as well as domestic?",
    answer:
      "Yes. We work with homeowners, landlords, letting agents and small businesses. Get in touch to chat through what you need and we'll be happy to help.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We're based in Shipham and cover North Somerset, Bath and North East Somerset, Sedgemoor and Bristol. Not sure if you're in the area? Just give us a ring and we'll let you know.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        boxShadow: isOpen
          ? "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(158,231,240,0.08)"
          : "0 2px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[#2c2c2c] hover:bg-[#303030] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-600 text-white text-sm sm:text-base pr-4">
          {faq.question}
        </span>
        <span
          className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg text-white transition-all"
          style={
            isOpen
              ? { background: G.dark }
              : { background: "rgba(255,255,255,0.05)", color: "#9a9a9a" }
          }
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <div
          className="px-6 pb-5 pt-0 bg-[#2c2c2c]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useScrollReveal();

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#242424]"
      aria-label="Frequently asked questions"
      ref={sectionRef}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span
            className="inline-block text-sm font-600 tracking-widest uppercase mb-3 bg-clip-text text-transparent"
            style={{ backgroundImage: G.medium }}
          >
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-700 text-white leading-tight tracking-tight mb-4">
            Common questions
          </h2>
          <p className="text-gray-400 text-lg">
            Can't find what you're looking for? Give us a ring and we'll be
            happy to help.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3 reveal">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center reveal">
          <p className="text-gray-500 text-sm mb-4">
            Still got a question? We're happy to chat.
          </p>
          <a
            href="tel:+447946113945"
            className="inline-flex items-center gap-2 font-700 bg-clip-text text-transparent hover:opacity-70 transition-opacity"
            style={{ backgroundImage: G.medium }}
          >
            Call us: 07946 113945
          </a>
        </div>
      </div>
    </section>
  );
}
