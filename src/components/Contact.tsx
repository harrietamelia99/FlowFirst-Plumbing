"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
import { useState, FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const G = {
  light:  "linear-gradient(135deg, #e8f6fb 0%, #b8dced 100%)",
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
  dark:   "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "07946 113945",
    href: "tel:+447946113945",
    sub: "Mon–Sat 7am–7pm · 24/7 emergencies",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@flowfirstplumbing.co.uk",
    href: "mailto:hello@flowfirstplumbing.co.uk",
    sub: "We respond within 2 hours",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "North Somerset, Bath & NE Somerset, Sedgemoor & Bristol",
    href: null,
    sub: "Based in Shipham",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 7am – 7pm",
    href: null,
    sub: "Emergency callouts available 24/7",
  },
];

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [formState, setFormState] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#1e1e1e]"
      aria-label="Contact us"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span
            className="inline-block text-sm font-600 tracking-widest uppercase mb-3 bg-clip-text text-transparent"
            style={{ backgroundImage: G.medium }}
          >
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-700 text-white leading-tight tracking-tight mb-4">
            Request a free quote
          </h2>
          <p className="text-gray-400 text-lg">
            Fill in the form or message us directly on WhatsApp — whichever is easiest for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2 reveal">
            <div className="space-y-4">

              {/* WhatsApp — first */}
              <a
                href="https://wa.me/447946113945?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20a%20plumbing%20job."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-[#2c2c2c] rounded-2xl transition-all hover:opacity-85"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)" }}
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 text-[#2d5f78]"
                  style={{ background: G.light }}
                >
                  <WhatsAppIcon />
                </span>
                <div>
                  <p className="text-xs text-gray-500 font-500 uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-white font-600 text-sm">Message us directly</p>
                  <p className="text-gray-500 text-xs mt-0.5">Tap to open a chat — we'll reply promptly</p>
                </div>
              </a>

              {contactInfo.map(({ icon: Icon, label, value, href, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 bg-[#2c2c2c] rounded-2xl transition-all"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)" }}
                >
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                    style={{ background: G.light }}
                  >
                    <Icon size={18} className="text-[#2d5f78]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 font-500 uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-white font-600 text-sm hover:text-[#9ee7f0] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white font-600 text-sm">{value}</p>
                    )}
                    <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal delay-200">
            <div
              className="bg-[#2c2c2c] rounded-2xl p-8"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)" }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: G.light }}
                  >
                    <svg className="w-8 h-8 text-[#2d5f78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-700 text-white">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thanks for getting in touch. We'll get back to you
                    shortly, usually within a couple of hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-600 bg-clip-text text-transparent hover:opacity-70 transition-opacity"
                    style={{ backgroundImage: G.medium }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {[
                      { id: "name", label: "Your Name", type: "text", placeholder: "e.g. Jane Smith", key: "name" },
                      { id: "phone", label: "Phone Number", type: "tel", placeholder: "e.g. 07700 900123", key: "phone" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-600 text-gray-300 mb-1.5">
                          {field.label}{" "}
                          <span className="bg-clip-text text-transparent" style={{ backgroundImage: G.medium }}>*</span>
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required
                          placeholder={field.placeholder}
                          value={formState[field.key as keyof typeof formState]}
                          onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                          className="w-full px-4 py-3 bg-[#1a1a1a] rounded-xl text-sm text-white placeholder:text-gray-600 focus:outline-none transition-all"
                          onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px rgba(65,158,188,0.45)")}
                          onBlur={(e) => (e.target.style.boxShadow = "none")}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-600 text-gray-300 mb-1.5">
                      Email Address{" "}
                      <span className="bg-clip-text text-transparent" style={{ backgroundImage: G.medium }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. jane@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1a1a1a] rounded-xl text-sm text-white placeholder:text-gray-600 focus:outline-none transition-all"
                      onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px rgba(65,158,188,0.45)")}
                      onBlur={(e) => (e.target.style.boxShadow = "none")}
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-600 text-gray-300 mb-1.5">
                      Tell Us About Your Job{" "}
                      <span className="bg-clip-text text-transparent" style={{ backgroundImage: G.medium }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Please describe the issue or job you need help with..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1a1a1a] rounded-xl text-sm text-white placeholder:text-gray-600 focus:outline-none transition-all resize-none"
                      onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px rgba(65,158,188,0.45)")}
                      onBlur={(e) => (e.target.style.boxShadow = "none")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 text-white font-700 rounded-xl shadow-sm hover:shadow-lg hover:opacity-90 transition-all duration-200 text-sm group"
                    style={{ background: G.dark }}
                  >
                    Request a Quote
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <p className="mt-4 text-center text-xs text-gray-500">
                    We respond within 2 hours during working hours. For
                    emergencies, call us directly. Available 24/7.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
