import { Phone, Mail, MapPin } from "lucide-react";

const G = {
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
  dark:   "linear-gradient(135deg, #419ebc 0%, #2d5f78 50%, #1e3f52 100%)",
};

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Emergency Plumbing",
  "General Repairs",
  "Leak Detection",
  "Bathroom Plumbing",
  "Pipework & Installations",
  "Heating & Maintenance",
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className="text-gray-500"
      style={{ background: "#141414", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      aria-label="Site footer"
    >
      {/* Top gradient line */}
      <div
        className="h-px w-full"
        style={{ background: G.medium, opacity: 0.4 }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 lg:py-16"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-3.5 mb-5 group" aria-label="FlowFirst Plumbing home">
              <span
                className="text-[1.45rem] font-700 tracking-tight leading-none bg-clip-text text-transparent group-hover:opacity-85 transition-opacity"
                style={{ backgroundImage: G.medium }}
              >
                FlowFirst
              </span>
              <span
                className="w-px h-8"
                style={{ background: "linear-gradient(180deg, transparent 0%, #9ee7f0 30%, #419ebc 70%, transparent 100%)", opacity: 0.4 }}
                aria-hidden="true"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-[0.65rem] font-600 tracking-[0.06em] text-[#9ee7f0] uppercase">Plumbing</span>
                <span className="text-[0.65rem] font-400 tracking-[0.06em] text-[#9ee7f0]/65 uppercase">&amp; Heating</span>
              </span>
            </a>

            <p className="text-sm leading-relaxed mb-6">
              Independent plumbing service based in Shipham. Serving
              North Somerset, Bath & NE Somerset, Sedgemoor and Bristol.
            </p>

            <div className="space-y-3">
              <a href="tel:+447946113945" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group">
                <Phone size={15} className="text-[#419ebc] group-hover:text-[#9ee7f0] transition-colors" />
                07946 113945
              </a>
              <a href="mailto:hello@flowfirstplumbing.co.uk" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group">
                <Mail size={15} className="text-[#419ebc] group-hover:text-[#9ee7f0] transition-colors" />
                hello@flowfirstplumbing.co.uk
              </a>
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin size={15} className="text-[#419ebc] flex-shrink-0" />
                Shipham · North Somerset & Bristol
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-700 text-sm mb-5 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-[#9ee7f0] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-700 text-sm mb-5 tracking-wide uppercase">
              Our Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm hover:text-[#9ee7f0] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-700 text-sm mb-5 tracking-wide uppercase">
              Opening Hours
            </h3>
            <dl className="space-y-2 text-sm mb-6">
              <div className="flex justify-between gap-4">
                <dt>Monday – Friday</dt>
                <dd className="text-white font-500">7am – 7pm</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Saturday</dt>
                <dd className="text-white font-500">8am – 5pm</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Sunday</dt>
                <dd className="text-amber-400 font-500">Emergencies only</dd>
              </div>
            </dl>

            <div
              className="rounded-xl p-4"
              style={{
                background: "linear-gradient(135deg, rgba(65,158,188,0.08) 0%, rgba(30,63,82,0.15) 100%)",
                border: "1px solid rgba(65,158,188,0.2)",
              }}
            >
              <p
                className="text-xs font-600 mb-1 bg-clip-text text-transparent"
                style={{ backgroundImage: G.medium }}
              >
                Emergency Line
              </p>
              <a
                href="tel:+447946113945"
                className="text-white font-700 hover:text-[#9ee7f0] transition-colors"
              >
                07946 113945
              </a>
            </div>
          </div>
        </div>

        {/* Website credit */}
        <div className="flex justify-center py-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <a
            href="https://www.collectivstudio.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs font-600 tracking-wide transition-all duration-200 hover:opacity-80"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "#9ee7f0",
              boxShadow: "0 0 0 1px rgba(158,231,240,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            Website by Collectiv Studio
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p>© {currentYear} FlowFirst Plumbing. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
