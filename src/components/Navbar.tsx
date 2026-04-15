"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* Gradient tokens */
const G = {
  medium: "linear-gradient(135deg, #9ee7f0 0%, #419ebc 100%)",
  dark:   "linear-gradient(135deg, #419ebc 0%, #2d5f78 100%)",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#242424]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group" aria-label="FlowFirst Plumbing home">
            <span
              className="text-[2rem] font-700 tracking-tight leading-none bg-clip-text text-transparent transition-opacity group-hover:opacity-85"
              style={{ backgroundImage: G.medium }}
            >
              FlowFirst
            </span>
            <span
              className="w-px self-stretch my-1"
              style={{ background: "linear-gradient(180deg, transparent 0%, #9ee7f0 30%, #419ebc 70%, transparent 100%)", opacity: 0.45 }}
              aria-hidden="true"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-[0.8rem] font-600 tracking-[0.06em] text-[#9ee7f0] uppercase">Plumbing</span>
              <span className="text-[0.8rem] font-400 tracking-[0.06em] text-[#9ee7f0]/70 uppercase">&amp; Heating</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-500 text-gray-400 hover:text-[#9ee7f0] rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+447946113945"
              className="flex items-center gap-2 text-sm font-600 text-gray-300 hover:text-[#9ee7f0] transition-colors"
            >
              <Phone size={15} className="text-[#9ee7f0]" />
              07946 113945
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-white text-sm font-600 rounded-xl shadow-sm hover:opacity-90 hover:shadow-md transition-all duration-200"
              style={{ background: G.dark }}
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2 border-t border-white/10" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-3 py-2.5 text-sm font-500 text-gray-300 hover:text-[#9ee7f0] hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+447946113945"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 py-3 border border-white/15 rounded-xl text-sm font-600 text-gray-300 hover:border-[#419ebc]/50 hover:text-[#9ee7f0] transition-all"
              >
                <Phone size={15} className="text-[#9ee7f0]" />
                07946 113945
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="flex items-center justify-center py-3 text-white text-sm font-600 rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: G.dark }}
              >
                Get a Free Quote
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
